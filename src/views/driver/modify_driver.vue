<template>
  <div class="container">
    <!-- 搜索框 -->
    <el-form ref="form" :inline="true" :model="form" label-width="100px" class="demo-ruleForm">
      <div class="warpper" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;">
        <div class="order_title">
          <i />修改司机档案
        </div>
        <div class="order_search">
          <p class="title_little">
            <i />基础信息
          </p>
          <div class="int_model">
            <div>
              <i style="color: #EF5565">*</i>司机名称 &nbsp;&nbsp;
              <el-input v-model="form.driver_name" style="width: 60%" placeholder="请输入" />
            </div>
            <div>
              <i style="color: #EF5565">*</i>手机号码 &nbsp;&nbsp;
              <el-input v-model="form.driver_phone" style="width: 60%" placeholder="请输入" />
            </div>
            <div>
              <i style="color: #EF5565">*</i>身份证号 &nbsp;
              <el-input v-model="form.identity" placeholder="请输入" style="width: 60%;" />
            </div>
          </div>
          <div class="int_model mt30">
            <div>
              <i style="color: #EF5565">*</i>驾驶证号 &nbsp;&nbsp;
              <el-input v-model="form.drive" style="width: 60%" placeholder="请输入" />
            </div>
            <div>
              <i style="color: #EF5565">*</i>驾驶证有效期 &nbsp;&nbsp;
              <el-date-picker v-model="form.drive_start" type="date" placeholder="选择日期" />至
              <el-date-picker v-model="form.drive_stop" type="date" placeholder="选择日期" />
            </div>
            <div>
              <i style="color: #EF5565">*</i>准驾车型 &nbsp;&nbsp;
              <el-input v-model="form.vehicle_type" style="width: 61%" placeholder="请输入" />
            </div>

          </div>
          <div class="int_model mt30">
            <div>
              <i style="color: #EF5565">*</i>从业资格证号 &nbsp;&nbsp;
              <el-input v-model="form.practitioners" style="width: 60%" placeholder="请输入" />
            </div>
            <div>
              <i style="color: #EF5565">*</i>从业资格证有效期 &nbsp;&nbsp;
              <el-date-picker v-model="form.practitioners_start" type="date" placeholder="选择日期" />至
              <el-date-picker v-model="form.practitioners_stop" type="date" placeholder="选择日期" />
            </div>

          </div>
          <div class="int_model mt30">
            <div>
              <i style="color: #EF5565">*</i>所在区域 &nbsp;&nbsp;
              <el-input v-model="form.province" style="width: 20%" placeholder="请输入" />
              <el-input v-model="form.city" style="width: 20%" placeholder="请输入" />
              <el-input v-model="form.area" style="width: 20%" placeholder="请输入" />
            </div>
            <div>
              <i style="color: #EF5565">*</i>详细地址 &nbsp;&nbsp;
              <el-input v-model="form.address" style="width: 61%" placeholder="请输入" />
            </div>

          </div>
        </div>
      </div>

      <div class="warpper mt10" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
        <p class="title_little">
          <i />上传照片
        </p>
        <div class="int_model mt30">
          <div>
            <i style="color: #EF5565">*</i>身份证正面 &nbsp;&nbsp;
            <el-image v-model="form.identity_z_img" style="width: 60%;" />
          </div>
          <div>
            <i style="color: #EF5565">*</i>身份证反面 &nbsp;&nbsp;
            <el-input v-model="form.identity_f_img" style="width: 59%" placeholder="请输入" />
          </div>
          <div>
            <i style="color: #EF5565">*</i>从业资格证 &nbsp;&nbsp;
            <el-input v-model="form.practitioners_img" style="width: 59%" placeholder="请输入" />
          </div>
          <div>
            <i style="color: #EF5565">*</i>驾驶证正本 &nbsp;&nbsp;
            <el-input v-model="form.drive_z_img" style="width: 59%" placeholder="请输入" />
          </div>
          <div>
            <i style="color: #EF5565">*</i>驾驶证副本 &nbsp;&nbsp;
            <el-input v-model="form.drive_f_img" style="width: 59%" placeholder="请输入" />
          </div>
        </div>
      </div>
      <div class="sub_warpper">
        <input type="button" value="取消" @click="onRest">
        <input type="button" value="修改" @click="onButton">
      </div>
    </el-form>
  </div>
</template>
<script>
import {
  setEdit,
  getDetails
} from '../../api/driver'
export default {
  data() {
    return {
      form: {
        id: ''
      }
    }
  },
  created() {
    if (!this.$route.params.id) {
      this.$router.push({
        name: 'driverfiles'
      })
    }
    this.form.id = this.$route.params.id
    const form = {
      id: this.$route.params.id
    }
    console.log(this.$route.params.id)
    getDetails(form).then(res => {
      console.log(res)
      this.form = res.result
    })
  },
  methods: {
    onButton() {
      setEdit(this.form).then(res => {
        console.log(this.form)
        this.form = res.result
        if (res.code == 200) {
          this.$router.push({
            name: 'driverfiles'
          })
        }
      })
    },
    onRest() {
      this.$router.push({
        name: 'driverfiles'
      })
    }
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
