<template>
    <div class="container">
        <!-- 搜索框 -->
        <div class="warpper" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;">
            <div class="order_title">
                <i></i>新增账号
            </div>
            <div class="order_search">
                <p class="title_little"><i></i>账号信息</p>
                <div class="int_model">
                    <div> 
                        <i style="color: #EF5565">*</i>用户账号 &nbsp;&nbsp;<el-input style="width: 60%" placeholder="请输入"></el-input>
                    </div>
                    <div>
                        <i style="color: #EF5565">*</i>登录密码 &nbsp;
                        <el-select v-model="value" placeholder="请选择"  style="width: 60%;">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div>
                        <i style="color: #EF5565">*</i>账号状态 &nbsp;
                        <el-select v-model="value" placeholder="请选择" style="width: 60%;">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </div>
        </div>

        <div class="warpper mt10" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
            <p class="title_little"><i></i>用户信息</p>
            <div class="int_model mt30">
                <div> 
                    <i style="color: #EF5565">*</i>用户姓名 &nbsp;&nbsp;<el-input style="width: 60%" placeholder="请输入"></el-input>
                </div>
                <div>
                    <i style="color: #EF5565">*</i>身份证号 &nbsp;&nbsp;<el-input style="width: 59%" placeholder="请输入"></el-input>
                </div>
                <div>
                    用户工号 &nbsp;&nbsp;<el-input style="width: 59%" placeholder="请输入"></el-input>
                </div>
            </div>

            <div class="int_model mt30">
                <div>
                    <i style="color: #EF5565">*</i>用户职位 &nbsp;&nbsp;<el-input style="width: 59%" placeholder="请输入"></el-input>
                </div>
                <div>
                    <i style="color: #EF5565">*</i>用户部门 &nbsp;&nbsp;<el-input style="width: 59%" placeholder="请输入"></el-input>
                </div>
                <div>
                    <i style="color: #EF5565">*</i>用户角色 &nbsp;&nbsp;<el-input style="width: 59%" placeholder="请输入"></el-input>
                </div>
            </div>
        </div>

        <div class="sub_warpper">
            <input type="button" value="取消">
            <input type="button" value="确认">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            number:'',
            name:'',
            number2:'',
            number3:'',
            options: [{
                value: '选项1',
                label: '1'
            }, {
                value: '选项2',
                label: '2'
            }],
            value: '',
            value1:'',
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }],
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>
.container{padding: 20px;background-color: rgb(240, 242, 245);position: relative;}
.order_search{padding:25px 30px 30px;background: #fff;}
.int_model{width: 100%;height: 40px;display: flex;
    & div{flex: 1;}
}
.mt10{margin-top: 10px;}
.mt30{margin-top: 30px;}
.order_title{
    height: 70px;
    line-height: 70px;
    padding: 0 30px;
    border-bottom: 1px solid #F1F1F1;
    background: #fff;
    font-size: 20px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    & i{
        width:4px;
        height:25px;
        background:rgba(58,156,255,1);
        display: inline-block;
        float: left;
        margin:22px 10px 0 0;
    }
}
.title_little{
    margin-bottom: 25px;
    & i{width: 9px;height: 9px;display: inline-block;background:#3A9CFF;border-radius:50%;margin-right:10px}
}
.bordernone input{border: none}

.sub_warpper{
  width: 380px;
  height: 50px;
  margin: 60px auto 137px auto;
  & input:first-child{
    width:110px;
    height:50px;
    background:rgba(221,221,221,1);
    border-radius:5px;
    border:none;
    float: left;
  }
  & input:last-child{
    width:110px;
    height:50px;
    background:rgba(58,156,255,1);
    border-radius:5px;
    color: #fff;
    border:none;
    float: right;
  }
}
.el-upload--picture-card{
    line-height: 36px!important;
}
.upimg{
    width: 100%;
    height: 150px;
}
.ml30{margin-left: 30px;}
</style>