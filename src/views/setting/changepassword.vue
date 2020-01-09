<template>
    <div class="container">
        <div class="set">
            <div class="nav-left">
                <p>个人设置</p>
                <ul>
                    <router-link to="/setting/basic">
                        <li>基本信息</li>
                    </router-link>
                    <router-link to="/setting/changephone">
                        <li>更换手机号</li>
                    </router-link>
                    <router-link to="/setting/changepassword">
                        <li>修改登录密码</li>
                    </router-link>
                </ul>
            </div>
            <div style="width:87%;float:left">
                <div class="tab_warpper">
                    <div class="tab_title clearfix">
                        <div class="left">
                            <i></i>修改登录密码
                        </div>
                    </div>

                    <div class="int_model" style="width:500px;margin:100px auto 20px auto">
                        <div>
                            <span style="float:left;line-height:35px;"><i style="color:#F4434C">*</i>登录密码</span><el-input style="width:400px;float:right" v-model="input" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="int_model" style="width:500px;margin:20px auto">
                        <div>
                            <span style="float:left;line-height:35px;"><i style="color:#F4434C">*</i>原密码</span><el-input style="width:400px;float:right" v-model="input" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="int_model" style="width:500px;margin:20px auto">
                        <div>
                            <span style="float:left;line-height:35px;"><i style="color:#F4434C">*</i>新密码</span><el-input style="width:400px;float:right" v-model="input" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="int_model" style="width:500px;margin:20px auto">
                        <div>
                            <span style="float:left;line-height:35px;"><i style="color:#F4434C">*</i>确认密码</span><el-input style="width:400px;float:right" v-model="input" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="int_model" style="width:500px;margin:20px auto">
                        <div style="width:500px;">
                            <span style="float:left;line-height:35px;"><i style="color:#F4434C">*</i>验证码</span>
                            <div class="authcode" style="width:400px;float:right">
                                <input type="text" v-model="input2" placeholder="请输入验证码">
                                <button>获取验证码</button>
                            </div>
                        </div>
                    </div>

                    <div class="nextwarpper">
                        <el-button style="float:left">取消</el-button>
                        <!-- <router-link to="/"> -->
                            <el-button type="primary" style="float:right">保存</el-button>
                        <!-- </router-link> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            input:'15846874565',
            input2:'123'
        }
    },
    methods: {
        
    },
}
</script>
<style lang="scss" scoped>
.set{
    width: 100%;
    height: 80vh;
    & .nav-left{
        width:12%;margin-right:1%;min-height:82vh;float:left;background:#fff;
        & p{
            line-height: 50px;
            // text-indent: 30px;
            text-align: center;
            font-weight: 600;
            border-bottom: 1px solid #eee
        }
        & ul li{
            line-height: 50px;
            width: 80%;
            margin: 0 10%;
            text-align: center;
            font-size: 14px;
            cursor: pointer;
        }
    }
}
.container{padding: 20px;background-color: rgb(240, 242, 245);position: relative;}
.order_search{padding: 46px;background: #fff;box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;}
.int_model{width: 100%;height: 40px;display: flex;
    & div{flex: 1;}
}
.mt36{margin-top: 36px;}
.mt20{margin-top: 20px;}
.el-range-editor--medium .el-range__icon {position: absolute!important;right: 5px!important;}
.el-range-editor--medium .el-range-separator {width: 20px!important;}
.btn_warpper{
    width: 100%;
    height: auto;
    margin-top: 45px;
    & button:not(:first-child){margin-left: 38px}
}
.tab_warpper{width: 100%;height: auto;background: #fff;box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;}
.tab_title{
    height: 70px;
    line-height: 70px;
    padding:0 30px;
    border-bottom: 1px solid #F1F1F1;
    & .left i{
        width:4px;
        height:25px;
        display:block;
        background:rgba(58,156,255,1);
        float: left;
        margin:22px 10px 0 0;
    }
}
.el-table .cell{text-align: center}
.authcode{
    width: 35%;
    height: 35px;
    border:1px solid #DCDFE6;
    border-radius: 3px;
    display: inline-block;
    margin-left: 2%;
    & input{
        width: 308px;height: 32px;border: none;font-size: 14px;float: left;padding: 0 15px;outline: none;color: #606266;
    }
    & button{width: 90px;height: 33px;float: left;background: transparent;border:none;font-size: 14px;text-decoration: underline;outline: none}
}
.nextwarpper{
    width: 360px;
    height: 35px;
    margin: 100px auto 0 auto;
    padding-bottom: 200px;
    & button{
        width: 100px;
    }
}

</style>