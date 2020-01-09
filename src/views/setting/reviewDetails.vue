<template>
    <div class="container">
        <div class="tab_warpper">
            <div class="tab_title clearfix">
                <div class="left">
                    <i></i>审核详情
                </div>
            </div>

            <div class="review_main clearfix">
                <ul>
                    <li><span>审核类型：</span><span>业务流程</span></li>
                    <li><span>审核来源：</span><span>订单价格：修改</span></li>
                    <li><span>发起人：</span><span>张琪</span></li>
                </ul>
                <ul>
                    <li><span>审核名称：</span><span>01202131553213</span></li>
                    <li><span>订单编号：</span><span>01202131553213</span></li>
                    <li><span>备注：</span><span>价格100000修改为130000</span></li>
                </ul>
            </div>
        </div>

        <div class="tab_warpper" style="padding-bottom:100px;">
            <div class="tab_title clearfix">
                <div class="left">
                    <i></i>审核详情
                </div>
            </div>
            <el-steps :active="4" align-center style="margin:100px 60px;">
                <el-step title="创建审核" description="曲丽丽2017-10-01 12:00"></el-step>
                <el-step title="一级审核" description=""></el-step>
                <el-step title="转审审核" description="曲丽丽2017-10-01 12:00"></el-step>
                <el-step title="二级审核" description="周毛毛 催一下"></el-step>
                <el-step title="完成" description="这是一段很长很长很长的描述性文字"></el-step>
            </el-steps>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
        
    },
}
</script>
<style lang="scss" scoped>
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
.review_main{
    margin: 30px;
    & ul{
        width: 50%;
        float: left;
        margin-bottom: 30px;
        & li{
            line-height: 30px;
            font-size:14px;
            padding-left: 30px;
            & span:first-child{
                width: 80px;
                display: inline-block;
            }
        }
    }
}
</style>