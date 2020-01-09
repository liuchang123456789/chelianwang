<template>
	<div class="container">
		<!-- 搜索框 -->
		<div class="warpper" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;">
			<div class="order_title">
				<i></i>客户档案详情
			</div>
			<div class="order_search">
				<p class="title_little"><i></i>基础信息</p>
				<div class="int_model">
					<div>
						<i style="color: #EF5565">*</i>客户全称: &nbsp;&nbsp;{{info.customer_name}}
					</div>
					<div>
						<i style="color: #EF5565">*</i>客户简称: &nbsp;&nbsp;{{info.customer_name_j}}
					</div>
					<div>
						<i style="color: #EF5565">*</i>归属部门: &nbsp;{{ info.ascription == 1 ? '运营部' : '推广部' }}
					</div>
				</div>
				<div class="int_model mt30">
					<div>
						<i style="color: #EF5565">*</i>发票抬头: &nbsp;&nbsp;{{info.invoice}}
					</div>
					<div>
						<i style="color: #EF5565">*</i>公司地址: &nbsp;&nbsp;{{info.address}}
					</div>
					<div></div>
				</div>
			</div>
		</div>

		<div class="warpper mt10" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
			<p class="title_little"><i></i>联系方式</p>
			<div class="int_model mt30">
				<div>
					<i style="color: #EF5565">*</i>联系人: &nbsp;&nbsp;{{info.name}}
				</div>
				<div>
					<i style="color: #EF5565">*</i>联系电话: &nbsp;&nbsp;{{info.tele_phone}}
				</div>
				<div>
					<i style="color: #EF5565">*</i>联系手机号: &nbsp;&nbsp;{{info.phone}}
				</div>
			</div>

			<div class="int_model mt30">
				<div>
					<i style="color: #EF5565">*</i>邮箱地址: &nbsp;&nbsp;{{info.mailbox}}
				</div>
				<div></div>
				<div></div>
			</div>
		</div>

		<div class="warpper mt10" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
			<p class="title_little"><i></i>回单信息</p>
			<div class="int_model mt30">
				<div>
					<i style="color: #EF5565">*</i>回单类型: &nbsp;{{ info.receipt == 1 ? '纸质' : '电子回单' }}

				</div>
				<div>
					<i style="color: #EF5565">*</i>回单省市: &nbsp;{{info.receipt_address}}
					</el-select>
				</div>
				<div style="width: auto;">
					<i style="color: #EF5565">*</i>回单地址: &nbsp;&nbsp;{{info.receipt_address}}
				</div>
			</div>
		</div>

		<div class="warpper mt10" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
			<p class="title_little"><i></i>结算信息</p>
			<div class="int_model mt30">
				<div>
					<i style="color: #EF5565">*</i>结算方式: &nbsp;
					{{info.settlement === 1 ?'预付全款':info.settlement === 2 ?' 预付+尾款账单':'预付+尾款月结'}}
				</div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		getDetails
	} from '../../api/customer'
	export default {
		data() {
			return {
				info: {},
				id: '2',
				number: '',
				name: '',
				number2: '',
				number3: '',
			}
		},
		methods: {
			

		},
		created() {
			if(!this.$route.params.id){
				this.$router.push({name:'archives'})
			}
			let data = {
				id: this.$route.params.id
			}
			getDetails(data).then(res => {
				console.log(res)
				this.info = res.result
			})
			
		}
	}
</script>
<style lang="scss" scoped>
	.container {
		padding: 20px;
		background-color: rgb(240, 242, 245);
		position: relative;
	}

	.order_search {
		padding: 25px 30px 30px;
		background: #fff;
	}

	.int_model {
		width: 100%;
		height: 40px;
		display: flex;

		& div {
			flex: 1;
		}
	}

	.mt10 {
		margin-top: 10px;
	}

	.mt30 {
		margin-top: 30px;
	}

	.order_title {
		height: 70px;
		line-height: 70px;
		padding: 0 30px;
		border-bottom: 1px solid #F1F1F1;
		background: #fff;
		font-size: 20px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;

		& i {
			width: 4px;
			height: 25px;
			background: rgba(58, 156, 255, 1);
			display: block;
			float: left;
			margin: 22px 10px 0 0;
		}
	}

	.title_little {
		margin-bottom: 25px;

		& i {
			width: 9px;
			height: 9px;
			display: inline-block;
			background: #3A9CFF;
			border-radius: 50%;
			margin-right: 10px
		}
	}

	.bordernone input {
		border: none
	}

	.sub_warpper {
		width: 380px;
		height: 50px;
		margin: 60px auto 137px auto;

		& input:first-child {
			width: 110px;
			height: 50px;
			background: rgba(221, 221, 221, 1);
			border-radius: 5px;
			border: none;
			float: left;
		}

		& input:last-child {
			width: 110px;
			height: 50px;
			background: rgba(58, 156, 255, 1);
			border-radius: 5px;
			color: #fff;
			border: none;
			float: right;
		}
	}

	.el-upload--picture-card {
		line-height: 36px !important;
	}

	.upimg {
		width: 100%;
		height: 150px;
	}

	.ml30 {
		margin-left: 30px;
	}
</style>
