<template>
    <div class="container">
        <!-- 搜索框 -->
        <div class="order_title">
            <i></i>新增站点
        </div>
        <div class="order_search" style="padding-top:0;">
            <p class="title_little pt25 mb25"><i></i>基础信息</p>
            <div class="int_model">
                <div>
                    <i style="color: #EF5565">*</i>站点名称 &nbsp;&nbsp;<el-input style="width: 60%" v-model="value1" placeholder="请输入内容"></el-input>
                </div>
                <div>
                    <i style="color: #EF5565">*</i>站点状态 &nbsp;&nbsp;<el-input style="width: 60%" v-model="value2" placeholder="请输入内容"></el-input>
                </div>
                <div>
                    <i style="color: #EF5565">*</i>详细地址 &nbsp;&nbsp;<el-input style="width: 60%" v-model="value3" placeholder="请输入内容"></el-input>
                </div>
            </div>
        </div>

        <!-- 表格展示 -->
        <div class="tab_warpper">
            <div class="tab_title clearfix" style="width: 100%;border: none">
                <p class="title_little"><i></i>接驳线路</p>
            </div>
            <div class="sitemain">
                <table style="width: 100%">
                    <tr style="background:#DFEFFF;line-height: 60px;color: #333333" height="60">
                        <th width="30%">选择线路</th>
                        <th width="20%">站点排序</th>
                        <th width="30%">站点信息</th>
                        <th width="20%">操作</th>
                    </tr>
                </table>
                <div class="site_box">
                    <div>
                        <div>
                            <el-input style="width: 70%" v-model="value3" placeholder="请输入线路关键字"></el-input>
                            <span>
                                选择
                            </span>
                        </div>
                    </div>
                    <div><el-input style="width: 98%" v-model="value3" placeholder="请输入线路关键字"></el-input></div>
                    <div><!--站点1：深圳宝安 站点2：武汉武昌--></div>
                    <div>
                        <el-button type="primary">保持</el-button>
                        <el-button type="danger">取消</el-button>
                    </div>
                </div>
                <table style="width: 100%;text-align: center;">
                    <tr style="line-height: 60px;color: #333333;border:1px solid #eee;" height="60">
                        <td width="30%">001920199999   深圳宝安—武汉武昌</td>
                        <td width="20%">2</td>
                        <td width="30%">站点1：深圳宝安     站点2：武汉武昌</td>
                        <td width="20%">
                            <a style="color: #3A9CFF;text-decoration: underline" href="">修改</a>
                            &nbsp;&nbsp;
                            <a style="color: #FE5E5E;text-decoration: underline" href="">删除</a>
                        </td>
                    </tr>
                    <tr style="line-height: 60px;color: #333333;border:1px solid #eee;" height="60">
                        <td width="30%">001920199999   深圳宝安—武汉武昌</td>
                        <td width="20%">2</td>
                        <td width="30%">站点1：深圳宝安     站点2：武汉武昌</td>
                        <td width="20%">
                            <a style="color: #3A9CFF;text-decoration: underline" href="">修改</a>
                            &nbsp;&nbsp;
                            <a style="color: #FE5E5E;text-decoration: underline" href="">删除</a>
                        </td>
                    </tr>
                    <tr style="line-height: 60px;color: #333333;border:1px solid #eee;" height="60">
                        <td width="30%">001920199999   深圳宝安—武汉武昌</td>
                        <td width="20%">2</td>
                        <td width="30%">站点1：深圳宝安     站点2：武汉武昌</td>
                        <td width="20%">
                            <a style="color: #3A9CFF;text-decoration: underline" href="">修改</a>
                            &nbsp;&nbsp;
                            <a style="color: #FE5E5E;text-decoration: underline" href="">删除</a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="sub_warpper"><input type="button" value="取消"> <input type="button" value="保存"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value1:'',
            value2:'',
            value3:'',
        }
    },
    methods: {
    },
}
</script>
<style lang="scss" scope>
.order_title {
    height: 70px;
    line-height: 70px;
    padding: 0 30px;
    border-bottom: 1px solid #F1F1F1;
    background: #fff;
    font-size: 20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.order_title i {
    width: 4px;
    height: 25px;
    background: #3a9cff;
    display: inline-block;
    float: left;
    margin: 22px 10px 0 0;
}
.title_little i {
    width: 9px;
    height: 9px;
    display: inline-block;
    background: #3A9CFF;
    border-radius: 50%;
    margin-right: 10px;
}
.pt25{padding-top: 25px;}
.mb25{margin-bottom: 25px;}
.container{padding: 20px;background-color: rgb(240, 242, 245);position: relative;}
.order_search{padding: 46px;background: #fff;border-radius:5px;box-shadow:0 0 0 #fff}
.int_model{width: 100%;height: 40px;display: flex;
    & div{flex: 1;}
}
.mt36{margin-top: 36px;}
.el-range-editor--medium .el-range__icon {position: absolute!important;right: 5px!important;}
.el-range-editor--medium .el-range-separator {width: 20px!important;}
.btn_warpper{
    width: 100%;
    height: auto;
    margin-top: 45px;
    & button:not(:first-child){margin-left: 38px}
}
.tab_warpper{width: 100%;height: auto;background: #fff;box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;
    margin-top: 20px;display: inline-block;padding-bottom: 92px;}
.tab_title{
    height: 70px;
    line-height: 70px;
    padding:0 30px;
    border-bottom: 1px solid #F1F1F1;
    & .left i{
        width:4px;
        height:25px;
        display:inline-block;
        background:rgba(58,156,255,1);
        float: left;
        margin:22px 10px 0 0;
    }
}
.el-table .cell{text-align: center}
.sitemain{
    margin:0 89px;
    & tr th:not(:last-child){
        border-right: 1px solid #fff;
    }
}
.site_box{
    width: 100%;
    margin-top: 10px;
    height: 40px;
    & div:nth-child(1){
        width: 30%;
        float: left;
        & div{
            width: 98%;
            height:38px;
            line-height: 38px;
            border-radius: 4px;
            border: 1px solid #DCDFE6;
            & span{width: 30%;display: inline-block;text-align:center;color:#3A9CFF;border-left:1px solid #D7D7D7;cursor: pointer;}
            & div,& input{border: none!important;height:34px}
        }
    }
    & div:nth-child(2){
        width: 20%;
        float: left;
    }
    & div:nth-child(3){
        width: 30%;
        line-height: 38px;
        text-align: center;
        color: #000;
        float: left;
        height: 36px;
        background: rgb(223, 239, 255)
    }
    & div:nth-child(4){
        width: 20%;
        float: left;
        text-align: center
    }
}
.sub_warpper {width: 380px;height: 50px;margin: 60px auto 137px auto;}
.sub_warpper input:first-child {width: 110px;height: 50px;background: #ddd;border-radius: 5px;border: none;float: left;}
.sub_warpper input:last-child {width: 110px;height: 50px;background: #3a9cff;border-radius: 5px;color: #fff;border: none;float: right;}
</style>