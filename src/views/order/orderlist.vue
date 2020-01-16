<template>
  <div class="container">
    <!-- 搜索框 -->
    <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="ruleForm" label-width="100px" class="demo-ruleForm">
      <div class="order_search">
        <div class="int_model">
          <div>
            订单编号 &nbsp;&nbsp;<el-input v-model="ruleForm.order_sn" style="width: 50%" placeholder="请输入编号" />
          </div>
          <div>
            客户名称 &nbsp;&nbsp;<el-input v-model="ruleForm.customer_name_j" style="width: 50%" placeholder="请输入名称" />
          </div>
          <div>
            车牌号码 &nbsp;&nbsp;<el-input v-model="ruleForm.num" style="width: 50%" placeholder="请输入车辆号码" />
          </div>
        </div>
        <div class="int_model mt36">
          <div>
            线路名称 &nbsp;&nbsp;<el-input v-model="ruleForm.line_name" style="width: 50%" placeholder="请输入线路关键字" />
          </div>
          <div>
            靠台时间 &nbsp;
            <el-time-select
              v-model="ruleForm.platform_start"
              placeholder="起始时间"
              :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00'
              }"
            />
            <el-time-select
              v-model="ruleForm.platform_stop"
              placeholder="结束时间"
              :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00',
                minTime: ruleForm.platform_start
              }"
            />
          </div>
          <div>
            订单状态 &nbsp;
            <el-select v-model="ruleForm.order_type" style="width: 50%" placeholder="请选择">
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>

        <div class="btn_warpper">
          <el-button type="primary" @click="The_query">查询</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button>筛选标签+</el-button>
        </div>
      </div>
    </el-form>
    <!-- 表格展示 -->
    <div class="tab_warpper">
      <div class="tab_title clearfix">
        <div class="left">
          <i />订单列表
        </div>

        <div class="right">
          <el-button type="primary">短驳订单+</el-button>
          <el-button type="primary">异常登记+</el-button>
          <el-button type="primary">时效罚款+</el-button>
          <el-button type="primary">回单上传+</el-button>
          <el-button style="background: #31D093;color: #fff;">导出EXCEL</el-button>
          <el-button>表格设置+</el-button>
        </div>
      </div>

      <el-table :data="tableData" border style="margin:1%;width: 98%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="36" />
        <el-table-column sortable fixed prop="order_sn" label="订单编号" width="150" />
        <el-table-column prop="customer_name_j" label="客户名称" width="150" />
        <el-table-column prop="line_name" label="线路名称" width="150" />
        <el-table-column prop="line_number" label="线路编号" width="150" />
        <el-table-column prop="num" label="车辆号码" width="150" />
        <el-table-column prop="audit" label="订单状态" width="150" :formatter="audit" />
        <el-table-column prop="goods_type" label="货品类型" width="150" :formatter="goods_type" />
        <el-table-column prop="goods_name" label="货物信息" width="150" :formatter="goods_name" />
        <el-table-column prop="ontime" label="靠台时间" width="150" />
        <el-table-column fixed="right" label="操作" width="220">
          <template slot-scope="scope">
            <el-button type="text" size="small"><router-link to="/orderdetails">详情</router-link></el-button>
            <el-button type="text" size="small">修改</el-button>
            <el-button type="text" size="small">复制</el-button>
            <el-button type="text" size="small">轨迹</el-button>
            <el-button type="text" size="small">取消</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="block" style="text-align: right;margin:29px 25px 0 0;padding-bottom: 56px">
        <el-pagination
          background
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { getorderlist } from '../../api/order'
export default {
  data() {
    return {
      ruleForm: {
        order_sn: '',
        customer_name_j: '',
        num: '',
        platform_start: '',
        platform_stop: '',
        line_name: '',
        order_type: '',
        page: 1,
        limit: 10
      },
      tableData: [{
        order_sn: '', // 订单编号
        customer_name_j: '', // 客户名称
        line_name: '', // 线路名称
        line_number: '', // 线路编号
        num: ' ', // 车辆号码
        audit: '', // 订单审核状态 0 未审核，1 通过审核，2 审核中，3 审核异常,4 待接单,5待靠台,6回单审核,7运输中,8待装货,9已送达,10已完成，11，已拒单，12 取消，13 回单不通过
        goods_type: '', // 货品类型 1 普货, 2 危险品, 3 散装货, 4 特殊品'
        goods_name: '', // goods_name/weight/volume  ==》货品名称/体重/体积
        ontime: '' // 靠台时间--暂无
      }],
      option: [
        { value: '0', label: '未审核' }, { value: '1', label: '通过审核' }, { value: '2', label: '审核中' }, { value: '3', label: '审核异常' }, { value: '4', label: '待接单' }, {
          value: '5', label: '待靠台' }, { value: '6', label: '回单审核' }, { value: '7', label: '运输中' }, { value: '8', label: '待装货' }, { value: '9', label: '已送达' }, {
          value: '10', label: '已完成' }, { value: '11', label: '已拒单' }, { value: '12', label: '取消' }, { value: '13', label: '回单不通过' }
      ],
      currentPage: 1, // 分页
      val: '',
      total: 0
    }
  },
  created() {
    // 获取订单列表
    getorderlist({ page: 1, limit: 10 }).then(res => {
      this.tableData = res.result.list
      this.total = res.result.total
    })
  },
  methods: {
    // 查询方法
    The_query() {
      getorderlist(this.ruleForm).then(res => {
        this.tableData = res.result.list
        this.total = res.result.total
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }, // 表格

    // 分页
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      getorderlist({ page: this.ruleForm.page, limit: val }).then(res => {
        if (res.code) {
          this.tableData = res.result.list
          this.total = res.result.total
        }
      })
    },
    handleCurrentChange(val) {
      // console.log(`第 ${val} 页`)
      getorderlist({ page: val, limit: 10 }).then(res => {
        this.tableData = res.result.list
        this.total = res.result.total
      })
    },
    // 重置方法
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // 类型判断
    goods_name(row) {
      // goods_name/weight/volume  ==> 货品名称/体重/体积
      return row.goods_name + '/' + row.weight + '吨/' + row.volume + '方'
    },
    goods_type(row) {
      // 货品类型 1 普货, 2 危险品, 3 散装货, 4 特殊品'
      if (row.goods_type == 1) {
        return '普货'
      } else if (row.goods_type == 2) {
        return '危险品'
      } else if (row.goods_type == 3) {
        return '散装货'
      } else if (row.goods_type == 4) {
        return '特殊品'
      } else {
        return '未知'
      }
    },
    audit(row) {
      // 订单审核状态 0 未审核，1 通过审核，2 审核中，3 审核异常,4 待接单,5待靠台,6回单审核,7运输中,8待装货,9已送达,10已完成，11，已拒单，12 取消，13 回单不通过
      if (row.audit == 0) {
        return '未审核'
      } else if (row.audit == 1) {
        return '通过审核'
      } else if (row.audit == 2) {
        return '审核中'
      } else if (row.audit == 3) {
        return '审核异常'
      } else if (row.audit == 4) {
        return '待接单'
      } else if (row.audit == 5) {
        return '待靠台'
      } else if (row.audit == 6) {
        return '回单审核'
      } else if (row.audit == 7) {
        return '运输中'
      } else if (row.audit == 8) {
        return '待装货'
      } else if (row.audit == 9) {
        return '已送达'
      } else if (row.audit == 10) {
        return '已完成'
      } else if (row.audit == 11) {
        return '已拒单'
      } else if (row.audit == 12) {
        return '取消'
      } else if (row.audit == 13) {
        return '回单不通过'
      }
    }
  }
}
</script>
<style lang="scss" scope>
.container{padding: 20px;background-color: rgb(240, 242, 245);position: relative;}
.order_search{padding: 46px;background: #fff;box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;}
.int_model{width: 100%;height: 40px;display: flex;
    & div{flex: 1;}
}
.mt36{margin-top: 36px;}
.el-range-editor--medium .el-range__icon {position: absolute!important;right: 5px!important;}
.el-range-editor--medium .el-range-separator {width: 20px!important;}
.btn_warpper{
    width: 100%;
    height: auto;
    margin-top: 45px;
    & button:not(:first-child){margin-left: 38px}
}
.tab_warpper{width: 100%;height: auto;background: #fff;box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;margin-top: 20px;}
.tab_title{
    height: 70px;
    line-height: 70px;
    padding:0 30px;
    border-bottom: 1px solid #F1F1F1;
    & .left i{
        width:4px;
        height:25px;
        display:inline-block;
        background:rgba(58,156,255,1);
        float: left;
        margin:22px 10px 0 0;
    }
}
.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: 127px!important;
}
</style>
