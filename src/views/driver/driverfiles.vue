<template>
  <div class="container">
    <!-- 搜索框 -->
    <div class="order_search">
      <el-form ref="ruleForm" :inline="true" :model="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="司机账号" prop="driver_phone">
          <el-input v-model="ruleForm.driver_phone" style="width: 300px;" />
        </el-form-item>
        <el-form-item label="司机名称" prop="driver_name">
          <el-input v-model="ruleForm.driver_name" style="width: 300px;" />
        </el-form-item>
        <el-form-item label="所在区域 " prop="location">
          <el-input v-model="ruleForm.location" style="width: 300px;" />
        </el-form-item>
        <el-form-item label="司机状态 " prop="state">
          <el-select v-model="ruleForm.state" placeholder="请选择" style="width: 300px;">
            <el-option label="有效" value="1" />
            <el-option label="无效" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="认证状态" prop="trial_state">
          <el-select v-model="ruleForm.trial_state" placeholder="请选择" style="width: 300px;">
            <el-option label="已认证" value="1" />
            <el-option label="未认证" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="司机工作状态" prop="work_type">
          <el-select v-model="ruleForm.work_type" placeholder="请选择" style="width: 300px;">
            <el-option label="已认证" value="1" />
            <el-option label="未认证" value="2" />
          </el-select>
        </el-form-item>
        <el-checkbox label="待我审核" name="checkbox" />
      </el-form>
      <el-button type="primary" @click="onSubmit('ruleForm')">
        查询
      </el-button>
      <el-button @click="resetForm('ruleForm')">
        重置
      </el-button>
    </div>
    <!-- 表格展示 -->
    <div class="tab_warpper">
      <div class="tab_title clearfix">
        <div class="left">
          <i />司机档案列表
        </div>
        <div class="right">
          <router-link to="/driver/adddriverfiles">
            <el-button style="background: #31D093;color: #fff;">
              新增+
            </el-button>
          </router-link>
          <el-button>导入+</el-button>
          <el-button>导出+</el-button>
          <el-button>更换手机号</el-button>
        </div>
      </div>
      <el-table :data="tableData" border style="margin:1%;width: 98%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="36" />
        <el-table-column sortable fixed prop="driver_phone" label="司机账号" />
        <el-table-column prop="driver_name" label="司机名称" />
        <el-table-column prop="location" label="所在区域" width="180" :formatter="car_type" />
        <el-table-column prop="identity" label="身份证号" width="180" />
        <el-table-column prop="drive" label="驾驶证号" />
        <el-table-column prop="practitioners" label="从业资格证号" />
        <el-table-column prop="state" label="司机状态">
          <template slot-scope="scope">
            <p>{{ scope.row.state == 1 ? '有效' : '无效' }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="work_type" label="司机工作状态">
          <template slot-scope="scope">
            <p>{{ scope.row.work_type == 1 ? '待单' : '途中' }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="trial_state" label="认证状态">
          <template slot-scope="scope">
            <p>{{ scope.row.trial_state == 1 ? '以认证' : '未认证' }}</p>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="220">
          <template slot-scope="scope">
            <el-button type="text" size="small">
              <router-link :to="{name: 'driver_details', params: {id: scope.row.id}}">
                详情
              </router-link>
            </el-button>
            <el-button type="text" size="small">
              <router-link :to="{name: 'modify_driver', params: {id: scope.row.id}}">
                修改
              </router-link>
            </el-button>
            <el-button type="text" size="small">
              审核
            </el-button>
            <el-button type="text" size="small">
              日志
            </el-button>
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
} from '../../api/driver'
export default {
  data() {
    return {
      ruleForm: {
        driver_phone: '',
        driver_name: '',
        location: '',
        state: '',
        trial_state: '',
        work_type: ''
      },
      location: '',
      state: 0,
      page: 1,
      limit: 10,
      driver_phone: '',
      province: '',
      city: '',
      area: '',
      checked: '',
      trial_state: '',
      work_type: '',
      tableData: null,
      currentPage: 1, // 分页
      val: ''
    }
  },
  created() {
    const data = {
      page: this.page,
      state: this.state,
      limit: this.limit,
      location: this.location,
      driver_phone: this.driver_phone,
      province: this.province,
      work_type: this.work_type,
      city: this.city,
      area: this.area,
      trial_state: this.trial_state
    }
    getList(data).then(res => {
      this.tableData = res.result.list
      this.total = res.result.total
    })
    // console.log(getList(data))
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    }, // 表格
    // 分页
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      getList({ page: this.page, limit: val }).then(res => {
        this.tableData = res.result.list
        this.total = res.result.total
      })
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      getList({ page: val, limit: 10 }).then(res => {
        this.tableData = res.result.list
        this.total = res.result.total
      })
    },
    // getUrl({row}) {
    // 	return '/customer/details?id=' + row.id
    // }
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    onSubmit() {

    },
    car_type(row) {
      var location = row.province + '/' + row.city + '/' + row.area
      return location
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

	.el-button--medium {
		padding: 10px 20px;
		font-size: 14px;
		border-radius: 4px;
		margin-left: 30px;
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
