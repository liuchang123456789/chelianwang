<template>
    <div class="dashboard-editor-container">
        <div class="warpper">
            <div class="order_title">
                <i></i>调度页
            </div>
            <div class="order clearfix">
                <div class="order_warpper">
                <span class="order_tips"><i style="color: #EF5565">*</i>选择车辆</span>
                <div class="order_road clearfix">
                    <input type="text" placeholder="请输入">
                    <i></i>
                </div>
                </div>
                <div class="order_warpper">
                <span class="order_tips">选择挂车</span>
                <div class="order_road clearfix">
                    <input type="text" placeholder="请输入">
                    <i></i>
                </div>
                </div>
            </div>

            <div class="radio_button">
                驾驶模式：
                <el-checkbox v-model="must">双驾模式</el-checkbox>
                <el-checkbox v-model="must2">接驳模式</el-checkbox>
                <el-checkbox v-model="must3">单驾模式</el-checkbox>
                <el-checkbox v-model="must3">外请模式</el-checkbox>
            </div>

            <div class="order clearfix">
                <div class="order_warpper">
                <span class="order_tips"><i style="color: #EF5565">*</i>主驾信息</span>
                <div class="order_road clearfix">
                    <input type="text" placeholder="请输入">
                    <i></i>
                </div>
                </div>
                <div class="order_warpper">
                    <span class="order_tips">副驾信息</span>
                    <div class="order_road clearfix">
                        <input type="text" placeholder="请输入">
                        <i></i>
                    </div>
                </div>
            </div>

            <!-- <div class="site">
                站点1 深圳南山  
            </div> -->
        
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
            must3:false
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
    min-height: 750px;
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
        display: inline-block;
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
.radio_button{
    margin: 67px 20px 30px 40px;
}
.site{
    width: 100%;
    line-height: 40px;
    margin-bottom: 40px;
}
</style>
      