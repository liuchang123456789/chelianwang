<template>
    <div class="container">
        <!-- 搜索框 -->
        <div class="order_search">
            <div class="int_model">
                <div>
                    油卡卡号 &nbsp;&nbsp;<el-input style="width: 60%" v-model="number" placeholder="请输入编号"></el-input>
                </div>
                <div>
                    服务商名称 &nbsp;&nbsp;<el-input style="width: 57%" v-model="name" placeholder="请输入名称"></el-input>
                </div>
                <div>
                    车牌号 &nbsp;&nbsp;<el-input style="width: 63%" v-model="name" placeholder="请输入名称"></el-input>
                </div>
            </div>
            <div class="int_model mt36">
                <div>
                    油卡来源 &nbsp;
                    <el-select v-model="value" style="width: 60%" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    油卡状态 &nbsp;
                    <el-select v-model="value" style="width: 60%" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    订单编号 &nbsp;&nbsp;<el-input style="width: 60%" v-model="name" placeholder="请输入名称"></el-input>
                </div>
            </div>

            <div class="btn_warpper">
                <el-button type="primary">查询</el-button>
                <el-button>重置</el-button>
            </div>
        </div>

        <!-- 表格展示 -->
        <div class="tab_warpper">
            <div class="tab_title clearfix">
                <div class="left">
                    <i></i>车辆出入列表
                </div>

                <div class="right">
                    <el-button>新增+</el-button>
                    <el-button>批量新增+</el-button>
                    <el-button>导入消费记录</el-button>
                    <el-button style="background: #31D093;color: #fff;">导出+</el-button>
                </div>
            </div>

            <el-table :data="tableData" border style="margin:1%;width: 98%;text-align: center" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="36"></el-table-column>
                <el-table-column sortable fixed prop="serial" label="司机名称" width="150"></el-table-column>
                <el-table-column prop="customer" label="司机手机" width="150"></el-table-column>
                <el-table-column prop="roadname" label="站点名称" width="200"></el-table-column>
                <el-table-column prop="roadmap" label="到达时间" width="200"></el-table-column>
                <el-table-column prop="vehicle_num" label="离开时间" width="200"></el-table-column>
                <el-table-column prop="type_huo" label="停留时长(分钟)" width="200"></el-table-column>
                <el-table-column prop="information" label="司机出入状态" width="200"></el-table-column>
                <el-table-column prop="information" label="司机工作状态" width="200"></el-table-column>
                <el-table-column prop="ontime" label="出入次数" width="250"></el-table-column>
            </el-table>

            <div class="block" style="text-align: right;margin:29px 25px 0 0;padding-bottom: 56px">
                <el-pagination background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="100">
                </el-pagination>
            </div>
        </div>
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
            value: '',
            value1:'',
            tableData: [{
                serial: '201801001', //订单编号
                customer: '集团A', //客户名称
                roadname:'深圳-上海', //线路名称
                roadmap: '201801010', //线路编号
                vehicle_num: ' 粤BD8800', //车辆号码
                order_status: '', //订单状态
                type_huo: "普货", //货品类型
                information: "快运/20吨/130方", //货物信息
                ontime:2
            },{
                serial: '201801002', //订单编号
                customer: '集团A', //客户名称
                roadname:'深圳-上海', //线路名称
                roadmap: '201801010', //线路编号
                vehicle_num: ' 粤BD8800', //车辆号码
                order_status: '', //订单状态
                type_huo: "普货", //货品类型
                information: "快运/20吨/130方", //货物信息
                ontime:2
            },{
                serial: '201801003', //订单编号
                customer: '集团A', //客户名称
                roadname:'深圳-上海', //线路名称
                roadmap: '201801010', //线路编号
                vehicle_num: ' 粤BD8800', //车辆号码
                order_status: '', //订单状态
                type_huo: "普货", //货品类型
                information: "快运/20吨/130方", //货物信息
                ontime:2
            },{
                serial: '201801004', //订单编号
                customer: '集团A', //客户名称
                roadname:'深圳-上海', //线路名称
                roadmap: '201801010', //线路编号
                vehicle_num: ' 粤BD8800', //车辆号码
                order_status: '', //订单状态
                type_huo: "普货", //货品类型
                information: "快运/20吨/130方", //货物信息
                ontime:2
            }],
            currentPage: 1,//分页
            val:''
        }
    },
    methods: {
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }, //表格

        //分页
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        }, 
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
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
        display:block;
        background:rgba(58,156,255,1);
        float: left;
        margin:22px 10px 0 0;
    }
}
.el-table .cell{text-align: center}
</style>