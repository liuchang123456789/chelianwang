<template>
  <div class="container">
    <!-- 搜索框 -->
    <el-form ref="form" :inline="true" :model="form" label-width="100px" class="demo-ruleForm">
      <div class="warpper" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;">
        <div class="order_title">
          <i />新增客户
        </div>
        <div class="order_search">
          <p class="title_little">
            <i />基础信息
          </p>
          <div class="int_model">
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>客户全称 &nbsp;&nbsp;
              <el-input v-model="form.customer_name" style="width: 60%" placeholder="请输入" />
            </div>
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>客户简称 &nbsp;&nbsp;
              <el-input v-model="form.customer_name_j" style="width: 60%" placeholder="请输入" />
            </div>
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>归属部门 &nbsp;
              <el-select v-model="form.ascription" placeholder="请选择" style="width: 60%;">
                <el-option label="运营部" value="1" />
                <el-option label="推广部" value="2" />
              </el-select>
            </div>
          </div>
          <div class="int_model mt30">
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>发票抬头 &nbsp;&nbsp;
              <el-input v-model="form.invoice" style="width: 60%" placeholder="请输入" />
            </div>
            <div>
              <i style="color: #EF5565;margin-right: 10px;">*</i>公司地址 &nbsp;&nbsp;
              <el-input v-model="form.address" style="width: 61%" placeholder="请输入" />
            </div>
            <div />
          </div>
        </div>
      </div>

      <div class="warpper mt10" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
        <p class="title_little">
          <i />联系方式
        </p>
        <div class="int_model mt30">
          <div>
            <i style="color: #EF5565;margin-right: 10px;">*</i>联系人 &nbsp;&nbsp;
            <el-input v-model="form.name" style="width: 62%" placeholder="请输入" />
          </div>
          <div>
            <i style="color: #EF5565;margin-right: 10px;">*</i>联系电话 &nbsp;&nbsp;
            <el-input v-model="form.tele_phone" style="width: 59%" placeholder="请输入" />
          </div>
          <div>
            <i style="color: #EF5565;margin-right: 10px;">*</i>联系手机号 &nbsp;&nbsp;
            <el-input v-model="form.phone" style="width: 59%" placeholder="请输入" />
          </div>
        </div>

        <div class="int_model mt30">
          <div>
            <i style="color: #EF5565;margin-right: 10px;">*</i>邮箱地址 &nbsp;&nbsp;
            <el-input v-model="form.mailbox" style="width: 59%" placeholder="请输入" />
          </div>
          <div />
          <div />
        </div>
      </div>

      <div class="warpper mt10" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
        <p class="title_little">
          <i />回单信息
        </p>
        <div class="int_model mt30">
          <div>
            <i style="color: #EF5565;margin-right: 10px;">*</i>回单类型 &nbsp;
            <el-select v-model="form.receipt" placeholder="请选择" style="width: 60%;">
              <el-option label="纸质" value="1" />
              <el-option label="电子回单" value="2" />
            </el-select>
          </div>
          <div>
            <i style="color: #EF5565;margin-right: 10px;">*</i>回单省市 &nbsp;&nbsp;
            <el-input v-model="form.receipt_address" style="width: 59%" placeholder="请输入" />
          </div>
          <div>
            <i style="color: #EF5565;margin-right: 10px;">*</i>回单地址 &nbsp;&nbsp;
            <el-input v-model="form.receipt_address" style="width: 59%" placeholder="请输入" />
          </div>
        </div>
      </div>

      <div class="warpper mt10" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
        <p class="title_little">
          <i />结算信息
        </p>
        <div class="int_model mt30">
          <div>
            <i style="color: #EF5565;margin-right: 10px;">*</i>结算方式 &nbsp;
            <el-select v-model="form.settlement" placeholder="请选择" style="width: 60%;">
              <el-option label="预付全款" value="1" />
              <el-option label="预付+尾款账单" value="2" />
              <el-option label="预付+尾款月结" value="3" />
            </el-select>
          </div>
          <div />
          <div />
        </div>
      </div>

      <div class="sub_warpper">
        <input type="button" value="取消" @click="onRest">
        <input type="button" value="保存" @click="onButton">
      </div>
    </el-form>
  </div>
</template>
<script>
import {
  setAdd
} from '../../api/customer'
export default {
  data() {
    return {
      form: {
        customer_name: '',
        customer_name_j: '',
        ascription: '',
        invoice: '',
        address: '',
        name: '',
        tele_phone: '',
        phone: '',
        mailbox: '',
        receipt: '',
        receipt_address: '',
        settlement: ''
      },
      id: ''
    }
  },
  created() {

  },
  methods: {
    onButton() {
      setAdd(this.form).then(res => {
        console.log(res)
        if (res.code == 200) {
          this.$router.push({
            name: 'archives'
          })
        }
      })
    },
    onRest() {
      this.$router.push({
        name: 'archives'
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
