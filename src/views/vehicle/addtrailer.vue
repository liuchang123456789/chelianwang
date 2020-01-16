<template>
  <div class="container">
    <!-- 搜索框 -->
    <el-form ref="form" :inline="true" :model="form" label-width="100px" class="demo-ruleForm">
      <div class="warpper" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;">
        <div class="order_title">
          <i />新增挂车档案
        </div>
        <div class="order_search">
          <p class="title_little"><i />基础信息</p>
          <div class="int_model">
            <div>
              <i style="color: #EF5565;margin-right: 10px; ">*</i>车牌号 &nbsp;&nbsp;<el-input
                v-model="form.num"
                style="width: 60%"
                placeholder="请输入"
              />
            </div>
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>挂车材质 &nbsp;
              <el-select v-model="form.material" placeholder="请选择" style="width: 60%;">
                <el-option label="铁柜" value="1" />
                <el-option label="复合板" value="2" />
                <el-option label="铝柜" value="3" />
                <el-option label="冷柜" value="4" />
                <el-option label="其他" value="5" />
              </el-select>
            </div>
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>车辆来源 &nbsp;
              <el-select v-model="form.source" placeholder="请选择" style="width: 60%;">
                <el-option label="自有车" value="1" />
                <el-option label="外请车" value="2" />
              </el-select>
            </div>
          </div>
          <div class="int_model mt30">
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>挂车载重 &nbsp;&nbsp;
              <p style="display: inline-block;width: 60%;border-radius: 4px;border: 1px solid #DCDFE6;">
                <el-input v-model="form.load" style="width: 76%;" class="bordernone" placeholder="请输入" />/吨
              </p>
            </div>
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>挂车容积 &nbsp;&nbsp;
              <p style="display: inline-block;width: 60%;border-radius: 4px;border: 1px solid #DCDFE6;">
                <el-input v-model="form.volume" style="width: 75%;" class="bordernone" placeholder="请输入" />/立方米
              </p>
            </div>
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>挂车车长 &nbsp;&nbsp;
              <p style="display: inline-block;width: 60%;border-radius: 4px;border: 1px solid #DCDFE6;">
                <el-input v-model="form.length" style="width: 76%;" class="bordernone" placeholder="请输入" />/米
              </p>
            </div>
          </div>
          <div class="int_model mt30">

            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>挂车车宽 &nbsp;
              <p style="display: inline-block;width: 60%;border-radius: 4px;border: 1px solid #DCDFE6;">
                <el-input v-model="form.width" style="width: 76%;" class="bordernone" placeholder="请输入" />/米
              </p>
            </div>
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>挂车车高 &nbsp;
              <p style="display: inline-block;width: 60%;border-radius: 4px;border: 1px solid #DCDFE6;">
                <el-input v-model="form.height" style="width: 76%;" class="bordernone" placeholder="请输入" />/米
              </p>
            </div>
            <div>
              <i style="color: #EF5565;margin-right: 10px; ">*</i>车架号 &nbsp;&nbsp;<el-input
                v-model="form.frame_num"
                style="width: 60%"
                placeholder="请输入"
              />
            </div>
          </div>
          <div class="int_model mt30">
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>行驶证注册日期 &nbsp;&nbsp;
              <el-date-picker v-model="form.driving_p_register_time" style="width: 46.5%" type="date" placeholder="选择日期" />
            </div>
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>检验有效期至 &nbsp;&nbsp;
              <el-date-picker v-model="form.driving_p_valid_time" style="width: 53%" type="date" placeholder="选择日期" />
            </div>
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>所有人 &nbsp;&nbsp;<el-input
                v-model="form.driving_p_ascribe"
                style="width: 60%;margin-left: 16px"
                placeholder="行驶证上所有人"
              />
            </div>
          </div>
          <div class="int_model mt30">
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>营运许可号 &nbsp;&nbsp;<el-input
                v-model="form.operation_num"
                style="width: 56%;"
                placeholder="请输入"
              />
            </div>
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>营运注册日期 &nbsp;&nbsp;
              <el-date-picker v-model="form.operation_register_time" style="width: 53%" type="date" placeholder="选择日期" />
            </div>
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>营运有效期至 &nbsp;&nbsp;
              <el-date-picker v-model="form.operation_valid_time	" style="width: 53%" type="date" placeholder="选择日期" />
            </div>
          </div>
          <div class="int_model mt30">
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>GPS设备号 &nbsp;&nbsp;<el-input
                v-model="form.gps_device_num"
                style="width: 56%;"
                placeholder="请输入"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="warpper mt30" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
        <p class="title_little"><i />归属信息</p>
        <div class="int_model mt30">
          <div>
            <i style="color: #EF5565;margin-right: 10px;">*</i>负责人 &nbsp;&nbsp;<el-input
              v-model="form.principal"
              style="width: 60%"
              placeholder="请输入"
            />
          </div>
          <div>
            <i style="color: #EF5565;margin-right: 10px;">*</i>联系手机号 &nbsp;&nbsp;<el-input
              v-model="form.principal_phone"
              style="width: 59%"
              placeholder="请输入"
            />
          </div>
          <div />
        </div>
      </div>

      <div class="warpper mt30" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
        <p class="title_little"><i />成本信息</p>
        <div class="int_model">
          <div>
            <i style="color: #EF5565;margin-right: 10px; ">*</i>保险费 &nbsp;&nbsp;
            <el-input v-model="form.premium" style="width: 30%" placeholder="请输入" />
            <el-select slot="prepend" v-model="form.premium_time_type" placeholder="请选择" style="width: 30%">
              <el-option label="元/月" value="1" />
              <el-option label="元/季" value="2" />
              <el-option label="元/年" value="3" />
              <el-option label="元/趟" value="4" />
            </el-select>
          </div>
          <div>
            <i style="color: #EF5565;margin-right: 10px;">*</i>保险有效期 &nbsp;
            <el-date-picker v-model="form.premium_time" type="date" placeholder="选择日期" style="width: 30%" />
            至
            <el-date-picker v-model="form.premium_valid_time" type="date" placeholder="选择日期" style="width: 30%" />
          </div>
          <div>
            <i style="color: #EF5565;margin-right: 10px;">*</i>车轴数 &nbsp;
            <el-select v-model="form.axle_num" placeholder="请选择" style="width: 60%;">
              <el-option label="1" value="1" />
              <el-option label="2" value="2" />
              <el-option label="3" value="3" />
              <el-option label="4" value="4" />
              <el-option label="5" value="5" />
              <el-option label="6" value="6" />
              <el-option label="7" value="7" />
              <el-option label="8" value="8" />
              <el-option label="9" value="9" />
              <el-option label="10" value="10" />
            </el-select>
          </div>
        </div>
        <div class="int_model mt30">
          <div class="int_model mt30">
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>车辆总价 &nbsp;&nbsp;
              <p style="display: inline-block;width: 60%;border-radius: 4px;border: 1px solid #DCDFE6;">
                <el-input v-model="form.total" style="width: 90%" class="bordernone" placeholder="请输入" />/万
              </p>
            </div>
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>车辆行驶周期 &nbsp;&nbsp;
              <p style="display: inline-block;width: 60%;border-radius: 4px;border: 1px solid #DCDFE6;">
                <el-input v-model="form.operation_cycle" style="width: 85%" class="bordernone" placeholder="请输入" />/公里
              </p>
            </div>
            <div />
          </div>
        </div>
      </div>
      <!-- <el-form :inline="true" ref="form" :model="form" label-width="80px">
				<div class="warpper mt30" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
				<p class="title_little"><i></i>成本信息</p>
			  <el-form-item label="保险费">
			    <el-input v-model="form.premium"></el-input>
			  </el-form-item>
			  </div>
			</el-form> -->

      <div class="warpper mt30" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
        <p class="title_little"><i />车辆照片</p>
        <div class="upimg">
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          <el-upload style="line-height: 36px;float: left;" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card">
            <i class="el-icon-plus" style="margin-top: 32px;" />
            <p>车辆示例图片</p>
          </el-upload>

          <el-upload
            class="ml30"
            style="line-height: 36px;float: left;"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
          >
            <i class="el-icon-plus" style="margin-top: 32px;" />
            <p>营运证示例图片</p>
          </el-upload>

          <el-upload
            class="ml30"
            style="line-height: 36px;float: left;"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
          >
            <i class="el-icon-plus" style="margin-top: 32px;" />
            <p>特殊营运证示例图片</p>
          </el-upload>

          <el-upload
            class="ml30"
            style="line-height: 36px;float: left;"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
          >
            <i class="el-icon-plus" style="margin-top: 32px;" />
            <p>行驶证正本</p>
          </el-upload>

          <el-upload
            class="ml30"
            style="line-height: 36px;float: left;"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
          >
            <i class="el-icon-plus" style="margin-top: 32px;" />
            <p>行驶证副本</p>
          </el-upload>
        </div>

        <div class="sub_warpper">
          <input type="button" value="取消" @click="onRest">
          <input type="button" value="保存" @click="onButton">
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
import {
  addVehicle
} from '../../api/vehicle'
export default {
  data() {
    return {
      form: {
        num: '',
        material: '',
        source: '',
        load: '',
        volume: '',
        length: '',
        width: '',
        height: '',
        frame_num: '',
        driving_p_register_time: '',
        driving_p_valid_time: '',
        driving_p_ascribe: '',
        operation_num: '',
        operation_register_time: '',
        operation_valid_time: '',
        principal: '',
        principal_phone: '',
        premium: '',
        premium_valid_time: '',
        premium_time_type: '',
        axle_num: '',
        total: '',
        operation_cycle: '',
        img: '',
        operation_img: '',
        t_operation_img: '',
        driving_p_img: '',
        driving_p_img_f: '',
        premium_time: '',
        gps_device_num: '',
        num_type: 2,
        type: 0,
        engine_num: 0,
        brand_num: 0
      },
      id: ''

    }
  },
  created() {
  },
  methods: {
    onButton() {
      addVehicle(this.form).then(res => {
        console.log(res)
        if (res.code == 200) {
          this.$router.push({
            name: 'vehiclefiles'
          })
        }
      })
    },
    onRest() {
      this.$router.push({
        name: 'vehiclefiles'
      })
    }

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
		font-size: 18px;

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
