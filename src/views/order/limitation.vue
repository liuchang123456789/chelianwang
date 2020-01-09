<template>
    <div class="dashboard-editor-container">
        <div class="warpper">
            <div class="order_title">
                <i></i>时效登记
            </div>

            <el-row :gutter="30" style="margin: 30px 0 50px 25px">
                <el-col :span="5">订单编号：20164512315</el-col>
                <el-col :span="4">订单状态：运输中</el-col>
                <el-col :span="6">运输线路：深圳南山-武汉武昌</el-col>
            </el-row>
            
            <div class="order clearfix">
                <el-row style="width: 100%">
                    <el-col :span="2" style="line-height: 38px">
                        责任方
                    </el-col>
                    <el-col :span="6">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%;">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="2" style="line-height: 38px">
                        责任司机
                    </el-col>
                    <el-col :span="6">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%;">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </div>

            <div class="order clearfix">
                <el-row style="width: 100%">
                    <el-col :span="2" style="line-height: 38px">
                        要求靠台时间
                    </el-col>
                    <el-col :span="6">
                        <el-date-picker
                            v-model="value1"
                            type="datetime"
                            placeholder="选择日期时间">
                        </el-date-picker>
                    </el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="2" style="line-height: 38px">
                        要求时效
                    </el-col>
                    <el-col :span="6">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%;">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div class="order clearfix">
                <el-row style="width: 100%">
                    <el-col :span="2" style="line-height: 38px">
                        实际靠台时间
                    </el-col>
                    <el-col :span="6">
                        <el-date-picker
                            v-model="value2"
                            type="datetime"
                            placeholder="选择日期时间">
                        </el-date-picker>
                    </el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="2" style="line-height: 38px">
                        实际到达时间
                    </el-col>
                    <el-col :span="6">
                        <el-date-picker
                            v-model="value3"
                            type="datetime"
                            placeholder="选择日期时间">
                        </el-date-picker>
                    </el-col>
                </el-row>
            </div>

            <div class="order clearfix">
                <el-row style="width: 100%">
                    <el-col :span="2" style="line-height: 38px">
                        实际时效
                    </el-col>
                    <el-col :span="6">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%;">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </div>

            <p style="text-indent: 40px">延误原因</p>
            <div class="order clearfix">
                <el-row style="width: 100%">
                    <el-col :span="24">
                        <el-input
                            type="textarea"
                            :rows="3"
                            placeholder="请输入反馈信息"
                            v-model="textarea">
                        </el-input>
                    </el-col>
                </el-row>
            </div>

            <h3 style="text-indent: 40px">上传图片（最多9张）</h3>
            <el-upload style="margin: 40px;"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :limit="9">
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible" size="tiny">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        
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
            value1: '',
            value2: '',
            value3: '',
            dialogImageUrl: '',
            dialogVisible: false,
            textarea:'',
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
            value: ''
        }
    },
    methods: {
        handleRemove(file, fileList) {
        console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
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
    display: inline-block;
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
    margin: 20px 40px 40px 40px;
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
        height: 38px;
        border:1px solid #DCDFE6;
        border-radius: 5px;
        display: flex;
        & input{
            height: 36px;
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
    margin: 13px 20px 38px 40px;
}
.site{
    width: 100%;
    line-height: 40px;
    margin-bottom: 40px;
}
/* .el-upload, .el-upload--picture-card{
    float: left;
    margin-right: 20px;
} */
</style>