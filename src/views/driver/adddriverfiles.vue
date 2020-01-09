<template>
    <div class="container">
        <!-- 搜索框 -->
        <div class="warpper" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;">
            <div class="order_title">
                <i></i>新增司机
            </div>
            <div class="order_search">
                <p class="title_little"><i></i>基础信息</p>
                <div class="int_model">
                    <div>
                        <i style="color: #EF5565">*</i>司机名称 &nbsp;&nbsp;<el-input style="width: 60%" placeholder="请输入"></el-input>
                    </div>
                    <div>
                        <i style="color: #EF5565">*</i>手机号码 &nbsp;&nbsp;<el-input style="width: 60%" placeholder="请输入"></el-input>
                    </div>
                    <div>
                        <i style="color: #EF5565">*</i>身份证号 &nbsp;&nbsp;<el-input style="width: 60%" placeholder="请输入"></el-input>
                    </div>
                </div>
                <div class="int_model mt30">
                    <div>
                        <i style="color: #EF5565">*</i>驾驶证号 &nbsp;&nbsp;<el-input style="width: 60%" placeholder="请输入"></el-input>
                    </div>
                    <div>
                        <i style="color: #EF5565">*</i>驾驶证有效期 &nbsp;
                        <el-date-picker style="width: 54%"
                            v-model="value1"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </div>
                    <div>
                        <i style="color: #EF5565">*</i>准驾车型 &nbsp;&nbsp;<el-input style="width: 60%" placeholder="请输入"></el-input>
                    </div>
                </div>
                <div class="int_model mt30">
                    <div>
                        <i style="color: #EF5565">*</i>从业资格证号 &nbsp;&nbsp;<el-input style="width: 54%" placeholder="请输入"></el-input>
                    </div>
                    <div>
                        <i style="color: #EF5565">*</i>从业资格证有效期 &nbsp;
                        <el-date-picker style="width: 48%"
                            v-model="value1"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </div>
                    <div></div>
                </div>
                <div class="int_model mt30">
                    <div> 
                        <i style="color: #EF5565">*</i>所在区域 &nbsp;
                        <el-select v-model="value" placeholder="请选择" style="width: 60%">
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div> 
                        <i style="color: #EF5565">*</i>详细地址 &nbsp;
                        <el-select v-model="value" placeholder="请选择" style="width: 60%">
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>

        <div class="warpper mt20" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;background: #fff;padding: 26px">
            <p class="title_little"><i></i>上传照片</p>
            <div class="upimg">
                <el-dialog :visible.sync="dialogVisible" size="tiny">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                <el-upload style="line-height: 36px;float: left;"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus" style="margin-top: 32px;"></i>
                    <p>身份证正面</p>
                </el-upload>
    
                <el-upload class="ml30" style="line-height: 36px;float: left;"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus" style="margin-top: 32px;"></i>
                    <p>身份证反面</p>
                </el-upload>
    
                <el-upload class="ml30" style="line-height: 36px;float: left;"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus" style="margin-top: 32px;"></i>
                    <p>从业资格证</p>
                </el-upload>
    
                <el-upload class="ml30" style="line-height: 36px;float: left;"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus" style="margin-top: 32px;"></i>
                    <p>驾驶证正本</p>
                </el-upload>
    
                <el-upload class="ml30" style="line-height: 36px;float: left;"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus" style="margin-top: 32px;"></i>
                    <p>驾驶证副本</p>
                </el-upload>
            </div>

            <div class="sub_warpper">
                <input type="button" value="取消">
                <input type="button" value="保存">
            </div>
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
<style lang="scss" scope>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }


.container{padding: 20px;background-color: rgb(240, 242, 245);position: relative;}
.order_search{padding:25px 30px 30px;background: #fff;}
.int_model{width: 100%;height: 40px;display: flex;
    & div{flex: 1;}
}
.mt30{margin-top: 30px;}
.mt20{margin-top: 20px;}
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