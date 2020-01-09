<template>
	<div class="container">
		<!-- 搜索框 -->
		<el-form :inline="true" :model="form" ref="form" label-width="100px" class="demo-ruleForm">
			<div class="warpper" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;">
				<div class="order_title">
					<i></i>车辆详情
				</div>
				<div class="order_search">
					<p class="title_little"><i></i>基础信息</p>
					<div class="int_model">
						<div>
							<i style="color: #EF5565;margin-right: 10px; ">*</i>车牌号: &nbsp;&nbsp;{{form.num}}
						</div>
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>牌照类型: &nbsp;{{form.num_type}}
						</div>
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>车辆来源: &nbsp;{{form.source == 1 ? '自有车' : '外请车' }}
						</div>
					</div>
					<div class="int_model mt30">
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>车架号: &nbsp;&nbsp;{{form.frame_num}}
						</div>
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>发动机号: &nbsp;&nbsp;{{form.engine_num}}
						</div>
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>品牌型号: &nbsp;&nbsp;{{form.brand_num}}
						</div>
					</div>
					<div class="int_model mt30">
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>车辆类型: &nbsp;{{form.type}}/{{form.length}}
						</div>
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>车辆载重: &nbsp;{{form.load}}/吨
						</div>
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>车辆容量: &nbsp;{{form.volume}}/立方米
						</div>
					</div>
					<div class="int_model mt30">
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>行驶证注册日期: &nbsp;&nbsp;{{form.driving_p_register_time}}
						</div>
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>检验有效期至: &nbsp;&nbsp;{{form.driving_p_valid_time}}
						</div>
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>所有人: &nbsp;&nbsp;{{form.driving_p_ascribe}}
						</div>
					</div>
					<div class="int_model mt30">
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>营运许可号 &nbsp;&nbsp;{{form.operation_num}}
						</div>
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>营运注册日期 &nbsp;&nbsp;{{form.operation_register_time}}
						</div>
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>营运有效期至: &nbsp;&nbsp;{{form.operation_valid_time}}
						</div>
					</div>
					<div class="int_model mt30">
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>GPS设备号: &nbsp;&nbsp;{{form.gps_device_num}}
						</div>
					</div>
				</div>
			</div>

			<div class="warpper mt30" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
				<p class="title_little"><i></i>归属信息</p>
				<div class="int_model mt30">
					<div>
						<i style="color: #EF5565;margin-right: 10px;">*</i>负责人: &nbsp;&nbsp;{{form.principal}}
					</div>
					<div>
						<i style="color: #EF5565;margin-right: 10px;">*</i>联系手机号: &nbsp;&nbsp;{{form.principal_phone}}
					</div>
					<div></div>
				</div>
			</div>

			<div class="warpper mt30" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
				<p class="title_little"><i></i>成本信息</p>
				<div class="int_model">
					<div>
						<i style="color: #EF5565;margin-right: 10px; ">*</i>保险费: &nbsp;&nbsp;{{form.premium}}{{form.premium_time_type}}
					</div>
					<div>
						<i style="color: #EF5565;margin-right: 10px;">*</i>保险有效期: &nbsp;{{form.premium_time}}至{{form.premium_valid_time}}
					</div>
					<div>
						<i style="color: #EF5565;margin-right: 10px;">*</i>车轴数: &nbsp;{{form.axle_num}}
					</div>
				</div>
				<div class="int_model mt30">
					<div class="int_model mt30">
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>车辆总价: &nbsp;&nbsp;{{form.total}}/万
						</div>
						<div>
							<i style="color: #EF5565;margin-right: 10px;">*</i>车辆行驶周期: &nbsp;&nbsp;{{form.operation_cycle}}/公里
						</div>
						<div></div>
					</div>
				</div>
			</div>
		
			<div class="warpper mt30" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
				<p class="title_little"><i></i>车辆照片</p>
				<div class="upimg">
					<el-dialog :visible.sync="dialogVisible" size="tiny">
						<img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>
					<el-upload style="line-height: 36px;float: left;" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card">
						<i class="el-icon-plus" style="margin-top: 32px;"></i>
						<p>车辆示例图片</p>
					</el-upload>

					<el-upload class="ml30" style="line-height: 36px;float: left;" action="https://jsonplaceholder.typicode.com/posts/"
					 list-type="picture-card" >
						<i class="el-icon-plus" style="margin-top: 32px;"></i>
						<p>营运证示例图片</p>
					</el-upload>

					<el-upload class="ml30" style="line-height: 36px;float: left;" action="https://jsonplaceholder.typicode.com/posts/"
					 list-type="picture-card">
						<i class="el-icon-plus" style="margin-top: 32px;"></i>
						<p>特殊营运证示例图片</p>
					</el-upload>

					<el-upload class="ml30" style="line-height: 36px;float: left;" action="https://jsonplaceholder.typicode.com/posts/"
					 list-type="picture-card">
						<i class="el-icon-plus" style="margin-top: 32px;"></i>
						<p>行驶证正本</p>
					</el-upload>

					<el-upload class="ml30" style="line-height: 36px;float: left;" action="https://jsonplaceholder.typicode.com/posts/"
					 list-type="picture-card">
						<i class="el-icon-plus" style="margin-top: 32px;"></i>
						<p>行驶证副本</p>
					</el-upload>
				</div>

			</div>
		</el-form>
	</div>
</template>
<script>
	import {
		detAils
	} from '../../api/vehicle'
	export default {
		data() {
			return {
				form:null,
				id:'1',
				dialogVisible:false,
				imageUrl: '',
				dialogImageUrl:false,
			}
		},
		methods: {
			// handleRemove(file, fileList) {
			// 	console.log(file, fileList);
			// },
			// handlePictureCardPreview(file) {
			// 	this.dialogImageUrl = file.url;
			// 	this.dialogVisible = true;
			// }
		},
		created() {
			
			console.log(this.form)
			if(!this.$route.params.id){
				this.$router.push({name:'vehiclefiles'})
			}
			let data = {
				id: this.$route.params.id
			}
			console.log(data)
			detAils(data).then(res => {
				console.log(res)
				this.form = res.result
			})
			
		}
	}
</script>
<style lang="scss" scope>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}


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

	.mt30 {
		margin-top: 10px;
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
			display: inline-block;
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
