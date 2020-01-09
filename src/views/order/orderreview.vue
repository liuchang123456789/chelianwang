<template>
    <div class="dashboard-editor-container">
        <div class="warpper">
        <div class="order_title">
            <i></i>订单录入
        </div>
        <div class="order clearfix">
            <div class="order_warpper">
            <span class="order_tips">选择线路</span>
            <div class="order_road clearfix">
                <input type="text" placeholder="请输入线路关键字，临时线路无需填写">
                <i></i>
            </div>
            </div>
            <div class="order_warpper">
            <span class="order_tips"><i>*</i> 选择客户</span>
            <div class="order_road clearfix">
                <input type="text" placeholder="请输入客户名字">
                <i></i>
            </div>
            </div>
            <div class="order_warpper">
                <span class="order_tips"><i>*</i> 靠台时间</span>
                <div class="order_road clearfix">
                    <el-date-picker
                    v-model="value1"
                    type="datetime"
                    clear-icon
                    placeholder="请输入靠台时间">
                </el-date-picker>
                </div>
            </div>
        </div>
    
        <div class="order_flow">
            <div class="flow_model clearfix">
            <p><i>起</i> <span>起点城市</span></p>
            <p>详细地址</p>
            </div>
            <div class="wire">
            <span>5小时</span>
            <div class="wire_main">
                <i></i>
                <span></span>
            </div>
            </div>
            <div class="flow_model clearfix">
            <p><i style="background: #31D093">经</i> <span>经停点城市</span></p>
            <p>详细地址</p>
            </div>
            <div class="wire">
            <span>3小时</span>
            <div class="wire_main">
                <i></i>
                <span></span>
            </div>
            </div>
            <div class="flow_model clearfix">
            <p><i style="background: #55A8FD">终</i> <span>终点城市</span></p>
            <p>详细地址</p>
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
        <el-input style="margin: 30px 40px;width:auto;display:block"
            type="textarea"
            :rows="3"
            placeholder="请填写备注说明"
            v-model="textarea">
        </el-input>
        <div class="radio_button">
            审核结果：
            <el-checkbox v-model="must">同意</el-checkbox>
            <el-checkbox v-model="must2">驳回</el-checkbox>
            <el-checkbox v-model="must3">转审</el-checkbox>
        </div>
        
        <el-row>
            <el-col :span="2" style="text-indent: 40px">审核意见:</el-col>
            <el-col :span="22" style="padding:0 40px 0 20px">
                <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="请输入审核意见"
                    v-model="textarea">
                </el-input>
            </el-col>
        </el-row>

        <div class="sub_warpper">
            <input type="button" value="取消">
            <input type="button" value="确认">
        </div>
    </div>
</div>
</template>
<script>
    // import  from ''
export default {
    name: 'Documentation',
    components: {  },
    data() {
        return {
        value1:'',
        must:true,
        must2:false,
        must3:false,
        textarea:'',
        }
    }
}
</script>
    
<style lang="scss" scoped>
.order_road input{border:none}
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
    }
    & p:first-child span{
        font-size:18px;
        line-height:24px;
        color:rgba(51,51,51,1);
        margin-left: 10px;
    }
    & p:last-child{
        font-size:16px;
        line-height:21px;
        color:rgba(153,153,153,1);
        padding-left: 56px;
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
    padding-bottom: 137px;
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
    .mt30{margin-top: 30px;}
    .order_road input{border:none}
    </style>
      