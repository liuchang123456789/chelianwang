<template>
  <div class="container">
    <!-- 搜索框 -->
    <div class="order_search">
      <el-form ref="user" :inline="true" :model="user" :rules="user" label-width="100px" class="demo-user">
        <el-form-item label="车牌号码:" prop="num">
          <el-input v-model="user.num" style="width: 400px;" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="车架号:" prop="frame_num">
          <el-input v-model="user.frame_num" placeholder="请输入" style="width: 400px;" />
        </el-form-item>
        <el-form-item label="发动机号:" prop="engine_num">
          <el-input v-model="user.engine_num" placeholder="请输入" style="width: 400px;" />
        </el-form-item>
        <el-form-item label="车牌型号" prop="num_type">
          <el-select v-model="user.num_type" placeholder="请选择活动区域">
            <el-option label="拖头" value="1" />
            <el-option label="挂车" value="2" />
            <el-option label="整车" value="3" />
          </el-select>
        </el-form-item>
        <el-form-item label="车辆类型:" prop="type">
          <el-select v-model="user.type" placeholder="请选择活动区域">
            <el-option label="不限" value="1" />
            <el-option label="厢车" value="2" />
            <el-option label="平板" value="3" />
            <el-option label="高栏" value="4" />
            <el-option label="冷柜" value="5" />
            <el-option label="高栏厢车" value="6" />
            <el-option label="油罐车" value="7" />
            <el-option label="轿运车" value="8" />
            <el-option label="奶罐车" value="9" />
            <el-option label="其它车" value="10" />
          </el-select>
          <el-select v-model="user.length" placeholder="请选择活动区域">
            <el-option label="2.4米" value="1" />
            <el-option label="4.2米" value="2" />
            <el-option label="4.8米" value="3" />
            <el-option label="5.2米" value="4" />
            <el-option label="6.2米" value="5" />
            <el-option label="6.8米" value="6" />
            <el-option label="7.6米" value="7" />
            <el-option label="8.6米" value="8" />
            <el-option label="9.6米" value="9" />
            <el-option label="12.5米" value="10" />
            <el-option label="13.5米" value="11" />
            <el-option label="15米" value="12" />
            <el-option label="16米" value="13" />
            <el-option label="17.5米" value="14" />
            <el-option label="19米" value="15" />
            <el-option label="19.5米" value="16" />
            <el-option label="20米" value="17" />
            <el-option label="21米" value="18" />
          </el-select>
        </el-form-item>
        <el-form-item label="负责人:" prop="principal">
          <el-input v-model="user.principal" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="车辆状态" prop="state">
          <el-select v-model="user.state" placeholder="请选择活动区域">
            <el-option label="在途" value="1" />
            <el-option label="在台" value="2" />
            <el-option label="检修中" value="3" />
          </el-select>
        </el-form-item>
        <el-checkbox label="待我审核" name="checkbox" />
      </el-form>
      </el-form>
      <el-button type="primary" @click="onSubmit('user')">查询</el-button>
      <el-button @click="resetForm('user')">重置</el-button>
    </div>
    <!-- 表格展示 -->
    <div class="tab_warpper">
      <div class="tab_title clearfix">
        <div class="left">
          <i />车辆档案列表
        </div>
        <div class="right">
          <el-button type="primary">车辆新增</el-button>
          <el-button type="primary">挂车新增</el-button>
          <el-button type="primary">更换车牌</el-button>
          <el-button style="background: #31D093;color: #fff;">导入+</el-button>
          <el-button style="background: #31D093;color: #fff;">导出+</el-button>
        </div>
      </div>
      <el-table :data="tableData" border style="margin:1%;width: 98%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="36" />
        <el-table-column sortable fixed prop="num" label="车牌号" />
        <el-table-column prop="frame_num" label="车架号" />
        <el-table-column prop="num_type" label="车牌类型" :formatter="num_type" />
        <el-table-column prop="cartype" label="车辆类型" :formatter="cartype" />
        <el-table-column prop="material" :formatter="material" label="挂车材质" />
        <el-table-column prop="source" label="车辆来源" :formatter="source" />
        <el-table-column prop="engine_num" label="发动机号" :formatter="engine_num" />
        <el-table-column prop="principal" label="负责人" />
        <el-table-column prop="state" label="车辆状态" :formatter="state" />
        <el-table-column prop="trial_state" label="认证状态" :formatter="trial_state" />
        <el-table-column fixed="right" label="操作" width="220">
          <template slot-scope="scope">
            <el-button type="text" size="small">
              <router-link :to="{name: 'vehicle_details', params: {id: scope.row.id}}">详情</router-link>
            </el-button>
            <el-button type="text" size="small">
              <router-link :to="{name: 'vehicle_modification', params: {id: scope.row.id}}">修改</router-link>
            </el-button>
            <el-button type="text" size="small">审核</el-button>
            <el-button type="text" size="small">日志</el-button>
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
import {
  vehicle,
  delEte
} from '../../api/vehicle'
export default {
  data() {
    return {
      user: {
        // num: '',
        // frame_num: '',
        // engine_num: '',
        // type: '',
        // principal: '',
        // num_type: '',
        // checkbox: '',
        // length: '',
        // state: '',
        // trial_state: ''
      },
      id: '1',
      page: '1',
      limit: '10',
      tableData: null,
      currentPage: 1 // 分页
    }
  },
  created() {
    const query = {
      page: this.page,
      limit: this.limit
    }
    vehicle(query).then(res => {
      // res.result.list.cartype = res.result.list.type + "/" + res.result.list.length;
      // console.log(res.result.list.cartype)
      this.tableData = res.result.list
      this.total = res.result.total
    })
  },
  methods: {
    engine_num(user) {
      if (user.num_type == 2) {
        return user.engine_num = '——'
      } else if (user.num_type != 2) {
        return user.engine_num = user.engine_num
      }
      // return user.num_type == 2 ? user.engine_num == "——" : user.engine_num = user.engine_num
    },

    onSubmit(user) {
      this.loading = true
      vehicle(user).then(res => {
        // res.result.list.cartype = res.result.list.type + "/" + res.result.list.length;
        // console.log(res.result.list.cartype)
        // this.orderList = data;
        this.loading = false
        this.tableData = res.result.list
      }), {
        num: this.user.num, // 传递对应参数给后台
        frame_num: parseInt(this.user.frame_num), // 部分参数要注意转类型
        engine_num: this.user.engine_num,
        num_type: this.user.num_type,
        type: this.user.type,
        length: this.user.length,
        principal: this.user.principal,
        state: this.user.state
      }
    },
    resetForm(user) {
      this.$refs[user].resetFields()
    },

    handleSelectionChange(val) {
      this.multipleSelection = val
    }, // 表格
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      vehicle({ page: this.page, limit: val }).then(res => {
        // res.result.list.cartype = res.result.list.type + "/" + res.result.list.length;
        // console.log(res.result.list.cartype)
        this.tableData = res.result.list
        this.total = res.result.total
      })
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      vehicle({ page: val, limit: 10 }).then(res => {
        // res.result.list.cartype = res.result.list.type + "/" + res.result.list.length;
        // console.log(res.result.list.cartype)
        this.tableData = res.result.list
        this.total = res.result.total
      })
    },

    num_type(row) {
      if (row.num_type == 1) {
        return '拖头'
      } else if (row.num_type == 2) {
        return '挂车'
      } else if (row.num_type == 3) {
        return '整车'
      }
    },
    source(row) {
      if (row.source == 1) {
        return '自有车'
      } else if (row.source == 2) {
        return '外请车'
      }
    },
    state(row) {
      if (row.state == 1) {
        return '有效'
      } else if (row.state == 2) {
        return '无效'
      }
    },
    trial_state(row) {
      if (row.trial_state == 1) {
        return '已认证'
      } else if (row.trial_state == 2) {
        return '未认证'
      } else if (row.trial_state == 3) {
        return '认证未通过'
      }
    },
    material(row) {
      if (row.material == 1) {
        return '复合板'
      } else if (row.material == 2) {
        return '铁柜'
      } else if (row.material == 3) {
        return '铝柜'
      } else if (row.material == 4) {
        return '冷柜'
      } else if (row.material == 5) {
        return '其它'
      } else if (row.material == 0) {
        return '——'
      }
    },
    cartype(row) {
      if (row.num_type == 2) {
        return row.cartype = '——'
      } else {
        return row.type + '/' + row.length
      }
    }
  }
}
</script>
<style lang="scss" scope>
	.container {
		padding: 20px;
		background-color: rgb(240, 242, 245);
		position: relative;
	}

	.order_search {
		padding: 46px;
		background: #fff;
		box-shadow: 0px 2px 5px rgba(18, 31, 62, 0.16);
		border-radius: 5px;
	}

	.int_model {
		width: 100%;
		height: 40px;
		display: flex;

		& div {
			flex: 1;
		}
	}

	.mt36 {
		margin-top: 36px;
	}

	.el-range-editor--medium .el-range__icon {
		position: absolute !important;
		right: 5px !important;
	}

	.el-range-editor--medium .el-range-separator {
		width: 20px !important;
	}

	.btn_warpper {
		width: 100%;
		height: auto;
		margin-top: 45px;

		& button:not(:first-child) {
			margin-left: 38px
		}
	}

	.tab_warpper {
		width: 100%;
		height: auto;
		background: #fff;
		box-shadow: 0px 2px 5px rgba(18, 31, 62, 0.16);
		border-radius: 5px;
		margin-top: 20px;
	}

	.tab_title {
		height: 70px;
		line-height: 70px;
		padding: 0 30px;
		border-bottom: 1px solid #F1F1F1;

		& .left i {
			width: 4px;
			height: 25px;
			display: inline-block;
			background: rgba(58, 156, 255, 1);
			float: left;
			margin: 22px 10px 0 0;
		}
	}
</style>
