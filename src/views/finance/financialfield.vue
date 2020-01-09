<template>
    <div class="container">
        <!-- 搜索框 -->
        <div class="order_title">
            <i></i>字段设置
        </div>
        <div class="order_search" style="padding-top:0;">
            <p class="title_little pt25 mb25"><i></i>客户对账单</p>
            <div class="sitemain">
                <table style="width: 100%">
                    <tr style="background:rgba(58,156,255,.26);;line-height: 60px;color: #333333" height="60">
                        <th width="14.3%">排序</th>
                        <th width="14.3%">字段名称</th>
                        <th width="14.3%">计费类型</th>
                        <th width="14.3%">数据类型</th>
                        <th width="14.3%">是否启用</th>
                        <th width="14.3%">备注</th>
                        <th width="14.3%">操作</th>
                    </tr>
                </table>
                <div class="site_box">
                    <div style="width: 14.3%;">
                        <el-input style="width: 98%" v-model="value3" placeholder="4"></el-input>
                    </div>
                    <div style="width: 14.3%;"><el-input style="width: 98%" v-model="value3" placeholder="违章"></el-input></div>
                    <div style="width: 14.3%;">
                        <el-radio-group v-model="radio">
                            <el-radio :label="3">支出</el-radio>
                            <el-radio :label="6">收入</el-radio>
                        </el-radio-group>
                    </div>
                    <div style="width: 14.3%;height:100%;flolt:left;align-items: center;display: inline-flex;justify-content: center;">
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="是">是</el-checkbox>
                            <el-checkbox label="否">否</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div style="width: 14.3%;float:left">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div style="width: 14.3%;float:left">
                        <el-input style="width: 98%" v-model="value3" placeholder=""></el-input>
                    </div>
                    <div style="width: 14.0%;float:left;text-align:center">
                        <el-button type="primary">保持</el-button>
                        <el-button type="danger">取消</el-button>
                    </div>
                </div>
                <table style="width: 100%;text-align: center;">
                    <tr style="line-height: 60px;color: #333333;border:1px solid #eee;" height="60">
                        <td width="14.3%">1</td>
                        <td width="14.3%">时效罚款</td>
                        <td width="14.3%">支出</td>
                        <td width="14.3%">字符串</td>
                        <td width="14.3%">是</td>
                        <td width="14.3%">-----</td>
                        <td width="14.3%">
                            <a style="color: #3A9CFF;text-decoration: underline" href="">编辑</a>
                            &nbsp;&nbsp;
                            <a style="color: #FE5E5E;text-decoration: underline" href="">删除</a>
                        </td>
                    </tr>
                    <tr style="line-height: 60px;color: #333333;border:1px solid #eee;" height="60">
                        <td width="14.3%">1</td>
                        <td width="14.3%">时效罚款</td>
                        <td width="14.3%">支出</td>
                        <td width="14.3%">字符串</td>
                        <td width="14.3%">是</td>
                        <td width="14.3%">-----</td>
                        <td width="14.3%">
                            <a style="color: #3A9CFF;text-decoration: underline" href="">编辑</a>
                            &nbsp;&nbsp;
                            <a style="color: #FE5E5E;text-decoration: underline" href="">删除</a>
                        </td>
                    </tr>
                    <tr style="line-height: 60px;color: #333333;border:1px solid #eee;" height="60">
                        <td width="14.3%">1</td>
                        <td width="14.3%">时效罚款</td>
                        <td width="14.3%">支出</td>
                        <td width="14.3%">字符串</td>
                        <td width="14.3%">是</td>
                        <td width="14.3%">-----</td>
                        <td width="14.3%">
                            <a style="color: #3A9CFF;text-decoration: underline" href="">编辑</a>
                            &nbsp;&nbsp;
                            <a style="color: #FE5E5E;text-decoration: underline" href="">删除</a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="tab_warpper">
            <div class="order_search" style="padding-top:0;">
                <p class="title_little pt25 mb25"><i></i>司机对账单</p>
                <div class="sitemain">
                    <table style="width: 100%">
                        <tr style="background:rgba(58,156,255,.26);;line-height: 60px;color: #333333" height="60">
                            <th width="14.3%">排序</th>
                            <th width="14.3%">字段名称</th>
                            <th width="14.3%">计费类型</th>
                            <th width="14.3%">数据类型</th>
                            <th width="14.3%">是否启用</th>
                            <th width="14.3%">备注</th>
                            <th width="14.3%">操作</th>
                        </tr>
                    </table>
                    <div class="site_box">
                        <div style="width: 14.3%;">
                            <el-input style="width: 98%" v-model="value3" placeholder="4"></el-input>
                        </div>
                        <div style="width: 14.3%;"><el-input style="width: 98%" v-model="value3" placeholder="违章"></el-input></div>
                        <div style="width: 14.3%;">
                            <el-radio-group v-model="radio">
                                <el-radio :label="3">支出</el-radio>
                                <el-radio :label="6">收入</el-radio>
                            </el-radio-group>
                        </div>
                        <div style="width: 14.3%;height:100%;flolt:left;align-items: center;display: inline-flex;justify-content: center;">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox label="是">是</el-checkbox>
                                <el-checkbox label="否">否</el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div style="width: 14.3%;float:left">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div style="width: 14.3%;float:left">
                            <el-input style="width: 98%" v-model="value3" placeholder=""></el-input>
                        </div>
                        <div style="width: 14.0%;float:left;text-align:center">
                            <el-button type="primary">保持</el-button>
                            <el-button type="danger">取消</el-button>
                        </div>
                    </div>
                    <table style="width: 100%;text-align: center;">
                        <tr style="line-height: 60px;color: #333333;border:1px solid #eee;" height="60">
                            <td width="14.3%">1</td>
                            <td width="14.3%">时效罚款</td>
                            <td width="14.3%">支出</td>
                            <td width="14.3%">字符串</td>
                            <td width="14.3%">是</td>
                            <td width="14.3%">-----</td>
                            <td width="14.3%">
                                <a style="color: #3A9CFF;text-decoration: underline" href="">编辑</a>
                                &nbsp;&nbsp;
                                <a style="color: #FE5E5E;text-decoration: underline" href="">删除</a>
                            </td>
                        </tr>
                        <tr style="line-height: 60px;color: #333333;border:1px solid #eee;" height="60">
                            <td width="14.3%">1</td>
                            <td width="14.3%">时效罚款</td>
                            <td width="14.3%">支出</td>
                            <td width="14.3%">字符串</td>
                            <td width="14.3%">是</td>
                            <td width="14.3%">-----</td>
                            <td width="14.3%">
                                <a style="color: #3A9CFF;text-decoration: underline" href="">编辑</a>
                                &nbsp;&nbsp;
                                <a style="color: #FE5E5E;text-decoration: underline" href="">删除</a>
                            </td>
                        </tr>
                        <tr style="line-height: 60px;color: #333333;border:1px solid #eee;" height="60">
                            <td width="14.3%">1</td>
                            <td width="14.3%">时效罚款</td>
                            <td width="14.3%">支出</td>
                            <td width="14.3%">字符串</td>
                            <td width="14.3%">是</td>
                            <td width="14.3%">-----</td>
                            <td width="14.3%">
                                <a style="color: #3A9CFF;text-decoration: underline" href="">编辑</a>
                                &nbsp;&nbsp;
                                <a style="color: #FE5E5E;text-decoration: underline" href="">删除</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <div class="tab_warpper">
            <div class="order_search" style="padding-top:0;">
                <p class="title_little pt25 mb25"><i></i>服务商对账单</p>
                <div class="sitemain">
                    <table style="width: 100%">
                        <tr style="background:rgba(58,156,255,.26);;line-height: 60px;color: #333333" height="60">
                            <th width="14.3%">排序</th>
                            <th width="14.3%">字段名称</th>
                            <th width="14.3%">计费类型</th>
                            <th width="14.3%">数据类型</th>
                            <th width="14.3%">是否启用</th>
                            <th width="14.3%">备注</th>
                            <th width="14.3%">操作</th>
                        </tr>
                    </table>
                    <div class="site_box">
                        <div style="width: 14.3%;">
                            <el-input style="width: 98%" v-model="value3" placeholder="4"></el-input>
                        </div>
                        <div style="width: 14.3%;"><el-input style="width: 98%" v-model="value3" placeholder="违章"></el-input></div>
                        <div style="width: 14.3%;">
                            <el-radio-group v-model="radio">
                                <el-radio :label="3">支出</el-radio>
                                <el-radio :label="6">收入</el-radio>
                            </el-radio-group>
                        </div>
                        <div style="width: 14.3%;height:100%;flolt:left;align-items: center;display: inline-flex;justify-content: center;">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox label="是">是</el-checkbox>
                                <el-checkbox label="否">否</el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div style="width: 14.3%;float:left">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div style="width: 14.3%;float:left">
                            <el-input style="width: 98%" v-model="value3" placeholder=""></el-input>
                        </div>
                        <div style="width: 14.0%;float:left;text-align:center">
                            <el-button type="primary">保持</el-button>
                            <el-button type="danger">取消</el-button>
                        </div>
                    </div>
                    <table style="width: 100%;text-align: center;">
                        <tr style="line-height: 60px;color: #333333;border:1px solid #eee;" height="60">
                            <td width="14.3%">1</td>
                            <td width="14.3%">时效罚款</td>
                            <td width="14.3%">支出</td>
                            <td width="14.3%">字符串</td>
                            <td width="14.3%">是</td>
                            <td width="14.3%">-----</td>
                            <td width="14.3%">
                                <a style="color: #3A9CFF;text-decoration: underline" href="">编辑</a>
                                &nbsp;&nbsp;
                                <a style="color: #FE5E5E;text-decoration: underline" href="">删除</a>
                            </td>
                        </tr>
                        <tr style="line-height: 60px;color: #333333;border:1px solid #eee;" height="60">
                            <td width="14.3%">1</td>
                            <td width="14.3%">时效罚款</td>
                            <td width="14.3%">支出</td>
                            <td width="14.3%">字符串</td>
                            <td width="14.3%">是</td>
                            <td width="14.3%">-----</td>
                            <td width="14.3%">
                                <a style="color: #3A9CFF;text-decoration: underline" href="">编辑</a>
                                &nbsp;&nbsp;
                                <a style="color: #FE5E5E;text-decoration: underline" href="">删除</a>
                            </td>
                        </tr>
                        <tr style="line-height: 60px;color: #333333;border:1px solid #eee;" height="60">
                            <td width="14.3%">1</td>
                            <td width="14.3%">时效罚款</td>
                            <td width="14.3%">支出</td>
                            <td width="14.3%">字符串</td>
                            <td width="14.3%">是</td>
                            <td width="14.3%">-----</td>
                            <td width="14.3%">
                                <a style="color: #3A9CFF;text-decoration: underline" href="">编辑</a>
                                &nbsp;&nbsp;
                                <a style="color: #FE5E5E;text-decoration: underline" href="">删除</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <el-row :gutter="24" class="mt10">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <p class="title_little pt25 mb25 ml30"><i></i>报销处理</p>
                    <div class="tab_modle">
                        <table style="width:100%">
                            <tr>    
                                <th>字段名称</th>
                                <th>数据类型</th>
                                <th>操作</th>
                            </tr>
                            <tr>
                                <td>时效罚款</td>
                                <td>选择列表</td>
                                <td><el-button type="primary">编辑字典</el-button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <p class="title_little pt25 mb25 ml30"><i></i>违规罚款处理</p>
                    <div class="tab_modle">
                        <table style="width:100%">
                            <tr>    
                                <th>字段名称</th>
                                <th>数据类型</th>
                                <th>操作</th>
                            </tr>
                            <tr>
                                <td>时效罚款</td>
                                <td>选择列表</td>
                                <td><el-button type="primary">编辑字典</el-button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value1:'',
            value2:'',
            value3:'',
            radio: 2,
            checkList:['是']
        }
    },
    methods: {
        
    },
}
</script>
<style lang="scss" scoped>
.tab_modle{
    padding: 0 120px 0 120px;
    margin: 0px 0 54px 0;
    display: inline-block;
    text-align: center;
    width: 100%;
    & table tr th{background: rgba(58, 156, 255, 0.26)}
    & table tr{height: 60px;}
    & table tr:not(:first-child){
        border: 1px solid #DDDDDD
    }
    & table tr td,& table tr th{vertical-align:middle}
}
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
.ml30{margin-left: 30px;}
.mt10{margin-top:10px;}

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
    display: block;
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
.order_search{padding: 46px 46px 40px 46px;background: #fff;border-radius:5px;box-shadow:0 0 0 #fff}

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
    margin-top: 20px;display: inline-block;}
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
.sitemain{
    margin:0 57px;
    & tr th:not(:last-child){
        border-right: 1px solid #fff;
    }
}
.site_box{
    width: 100%;
    margin: 10px 0;
    height: 40px;
    & div:nth-child(1){
        float: left;
        & div{
            width: 98%;
            height:38px;
            line-height: 38px;
            border-radius: 4px;
            & div,& input{border: none!important;height:34px}
        }
    }
    & div:nth-child(2){
        float: left;
    }
    & div:nth-child(3){
        line-height: 38px;
        color: #000;
        float: left;
        height: 36px;
        align-items: center;
        display: inline-flex;
        justify-content: center
    }
    & div:nth-child(4){
        float: left;
        text-align: center
    }
}
.sub_warpper {width: 380px;height: 50px;margin: 60px auto 137px auto;}
.sub_warpper input:first-child {width: 110px;height: 50px;background: #ddd;border-radius: 5px;border: none;float: left;}
.sub_warpper input:last-child {width: 110px;height: 50px;background: #3a9cff;border-radius: 5px;color: #fff;border: none;float: right;}
</style>