<template>
    <div class="container">
        <!-- 搜索框 -->
        <div class="order_search">
            <div class="int_model">
                <div>
                    ECT卡号 &nbsp;&nbsp;<el-input style="width: 50%" v-model="number" placeholder="请输入"></el-input>
                </div>
                <div>
                    服务商 &nbsp;
                    <el-select v-model="value" style="width: 52%" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="int_model mt36">
                <div>
                    ECT类型 &nbsp;
                    <el-select v-model="value" style="width: 50%" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    卡状态 &nbsp;
                    <el-select v-model="value" style="width: 52%" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="int_model mt36">
                <div>
                    绑定车辆 &nbsp;
                    <el-select v-model="value" style="width: 50%" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    充值金额 &nbsp;&nbsp;<el-input style="width: 50%" v-model="number" placeholder="请输入"></el-input>
                </div>
            </div>
        </div>
        <div class="sub_warpper"><input type="button" value="取消"> <input type="button" value="保存"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checked:true,
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }],
            value: '',
            value1:''
        }
    },
    mounted(){

    },
    methods: {
        
    },
}
</script>
<style lang="scss" scope>
.container{padding: 20px;background-color: rgb(240, 242, 245);position: relative;}
.order_search{padding: 46px;background: #fff;box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;}
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
.tab_warpper{width: 100%;height: auto;background: #fff;box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;margin-top: 20px;}
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
.sub_warpper {width: 380px;height: 50px;margin: 60px auto 137px auto;}
.sub_warpper input:first-child {width: 110px;height: 50px;background: #ddd;border-radius: 5px;border: none;float: left;}
.sub_warpper input:last-child {width: 110px;height: 50px;background: #3a9cff;border-radius: 5px;color: #fff;border: none;float: right;}
</style>