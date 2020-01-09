<template>
	<div class="container">
		<!-- 搜索框 -->
		<div class="order_search">
			<el-form :inline="true" :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="客户编号" prop="number">
					<el-input v-model="ruleForm.number" style="width: 300px;"></el-input>
				</el-form-item>
				<el-form-item label="客户全称" prop="customer_name">
					<el-input v-model="ruleForm.customer_name" style="width: 300px;"></el-input>
				</el-form-item>
				<el-form-item label="客户简称" prop="customer_name_j">
					<el-input v-model="ruleForm.customer_name_j" style="width: 300px;"></el-input>
				</el-form-item>
				<el-form-item label="客户状态" prop="state">
					<el-select v-model="ruleForm.state" placeholder="请选择" style="width: 300px;">
						<el-option label="有效" value="1"></el-option>
						<el-option label="无效" value="2"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="认证状态" prop="trial_state">
					<el-select v-model="ruleForm.trial_state" placeholder="请选择" style="width: 300px;">
						<el-option label="已认证" value="1"></el-option>
						<el-option label="未认证" value="2"></el-option>
					</el-select>
				</el-form-item>
				<el-checkbox label="待我审核" name="checkbox" ></el-checkbox>
			
				
			</el-form>
				<el-button type="primary"  @click="onSubmit('ruleForm')">查询</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
		</div>
		<!-- 表格展示 -->
		<div class="tab_warpper">
			<div class="tab_title clearfix">
				<div class="left">
					<i></i>订单列表
				</div>

				<div class="right">
					<router-link to="/customer/addcustomer">
						<el-button style="background: #31D093;color: #fff;">新增+</el-button>
					</router-link>

					<el-button>导入+</el-button>
				</div>
			</div>

			<el-table :data="tableData" border style="margin:1%;width: 98%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="36"></el-table-column>
				<el-table-column sortable fixed prop="number" label="客户编号" width="200"></el-table-column>
				<el-table-column prop="customer_name" label="客户全称" width="200"></el-table-column>
				<el-table-column prop="customer_name_j" label="客户简称" width="150"></el-table-column>
				<el-table-column prop="ascription" label="归属部门" width="150">
					<template slot-scope="scope">
						<p>{{ scope.row.ascription == 1 ? '运营部' : '推广部' }}</p>
					</template>
				</el-table-column>
				<el-table-column prop="address" label="客户地址" width="250"></el-table-column>
				<el-table-column prop="receipt" label="线路数" width="100"></el-table-column>
				<el-table-column prop="state" label="客户状态" width="150">
					<template slot-scope="scope">
						<p>{{ scope.row.state == 1 ? '有效' : '无效' }}</p>
					</template>
				</el-table-column>
				<el-table-column prop="trial_state" label="认证状态" width="150">
					<template slot-scope="scope">
						<p>{{ scope.row.trial_state == 1 ? '以认证' : '未认证' }}</p>
					</template>
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="220">
					<template slot-scope="scope">
						<el-button type="text" size="small">
							<router-link :to="{name: 'details', params: {id: scope.row.id}}">详情</router-link>
						</el-button>
						<el-button type="text" size="small">
							<router-link :to="{name: 'modify_files', params: {id: scope.row.id}}">修改</router-link>
						</el-button>
						<el-button type="text" size="small">审核</el-button>
						<el-button type="text" size="small">日志</el-button>
					</template>
				</el-table-column>
			</el-table>

			<div class="block" style="text-align: right;margin:29px 25px 0 0;padding-bottom: 56px">
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="100">
				</el-pagination>
			</div>
		</div>
	</div>
</template>
<script>
	import {customerUser} from '../../api/customer'
	export default {
		data() {
			return {
				ruleForm: {
					number: '',
					customer_name: '',
					customer_name_j: '',
					state: '',
					trial_state: ''
				},
				state: 0,
				page: 1,
				limit: 20,
				number: '',
				name: '',
				number2: '',
				number3: '',
				checked: '',
				tableData: null,
				currentPage: 1, //分页
				val: ''
			}

		},
		methods: {
			handleSelectionChange(val) {
				this.multipleSelection = val;
			}, //表格

			//分页
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			// getUrl({row}) {
			// 	return '/customer/details?id=' + row.id
			// }
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			onSubmit(){
			}

		},
		created() {
			let data = {
				page: this.page,
				state: this.state,
				limit: this.limit
			}
			customerUser(data).then(res => {
				this.tableData = res.result.list
			})
			// console.log(customerUser(data))
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
