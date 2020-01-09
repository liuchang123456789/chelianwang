<template>
    <div class="dashboard-editor-container">
        <div class="warpper" style="padding-bottom:50px;">
            <div class="order_title">
                <i></i>订单详情
            </div>
            
            <el-row class="details">
                <el-col :span="6">
                    订单: <span class="color:#3A9CFF">210131264</span>
                </el-col>
                <el-col :span="6">
                    <p>创建时间：<span>谭谭/19-07-28 15:30</span></p>
                    <p>线路：<span>25846135485 深圳南山-重庆渝中</span></p>
                </el-col>
                <el-col :span="6">
                    <p>客户：<span>深圳市双龙物流有限公司</span></p>
                    <p>靠台时间：<span>深19-07-30 16:30</span></p>
                </el-col>
                <el-col :span="6">
                    已完成
                </el-col>
            </el-row>

            <div class="order_flow">
                <div class="flow_model clearfix">
                    <p><i>起</i> <span>广东-深圳-宝安（装）</span></p>
                    <p>广东省深圳市宝安区新安街道新湖路23号</p>
                </div>
                <div class="wire">
                <span>5小时</span>
                <div class="wire_main">
                    <i></i>
                    <span></span>
                </div>
                </div>
                <div class="flow_model clearfix">
                <p><i style="background: #31D093">经</i> <span>湖南-长沙-芙蓉（卸）</span></p>
                <p>湖南省长沙市芙蓉区天心花园</p>
                </div>
                <div class="wire">
                <span>3小时</span>
                <div class="wire_main">
                    <i></i>
                    <span></span>
                </div>
                </div>
                <div class="flow_model clearfix">
                <p><i style="background: #55A8FD">终</i> <span>湖北-武汉-武昌（卸）</span></p>
                <p>湖北省武汉市武昌区汉街653号</p>
                </div>
            </div>
        
            <div class="order_list clearfix">
                <ul class="order_list_left">
                    <li>客户</li>
                    <li>承运</li>
                    <li>收货</li>
                    <li>收入</li>
                </ul>
                <div class="order_main">
                    <ul class="order_tab">
                        <li><div>客户公里数：</div><input type="text"></li>
                        <li><div>客户简称：</div><input type="text"></li>
                        <li><div>客户简称：</div><input type="text"></li>
                        <li><div>客户地址：</div><input type="text"></li>
                        <li><div>客户合同：</div><input type="text"></li>
                    </ul>
                    <ul class="order_tab">
                        <li><div>承运方公里数：</div><input type="text"></li>
                        <li><div>货品名称：</div><input type="text"></li>
                        <li>
                            <div>货品类型：</div>
                            <select name="" id="">
                            <option value="普货">普货</option>
                            <option value="普货">普货</option>
                            <option value="普货">普货</option>
                            <option value="普货">普货</option>
                            </select>
                        </li>
                        <li>
                            <div>体积体重：</div>
                            <input style="width:15%" type="text"><span class="left" style="line-height: 60px">方</span>
                            <input style="width: 15%" type="text"><span class="left" style="line-height: 60px">吨</span>
                        </li>
                        <li>
                            <div>车型要求：</div>
                            <select name="" id="" style="color: #C5C5C5;width: 25%">
                            <option value="车型">车型</option>
                            <option value="车型">车型</option>
                            <option value="车型">车型</option>
                            </select>
                            <select name="" id="" style="color: #C5C5C5;width: 25%">
                            <option value="车长">车长</option>
                            <option value="车长">车长</option>
                            <option value="车长">车长</option>
                            </select>
                        </li>
                    </ul>
                    <ul class="order_tab">
                        <li><div>收货人员：</div><input type="text"></li>
                        <li>
                        <div>回单类型：</div>
                        <select name="" id="">
                            <option value="纸质+电子回单">纸质+电子回单</option>
                            <option value="纸质+电子回单">纸质+电子回单</option>
                            <option value="纸质+电子回单">纸质+电子回单</option>
                        </select>
                        </li>
                        <li style="width: 40%"><div>回单地址：</div><input type="text"></li>
                        <li></li>
                    </ul>
                    <ul class="order_tab">
                        <li><div>预估收入：</div><input type="text"></li>
                        <li>
                        <div>收入单价：</div>
                        <input type="text" style="width: 20%">
                        <select name="" id="" style="width: 20%">
                            <option value="">元/车</option>
                            <option value="">元/车</option>
                            <option value="">元/车</option>
                        </select>
                        </li>
                        <li><div>预付现金：</div><input type="text"></li>
                        <li><div>尾款现金：</div><input type="text"></li>
                        <li><div>信息费：</div><input type="text"></li>
                    </ul>
            
                    <ul class="order_tab">
                        <li>
                            <div>结算方式：</div>
                            <select name="" id="">
                            <option value="预付款+尾款账期">预付款+尾款账期</option>
                            <option value="预付款+尾款账期">预付款+尾款账期</option>
                            <option value="预付款+尾款账期">预付款+尾款账期</option>
                            </select>
                        </li>
                        <li><div>回款期限：</div><input style="width: 20%" type="text"> <span class="left" style="line-height: 60px;color: #828282">天</span></li>
                        <li><div>对账期限：</div><input style="width: 20%" type="text"> <span class="left" style="line-height: 60px;color: #828282">天</span></li>
                        <li><div>开票期限：</div><input style="width: 20%" type="text"> <span class="left" style="line-height: 60px;color: #828282">天</span></li>
                        <li><div>收款期限：</div><input style="width: 20%" type="text"> <span class="left" style="line-height: 60px;color: #828282">天</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="warpper mt20 driving_pattern">
            <p class="title"><i></i>驾驶模式：<span>接驳模式</span></p>
            <el-row class="driving_one">
                <el-col :span="8" class="driving_tow" style="border-right: 1px solid #C7C7C7">
                    <el-col :span="12" style="text-align: center;line-height: 104px;">车辆：<i class="skyblue">粤BD80000</i></el-col>
                    <el-col :span="12">
                        <p style="line-height: 24px">车源：<span>公司自有</span></p>
                        <p style="line-height: 56px;">车型：<span>拖头</span></p>
                        <p style="line-height: 24px">挂车车辆：<span>粤BD80000挂</span></p>
                    </el-col>
                </el-col>
                <el-col :span="8" class="driving_tow">
                    <el-col :span="12" style="text-align: center">
                        <p style="line-height: 24px">站点:<span>深圳南山</span></p>
                        <p style="line-height: 56px;">站点:<span>深圳南山</span></p>
                        <p style="line-height: 24px">站点:<span>深圳南山</span></p>
                    </el-col>
                    <el-col :span="12">
                        <p style="line-height: 24px">司机：<span>张东/15518457426</span></p>
                        <p style="line-height: 56px">司机：<span>张东/15518457426</span></p>
                        <p style="line-height: 24px">司机：<span>张东/15518457426</span></p>
                    </el-col>
                </el-col>
                <el-col :span="8" class="driving_tow">
                    <el-col :span="12" style="text-align: center">
                        <p style="line-height: 24px">站点:<span>深圳南山</span></p>
                        <p style="line-height: 56px;">站点:<span>深圳南山</span></p>
                        <p style="line-height: 24px">站点:<span>深圳南山</span></p>
                    </el-col>
                    <el-col :span="12">
                        <p style="line-height: 24px">司机：<span>张东/15518457426</span></p>
                        <p style="line-height: 56px">司机：<span>张东/15518457426</span></p>
                        <p style="line-height: 24px">司机：<span>张东/15518457426</span></p>
                    </el-col>
                </el-col>
            </el-row>
            <p style="line-height: 105px;font-size: 20px;">接驳确认</p>
            <el-row :gutter="86">
                <el-col :span="8">
                    <div class="shade connection">
                        <p class="connec_title">1.站点：<span class="skyblue">深圳宝安</span></p>
                        <ul>
                            <li><span>油封标签</span> <span>正常</span></li>
                            <li><span>随车手机</span> <span>正常</span></li>
                            <li><span>剐蹭情况</span> <span>正常</span></li>
                            <li><span>车辆故障灯指示</span> <span class="redcolor">异常</span></li>
                            <li><span>证件是否齐全</span> <span>正常</span></li>
                            <li>
                                <span style="width:103px;">反馈信息</span>
                                <span class="redcolor" style="height: 100px;">车辆灯右侧散灯不亮车辆灯右侧散灯不亮</span>
                            </li>
                        </ul>

                        <p>上传图片</p>

                        <div class="upimg">
                            <div>
                                <img src="http://placehold.it/114x90/">
                            </div>
                            <div>
                                <img src="http://placehold.it/114x90/"> 
                            </div>
                            <div>
                                <img src="http://placehold.it/114x90/">
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="shade connection">
                        <p class="connec_title">1.站点：<span class="skyblue">深圳宝安</span></p>
                        <ul>
                            <li><span>油封标签</span> <span>正常</span></li>
                            <li><span>随车手机</span> <span>正常</span></li>
                            <li><span>剐蹭情况</span> <span>正常</span></li>
                            <li><span>车辆故障灯指示</span> <span class="redcolor">异常</span></li>
                            <li><span>证件是否齐全</span> <span>正常</span></li>
                            <li>
                                <span style="width:103px;">反馈信息</span>
                                <span class="redcolor" style="height: 100px;">车辆灯右侧散灯不亮车辆灯右侧散灯不亮</span>
                            </li>
                        </ul>

                        <p>上传图片</p>

                        <div class="upimg">
                            <div>
                                <img src="http://placehold.it/114x90/">
                            </div>
                            <div>
                                <img src="http://placehold.it/114x90/"> 
                            </div>
                            <div>
                                <img src="http://placehold.it/114x90/">
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="shade connection">
                        <p class="connec_title">1.站点：<span class="skyblue">深圳宝安</span></p>
                        <ul>
                            <li><span>油封标签</span> <span>正常</span></li>
                            <li><span>随车手机</span> <span>正常</span></li>
                            <li><span>剐蹭情况</span> <span>正常</span></li>
                            <li><span>车辆故障灯指示</span> <span class="redcolor">异常</span></li>
                            <li><span>证件是否齐全</span> <span>正常</span></li>
                            <li>
                                <span style="width:103px;">反馈信息</span>
                                <span class="redcolor" style="height: 100px;">车辆灯右侧散灯不亮车辆灯右侧散灯不亮</span>
                            </li>
                        </ul>

                        <p>上传图片</p>

                        <div class="upimg">
                            <div>
                                <img src="http://placehold.it/114x90/">
                            </div>
                            <div>
                                <img src="http://placehold.it/114x90/"> 
                            </div>
                            <div>
                                <img src="http://placehold.it/114x90/">
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
    
<script>
export default {





name: 'Documentation',
components: {  },
data() {
    return {
    value1:'',
    must:true,
    must2:false,
    textarea:'',
    }
}
}
</script>

<style lang="scss" scoped>
.el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 100%!important;
}
.el-input__inner{
    border: none;
    height: 36px!important;
}
.dashboard-editor-container {
    padding: 20px;
    background-color: rgb(240, 242, 245);
    position: relative;
    .chart-wrapper {
        background: #fff;
        padding: 0px;
        margin-bottom: 32px;
    }
}
.warpper{
    width: 100%;
    height: 100%;
    background:#fff;
    box-shadow:0px 2px 5px rgba(18,31,62,0.16);
    border-radius:5px;
}
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
    display: block;
    float: left;
    margin:22px 10px 0 0;
}
}
.order{
    margin: 20px 40px 0 40px;
    display: flex;
    & .order_tips{
        width: 92px;
        height: 40px;
        line-height:40px;
        float: left;
        & i{color: #EF5565;}
    }
}
.order_road{
    flex: 1;
    height: 40px;
    border:1px solid #C5C5C5;
    border-radius: 5px;
    display: flex;
    & input{
        height: 38px;
        border:none;
        border-radius:5px;
        float: left;
        outline:none;
        flex: 1;
        font-size:16px;
        padding:0 10px;
    }
    & i{
        width: 60px;
        height: 38px;
        background-size: 22px 19px;
        float: left;
    }
}
.order_warpper{
    width: 28%;
    height: 40px;
    display: flex;
    float: left;
}
.order_warpper:not(:first-child){
    margin-left: 8%;
}
.order_flow{
    height: 80px;
    margin: 40px 40px 0 100px;
}
.flow_model{
    width: 18%;
    height: 80px;
    float: left;
    /* text-align: center; */
    & p:first-child i{
        width: 42px;
        height: 42px;
        display: inline-block;
        border-radius:50%;
        background:#3A9CFF;
        color:#fff;
        text-align:center;
        line-height:42px;
        white-space: nowrap;
    }
    & p:first-child span{
        font-size:18px;
        line-height:24px;
        color:rgba(51,51,51,1);
        margin-left: 10px;
        white-space: nowrap;
    }
    & p:last-child{
        font-size:16px;
        line-height:21px;
        color:rgba(153,153,153,1);
        padding-left: 56px;
        white-space: nowrap;
    }
}
.flow_model:not(:first-child){
    margin-left: 5%
}
.wire{
    width: 18%;
    height: 37px;
    float: left;
    color:#FE824C;
    font-size:18px;
    text-align:center;
    & .wire_main{
        position: relative;
        & i{
        border-left: 0px solid #FE824C;
        border-bottom: 15px solid #FE824C;
        border-right: 22px solid transparent;
        position: absolute;
        top: 1px;
        right: 3.2%;
        }
        & span{
        width: 95%;
        height: 4px;
        display: inline-block;
        background: #FE824C;
        margin-top:12px;
        margin-right:5%;
        }
    }
}
.order_list{margin: 40px 40px 0 40px;display: flex;}
.order_list_left{
    width: 93px;
    height: 240px;
    background: #F5F5F5;
    float: left;
    & li{
        width: 61px;
        height: 60px;
        text-align:center;
        line-height:60px;
        margin:0 auto;
        border-bottom:1px solid #ffffff;
        color:#999999;
    }
}
.order_main{
    flex:1;
    & .order_tab{
        width: 100%;
        height: 60px;
        border:1px solid #DDDDDD;
    }
    & .order_tab li{
        width:20%;
        height: 60px;
        float: left;
        & div{width: 48%;float: left;line-height: 58px;text-indent: 16px;}
        & input{width: 50%;float: left;height: 58px;border: none;outline: none;color: #3A9CFF}
        & select{width: 50%;float: left;height: 58px;border: none;outline: none;color: #3A9CFF}
    }
    & .order_tab li:not(:last-child){
        border-right:1px solid #DDDDDD
    }
}
.radio_button{
margin: 13px 20px 38px 40px;
}
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
.hide{display:none;}
.details{
    margin:0 30px;
    padding: 20px 0;
    border-bottom: 1px solid #F1F1F1;
    font-size: 16px;
    & div:nth-child(1){
        line-height: 70px;
        text-align: center;
        & span{color: #3A9CFF;font-weight: 600;}
    }
    & div:nth-child(2),& div:nth-child(3){
        line-height: 35px;
        & span{color: #AAAAAA;}
    }
    & div:nth-child(4){
        line-height: 70px;
        text-align: center;
        color: #3A9CFF;
        font-weight: 600;
        font-size: 26px;
    }
}
.mt20{margin-top: 20px;}
.driving_pattern{
    padding:30px;
    & .title{
        width: 100%;
        & i{
            width:12px;
            height:12px;
            display: inline-block;
            background:rgba(85,168,253,1);
            border-radius:50%;
            margin-right:9px;
        }
        & span{color: #3A9CFF}
    }
}
.driving_one{
    padding:45px 0;
    border-bottom: 1px solid #cccccc;
    & .driving_tow{
        & span{color: #999999}
    }
}
.skyblue{color: #3A9CFF;font-weight: 600}
.shade{
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    border-radius:10px;
}
.connection{
    padding: 0 27px 47px 27px;
    & .connec_title{
        text-align: center;
        height:29px + 46px;
        line-height:29px + 46px;
        font-size:22px;
    }
    & ul li{
        height:auto;
        min-height: 32px;
        display: flex;
        & span:first-child{
            width: 146px;display: inline-block;
        }
        & span:last-child{
            color: #999999;
            flex: 1;
            line-height: 22px;
            display: inline-block;
        }
    }
}
.redcolor{
    color: #EF5565!important;
}
.upimg{
    width: 100%;
    height: 150px;
    display: inline-block;
    position: relative;
    & div:nth-child(1),& div:nth-child(3){
        width: 138px;
        height: 103px;
        border:1px #ccc dashed;
        text-align:center;
        & img{
            margin: 5px 0
        }
    }
    & div:nth-child(1){
        position: absolute;
        top: 28px;
        left: 0;
    }
    & div:nth-child(3){
        position: absolute;
        top: 28px;
        right: 0;
    }
    & div:nth-child(2){
        width: 200px;
        height: 150px;
        border:1px #ccc dashed;
        position: absolute;
        top:0;
        left: 111px;
        text-align: center;
        & img{
            margin: 30px 0
        }
    }
}
</style>