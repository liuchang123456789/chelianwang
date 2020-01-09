<template>
    <div class="container">
        <!-- 搜索框 -->
        <div class="warpper" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;">
            <div class="order_title">
                <i></i>系统公告
            </div>
            <div class="order_search">
                <p class="title_little"><i></i>系统介绍</p>
                <div class="inform_main">
                    <div>
                        <img width="80" src="../../assets/images/tong.png" alt="">
                        <p>操作手册</p>
                    </div>
                    <div>
                        <img width="80" src="../../assets/images/tong.png" alt="">
                        <p>产品手册</p>
                    </div>
                    <div>
                        <img width="80" src="../../assets/images/tong.png" alt="">
                        <p>联系手册</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="warpper mt10" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding-bottom:50px;">
            <p class="title_little" style="padding: 26px 0 20px 26px;border-bottom: 1px solid #eee;">
                <i></i>系统更新动态

                <span class="fen right mr26">
                    <span>&lt;</span>
                    <span>1</span>
                    <span>&gt;</span>
                </span>
            </p>
            <ul class="pdflist">
                <li>
                    <a href="" target="_blank">飞腾物流V1.0上线公告.pdf</a>
                    <p>2018-8-13</p>
                </li>
                <li>
                    <a href="" target="_blank">飞腾物流V1.0上线公告.pdf</a>
                    <p>2018-8-13</p>
                </li>
                <li>
                    <a href="" target="_blank">飞腾物流V1.0上线公告.pdf</a>
                    <p>2018-8-13</p>
                </li>
                <li>
                    <a href="" target="_blank">飞腾物流V1.0上线公告.pdf</a>
                    <p>2018-8-13</p>
                </li>
            </ul>
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
        
    }
}
</script>
<style lang="scss" scoped>
.container{padding: 20px;background-color: rgb(240, 242, 245);position: relative;}
.order_search{padding:25px 30px 30px;background: #fff;box-shadow: 0}
.mt10{margin-top: 10px;}
.mt30{margin-top: 30px;}
.mr26{margin-right: 26px;}
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
.title_little{
    margin-bottom: 25px;
    & i{width: 9px;height: 9px;display: inline-block;background:#3A9CFF;border-radius:50%;margin-right:10px}
}
.bordernone input{border: none}
.el-upload--picture-card{
    line-height: 36px!important;
}
.upimg{width: 100%;height: 150px;}
.ml30{margin-left: 30px;}
.inform_main{
    width: 1200px;height: 200px;margin: 0 auto;
    & div{
        width: 33.3%;
        height: 200px;
        float: left;
        text-align: center;
        padding-top: 50px;
        & p{
            line-height: 60px;
        }
    }
}
.pdflist{
    margin: 26px;
    & li{width: 100%;height: 80px;line-height: 30px;padding:10px 0;border-bottom: 1px solid #eee;}
}
.fen{
    & span:nth-child(1),& span:nth-child(3){
        width: 26px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        display: inline-block;
        border-radius: 5px;
        border:1px solid #eee;
        color: #999;
    }
    & span:nth-child(2){
        width: 26px;
        height: 26px;
        text-align: center;
        display: inline-block;
    }
}
</style>