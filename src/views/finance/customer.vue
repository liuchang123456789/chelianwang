<template>
    <div class="dashboard-editor-container">
        <div class="warpper" style="padding-bottom:50px;">
            <div class="order_title">
                <i></i>客户对账详情
            </div>
            
            <el-row class="details">
                <el-col :span="6">
                    订单: <span class="color:#3A9CFF">012451634500</span>
                </el-col>
                <el-col :span="6">
                    <p>创建时间：<span>谭谭/19-07-28 15:30</span></p>
                    <p>线路：<span>25846135485 深圳南山-重庆渝中</span></p>
                </el-col>
                <el-col :span="6">
                    <p>客户：<span>深圳市双龙物流有限公司</span></p>
                    <p>线路属性：<span>固定线路</span></p>
                </el-col>
                <el-col :span="6">
                    已完成
                </el-col>
            </el-row>

            <div class="order_flow">
                <div class="flow_model clearfix">
                    <p><i>起</i> <span>广东-深圳-宝安</span></p>
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
                    <p><i style="background: #31D093">经</i> <span>湖南-长沙-芙蓉</span></p>
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
        </div>

        <div class="warpper mt20 driving_pattern">
            <p class="title"><i></i>开票要求</p>
            <div class="driving_main">
                <ul class="clearfix driving_font">
                    <li>发票号码：19177514</li>
                    <li>开票总金额：250000</li>
                    <li>快递单号：M00078862234</li>
                </ul>

                <p style="line-height:65px;">发票图片：</p>
                <ul class="jgul clearfix">
                    <li>
                        <img src="http://placehold.it/125x94/">
                    </li>
                    <li>
                        <img src="http://placehold.it/125x94/">
                    </li>
                    <li>
                        <img src="http://placehold.it/125x94/">
                    </li>
                </ul>
            </div>
        </div>

        <el-row :gutter="29">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <div class="warpper mt20 driving_pattern">
                        <p class="title"><i></i>回款状态</p>
                        <div style="padding-left:20px;">
                            <ul class="clearfix flexli">
                                <li>银行流水号：ZEHO1917751445894077</li>
                                <li>回款总金额：250000</li>
                            </ul>

                            <p style="line-height:65px;">发票图片：</p>
                            <ul class="jgul clearfix">
                                <li>
                                    <img src="http://placehold.it/125x94/">
                                </li>
                                <li>
                                    <img src="http://placehold.it/125x94/">
                                </li>
                                <li>
                                    <img src="http://placehold.it/125x94/">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <div class="warpper mt20 driving_pattern">
                        <p class="title"><i></i>核销状态</p>

                        <div style="padding-left:20px;">
                            <ul class="clearfix flexli">
                                <li>回款总金额：250000</li>
                            </ul>

                            <p style="line-height:65px;">核销单图片：</p>
                            <ul class="jgul clearfix">
                                <li>
                                    <img src="http://placehold.it/125x94/">
                                </li>
                                <li>
                                    <img src="http://placehold.it/125x94/">
                                </li>
                                <li>
                                    <img src="http://placehold.it/125x94/">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>

        <div class="warpper mt20 driving_pattern">
            <p class="title"><i></i>开票要求</p>
            <div class="driving_main">
                <ul class="clearfix driving_font2">
                    <li>预估应收：<span>￥50000</span></li>
                    <li>时效罚款：<span>￥50000</span></li>
                    <li>货物损坏：<span>￥50000</span></li>
                    <li>信息费：<span>￥0</span></li>
                    <li>实际应收：<span>￥46000</span></li>
                </ul>

                <p style="margin-top:30px;">票据要求：需要运输专票</p>
            </div>
        </div>

        <div class="warpper mt20 driving_pattern">
            <p class="title"><i></i>字段设置</p>
            <div class="fontsetting">
                <span>货品遗失</span>
                <span>货品损坏</span>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
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
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #fff;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #fff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #fff;
  }
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
.radio_button{margin: 13px 20px 38px 40px;}
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
.shade{box-shadow:0px 3px 6px rgba(0,0,0,0.16);border-radius:10px;}
.redcolor{color: #EF5565!important;}
.driving_main{margin: 30px;
& .driving_font li{width:300px;float: left}
& .driving_font2 li{width:20%;float: left;& span{color:#FE824C}}
}
.jgul{
    & li{float: left;}
    & li:not(:first-child){margin-left: 20px;}
}
.flexli{
    & li{
        width: 50%;
        height: 35px;
        float: left;
        line-height: 35px;
        margin-top: 20px;
        font-size: 15px;
    }
}
.fontsetting{
    width: 100%;
    display: inline-block;
    margin-top: 20px;
    & span{
        height: 38px;
        line-height: 38px;
        padding:0 20px;
        border: 1px solid #3A9CFF;
        color: #3A9CFF;
        border-radius: 3px;
        font-size: 15px;
        text-align: center;
        display: inline-block;
    }
    & span:not(:first-child){margin-left: 50px;}
}
</style>