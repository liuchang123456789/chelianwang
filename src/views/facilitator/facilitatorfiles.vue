<template>
  <div class="container">
    <!-- 搜索框 -->
    <div class="order_search">
      <el-form ref="ruleForm" :inline="true" :model="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="服务商账号" prop="serial">
          <el-input v-model="ruleForm.serial" style="width: 300px;" />
        </el-form-item>
        <el-form-item label="服务商名称" prop="service_name">
          <el-input v-model="ruleForm.service_name" style="width: 300px;" />
        </el-form-item>
        <el-form-item label="服务商类型 " prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择" style="width: 300px;">
            <el-option label="油卡" value="1" />
            <el-option label="ETC" value="2" />
            <el-option label="维修保养" value="3" />
          </el-select>
        </el-form-item>
        <el-form-item label="服务商状态 " prop="state">
          <el-select v-model="ruleForm.state" placeholder="请选择" style="width: 300px;">
            <el-option label="有效" value="1" />
            <el-option label="无效" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="认证状态" prop="trial_state">
          <el-select v-model="ruleForm.trial_state" placeholder="请选择" style="width: 300px;">
            <el-option label="已认证" value="1" />
            <el-option label="未认证" value="2" />
            <el-option label="认证未通过" value="3" />
          </el-select>
        </el-form-item>
        <el-checkbox label="待我审核" name="checkbox" />

      </el-form>
      <el-button type="primary" @click="onSubmit('ruleForm')">查询</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </div>
    <!-- 表格展示 -->
    <div class="tab_warpper">
      <div class="tab_title clearfix">
        <div class="left">
          <i />服务商档案列表
        </div>

        <div class="right">
          <router-link to="/facilitator/addfacilitator">
            <el-button style="background: #31D093;color: #fff;">新增+</el-button>
          </router-link>
          <el-button style="background: #31D093;color: #fff;">导出+</el-button>
        </div>
      </div>

      <el-table :data="tableData" border style="margin:1%;width: 98%;text-align: center" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="36" />
        <el-table-column sortable fixed prop="serial" label="服务商账号" width="150" />
        <el-table-column prop="service_name" label="服务商名称" width="150" />
        <el-table-column prop="type" label="服务商类型" width="200" :formatter="type" />
        <el-table-column prop="name" label="联系人" width="200" />
        <el-table-column prop="address" label="服务商地址" width="200" />
        <el-table-column prop="state" label="服务商状态" width="200" :formatter="state" />
        <el-table-column prop="trial_state" label="认证状态" width="200" :formatter="trial_state" />
        <el-table-column label="服务商二维码" width="200">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="open">查看</el-button>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="220">
          <template slot-scope="scope">
            <el-button type="text" size="small">
              <router-link :to="{name: 'service_details', params: {id: scope.row.id}}">详情</router-link>
            </el-button>
            <el-button type="text" size="small">
              <router-link :to="{name: 'service_modify', params: {id: scope.row.id}}">修改</router-link>
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
  getList
} from '../../api/facilitator'
export default {
  data() {
    return {
      page: 1,
      tableData: null,
      limit: 10,
      ruleForm: {},
      currentPage: 1// 分页

    }
  },
  created() {
    const data = {
      page: this.page,
      limit: this.limit
    }
    getList(data).then(res => {
      this.tableData = res.result.list
      this.total = res.result.total
    })
    // console.log(customerUser(data))
  },
  methods: {
    open() {
      this.$alert('这是一张二维码', '二维码', {
        showConfirmButton: false
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }, // 表格

    // 分页
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      getList({ page: this.page, limit: val }).then(res => {
        this.tableData = res.result.list
        this.total = res.result.total
      })
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      getList({ page: val, limit: 10 }).then(res => {
        this.tableData = res.result.list
        this.total = res.result.total
      })
    },
    type(row) {
      if (row.type == 1) {
        return '油卡'
      } else if (row.type == 2) {
        return 'ETC'
      } else if (row.type == 3) {
        return '维修保修'
      }
    },
    state(row) {
      if (row.state == 1) {
        return '无效'
      } else if (row.state == 2) {
        return '有效'
      }
    },
    trial_state(row) {
       				if (row.trial_state == 1) {
        return '未认证'
      } else if (row.trial_state == 2) {
        return '已认证'
      } else if (row.trial_state == 3) {
        return '认证未通过'
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

	.el-table .cell {
		text-align: center
	}
</style>
