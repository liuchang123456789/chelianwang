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
                <div class="tab_warpper" style="margin-top:0;">
                    <div class="tab_title clearfix">
                        <div class="left">
                            <i></i>账户信息
                        </div>
                    </div>

                    <div class="order_search">
                        <div class="int_model">
                            <div>
                                登录账号 &nbsp;&nbsp;<el-input style="width:60%" v-model="input" placeholder="请输入内容"></el-input>
                            </div>
                            <div>
                                登录密码 &nbsp;&nbsp;<el-input style="width:60%" type="password" v-model="input2"></el-input>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab_warpper" style="margin-top:16px;">
                    <div class="tab_title clearfix">
                        <div class="left">
                            <i></i>用户信息
                        </div>
                    </div>

                    <div class="order_search">
                        <div class="int_model">
                            <div>
                                用户姓名 &nbsp;&nbsp;<el-input style="width:60%" v-model="input3"></el-input>
                            </div>
                            <div>
                                身份证号 &nbsp;&nbsp;<el-input style="width:60%" v-model="input4"></el-input>
                            </div>
                        </div>
                        <div class="int_model" style="margin-top:20px;">
                            <div>
                                用户工号 &nbsp;&nbsp;<el-input style="width:60%" v-model="input5"></el-input>
                            </div>
                            <div>
                                用户职位 &nbsp;&nbsp;<el-input style="width:60%" v-model="input6"></el-input>
                            </div>
                        </div>
                        <div class="int_model" style="margin-top:20px;">
                            <div>
                                用户部门 &nbsp;&nbsp;<el-input style="width:60%" v-model="input7"></el-input>
                            </div>
                            <div>
                                用户角色 &nbsp;&nbsp;<el-input style="width:60%" v-model="input8"></el-input>
                            </div>
                        </div>
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
            input2:'123',
            input3:'艾莫',
            input4:'451245799845615462',
            input5:'25461',
            input6:'产品经理',
            input7:'深圳腾飞物流有限公司',
            input8:'超级管理员',
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
</style>