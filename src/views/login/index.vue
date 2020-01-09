<template>
	<div class="login-container login_warp">
		<el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form login_box" autocomplete="on"
		 label-position="left">

			<div class="title-container">
				<img class="logo" src="../../assets/images/logo.png" alt="">
			</div>

			<el-form-item prop="username">
				<span class="svg-container">
					<svg-icon icon-class="user" />
				</span>
				<el-input ref="username" v-model="loginForm.account" placeholder="username" name="username" type="text" tabindex="1"
				 autocomplete="on" />
			</el-form-item>

			<el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
				<el-form-item prop="password">
					<span class="svg-container">
						<svg-icon icon-class="password" />
					</span>
					<el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType" placeholder="Password"
					 name="password" tabindex="2" autocomplete="on" @keyup.native="checkCapslock" @blur="capsTooltip = false"
					 @keyup.enter.native="handleLogin" />
					<span class="show-pwd" @click="showPwd">
						<svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
					</span>
				</el-form-item>
			</el-tooltip>
			<p style="color: #BAD2F9;font-size:13px;font-family:Microsoft YaHei;">
				<label for="">
					<el-checkbox v-model="checked">记住密码</el-checkbox>
				</label>
				<a href="" style="color: #fff;float: right;font-size: 14px;">忘记密码</a>
			</p>

			<el-button :loading="loading" type="primary" class="deng" @click.native.prevent="handleLogin">登录</el-button>

			<!-- <div style="position:relative">
        <div class="tips">
          <span>Username : admin</span>
          <span>Password : any</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">Username : editor</span>
          <span>Password : any</span>
        </div>
        <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
          Or connect with
        </el-button>
      </div> -->
		</el-form>
		<el-dialog title="Or connect with" :visible.sync="showDialog">
			Can not be simulated on local, so please combine you own business simulation! ! !
			<br>
			<br>
			<br>
			<social-sign />
		</el-dialog>
	</div>
</template>

<script>
	import {validUsername} from '@/utils/validate'
	import SocialSign from './components/SocialSignin'
	export default {
		name: 'Login',
		components: {
			SocialSign
		},
		data() {
			const validateUsername = (rule, value, callback) => {
				callback()
				// if (!validUsername(value)) {
				//   callback(new Error('请输入正确账号'))
				// } else {

				// }
			}
			const validatePassword = (rule, value, callback) => {
				if (value.length < 6) {
					callback(new Error('请输入大于六位的密码'))
				} else {
					callback()
				}
			}
			return {
				checked: false, //记住密码
				loginForm: {
					account: '',
					password: ''
				},
				loginRules: {
					account: [{
						required: true,
						trigger: 'blur',
						validator: validateUsername
					}],
					password: [{
						required: true,
						trigger: 'blur',
						validator: validatePassword
					}]
				},
				passwordType: 'password',
				capsTooltip: false,
				loading: false,
				showDialog: false,
				redirect: undefined,
				otherQuery: {}
			}
		},
		watch: {
			$route: {
				handler: function(route) {
					const query = route.query
					if (query) {
						this.redirect = query.redirect
						this.otherQuery = this.getOtherQuery(query)
					}
				},
				immediate: true
			}
		},
		created() {
			// window.addEventListener('storage', this.afterQRScan)
		},
		mounted() {
			// if (this.loginForm.account === '') {
			// 	this.$refs.account.focus()
			// } else if (this.loginForm.password === '') {
			// 	this.$refs.password.focus()
			// }
		},
		destroyed() {
			// window.removeEventListener('storage', this.afterQRScan)
		},
		methods: {
			checkCapslock({
				shiftKey,
				key
			} = {}) {
				if (key && key.length === 1) {
					if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
						this.capsTooltip = true
					} else {
						this.capsTooltip = false
					}
				}
				if (key === 'CapsLock' && this.capsTooltip === true) {
					this.capsTooltip = false
				}
			},
			showPwd() {
				if (this.passwordType === 'password') {
					this.passwordType = ''
				} else {
					this.passwordType = 'password'
				}
				this.$nextTick(() => {
					this.$refs.password.focus()
				})
			},
			handleLogin() {
				this.$refs.loginForm.validate(valid => {
					if (valid) {
						this.loading = true
						this.$store.dispatch('user/login', this.loginForm)
							.then(() => {
								this.$router.push({
									path: this.redirect || '/',
									query: this.otherQuery
								})
								this.loading = false
							})
							.catch(() => {
								this.loading = false
							})
					} else {
						console.log('error submit!!')
						return false
					}
				})
			},
			getOtherQuery(query) {
				return Object.keys(query).reduce((acc, cur) => {
					if (cur !== 'redirect') {
						acc[cur] = query[cur]
					}
					return acc
				}, {})
			}
			// afterQRScan() {
			//   if (e.key === 'x-admin-oauth-code') {
			//     const code = getQueryObject(e.newValue)
			//     const codeMap = {
			//       wechat: 'code',
			//       tencent: 'code'
			//     }
			//     const type = codeMap[this.auth_type]
			//     const codeName = code[type]
			//     if (codeName) {
			//       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
			//         this.$router.push({ path: this.redirect || '/' })
			//       })
			//     } else {
			//       alert('第三方登录失败')
			//     }
			//   }
			// }
		}
	}
</script>

<style lang="scss">
	/* 修复input 背景不协调 和光标变色 */
	/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

	$bg:#283443;
	$light_gray:#fff;
	$cursor: #fff;

	@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
		.login-container .el-input input {
			color: $cursor;
		}
	}

	/* reset element-ui css */
	.login-container {
		.el-input {
			display: inline-block;
			height: 47px;
			width: 85%;

			input {
				background: transparent;
				border: 0px;
				-webkit-appearance: none;
				border-radius: 0px;
				padding: 12px 5px 12px 15px;
				color: $light_gray;
				height: 47px;
				caret-color: $cursor;

				&:-webkit-autofill {
					box-shadow: 0 0 0px 1000px $bg inset !important;
					-webkit-text-fill-color: $cursor !important;
				}
			}
		}

		.el-form-item {
			border: 1px solid rgba(255, 255, 255, 0.1);
			background: rgba(0, 0, 0, 0.1);
			border-radius: 5px;
			color: #454545;
		}
	}
</style>

<style lang="scss" scoped>
	$bg:#2d3a4b;
	$dark_gray:#889aa4;
	$light_gray:#eee;

	.login-container {
		min-height: 100%;
		width: 100%;
		background-color: $bg;
		overflow: hidden;

		// .login-form {

		// }

		.tips {
			font-size: 14px;
			color: #fff;
			margin-bottom: 10px;

			span {
				&:first-of-type {
					margin-right: 16px;
				}
			}
		}

		.svg-container {
			padding: 6px 5px 6px 15px;
			color: $dark_gray;
			vertical-align: middle;
			width: 30px;
			display: inline-block;
		}

		.title-container {
			position: relative;

			.title {
				font-size: 26px;
				color: $light_gray;
				margin: 0px auto 40px auto;
				text-align: center;
				font-weight: bold;
			}
		}

		.show-pwd {
			position: absolute;
			right: 10px;
			top: 7px;
			font-size: 16px;
			color: $dark_gray;
			cursor: pointer;
			user-select: none;
		}

		.thirdparty-button {
			position: absolute;
			right: 0;
			bottom: 6px;
		}

		@media only screen and (max-width: 470px) {
			.thirdparty-button {
				display: none;
			}
		}
	}

	.login_warp {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #121f3f url(../../assets/images/bg.png) no-repeat;
		background-size: 75% 100%;
		background-position: 0 0;
	}

	.login_box {
		width: 398px;
		height: 452px;
		background: rgba(24, 42, 88, 1);
		box-shadow: 0px 6px 6px rgba(0, 30, 81, 0.51);
		border-radius: 20px;
		position: fixed;
		top: 50%;
		right: 20%;
		margin-top: -310px;
		padding: 0 50px;
	}

	.login_box .logo {
		width: 77px;
		margin: 39px auto 30px auto;
		display: block;
	}

	.int_model {
		width: 446px;
		height: 76px;
		border: 1px solid rgba(82, 149, 254, 1);
		margin: 0 auto 40px auto;
		border-radius: 10px;
		display: flex;
	}

	.icon_zhanghao {
		width: 27px;
		height: 30px;
		display: inline-block;
		background: url(../../assets/images/zhanghao.png) 100% 100%;
		margin: 22px 18px;
	}

	.int_model input {
		flex: 1;
		background: transparent;
		border-radius: 10px;
		border: none;
		outline: 0;
		font-size: 24px;
		color: #f0f0f0;
	}

	.icon_password {
		width: 30px;
		height: 33px;
		display: inline-block;
		background: url(../../assets/images/mima.png);
		margin: 22px 17px;
	}

	.login {
		width: 446px;
		height: 76px;
		background: rgba(85, 168, 253, 1);
		border-radius: 10px;
		color: #fff;
		font-size: 30px;
		border: none;
		margin: 16px auto 0 auto;
		display: block;
		outline: none;
	}

	.el-form-item {
		height: 50px;
		margin-bottom: 28px;
		background: transparent;
		border: 1px solid rgba(82, 149, 254, 1);
	}

	.login-container .el-input {
		font-size: 15px !important;
	}

	.el-form-item__content {
		font-size: 18px !important;
	}

	.deng {
		width: 100%;
		height: 51px;
		background: linear-gradient(270deg, rgba(80, 229, 253, 1) 0%, rgba(33, 138, 245, 1) 100%);
		border-radius: 50px;
		margin-top: 20px;
	}
</style>
