<template>
    <div class="container">
        <!-- 搜索框 -->
        <div class="warpper" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;">
            <div class="order_title">
                <i></i>审核架构
            </div>
        </div>
        <el-row :gutter="30" class="mt5">
            <el-col :span="8">
                <div style="padding:28px 30px;background:#fff;border-radius: 3px;min-height: 630px;">
                    <div class="exam_structure clearfix">
                        <el-input style="width:80%;float:left"
                            placeholder="输入关键字进行过滤"
                            v-model="filterText">
                        </el-input>
                        <el-button style="width:20%;float:left;height: 35px;" type="primary" size="small" class="add_new_question" @click="add_new_question"><i></i>添加父节点</el-button>
                    </div>
                    <div class="question_info_lists mt20">
                        <el-tree ref="tree" :key="tree_key" :data="treeData" node-key="id" :render-content="renderContent"
                            :expand-on-click-node="false" :default-expanded-keys="defaultExpand" show-checkbox
                            :filter-node-method="filterNode">
                        </el-tree>
                        <el-row class="add_question" v-show="add_question_flag">
                            <el-col :span="16">
                                <el-input v-model="new_question_name" placeholder="请输入大题名称"></el-input>
                            </el-col>
                            <el-col :span="8">
                                <el-button style="height:35px;" size="mini" class="btn_sure" @click.stop="add_question_sure">确定</el-button>
                                <el-button style="height:35px;" size="mini" class="btn_cancel" @click.stop="add_question_cancel">取消</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple" style="padding:30px;min-height: 630px;">
                    <el-button type="primary">添加审核人</el-button>
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: auto;margin: 40px;">
                    <el-table-column
                        prop="department"
                        label="组织名称"
                        style="width:12%">
                    </el-table-column>
                    <el-table-column
                        prop="identification"
                        label="登录账号"
                        style="width:12%">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="用户姓名"
                        style="width:12%">
                    </el-table-column>
                    <el-table-column
                        prop="position"
                        label="用户职位"
                        style="width:12%">
                    </el-table-column>
                    <el-table-column
                        prop="state"
                        label="状态"
                        style="width:12%">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="创建时间"
                        style="width:15.5%">
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        style="width:12%">
                        <template slot-scope="scope">
                            <el-button
                            @click.native.prevent="deleteRow(scope.$index, tableData)"
                            type="text"
                            size="small">
                            删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <el-pagination style="text-align: right;"
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tableData: [{
                department: '运营部',
                identification: '13516465251',
                name: '艾伦',
                position:'调度员',
                state:'停用',
                date: '2016-09-21  08:50:08'
            },{
                department: '运营部',
                identification: '13516465251',
                name: '艾伦',
                position:'调度员',
                state:'停用',
                date: '2016-09-21  08:50:08'
            },{
                department: '运营部',
                identification: '13516465251',
                name: '艾伦',
                position:'调度员',
                state:'停用',
                date: '2016-09-21  08:50:08'
            }],
            currentPage: 1,
            filterText: '',
            treeData: [{
            id: 1,
            label: '一级 1',
            isEdit: false,
            children: [{
                id: 4,
                label: '二级 1-1',
                isEdit: false
            },
            {
                id: 12,
                label: '二级 1-2',
                isEdit: false,
                children: []
            },
            {
                id: 13,
                label: '二级 1-3',
                isEdit: false,
                children: []
            }]
            },
          {
            id: 2,
            label: '一级 2',
            isEdit: false,
            children: [{id: 5, label: '二级 2-1', isEdit: false, children: []}, {
              id: 6,
              label: '二级 2-2',
              isEdit: false,
              children: []
            }]
          }],
            add_question_flag: false,
            new_question_name: '',
            tree_key: 0,
            defaultExpand: []
        }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },

        //letree
        filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
// 添加新大题
 
      add_new_question() {
        this.add_question_flag = true
      },
      add_question_sure() {   //确定
        const nodeObj = {id: '', label: this.new_question_name, isEdit: false, children: []}
        this.treeData.push(nodeObj)
        this.add_question_flag = false
      },

      add_question_cancel() {    //取消
        this.add_question_flag = false
        this.new_question_name = ''
      },
      //增加
      append(store, node, data) {
        var maxid = '20'
        //新增数据
        const nodeapp = {id: ++maxid, label: '增加节点', isEdit: false, children: []}
        data.children.push(nodeapp)
        if (!node.expanded) {
          node.expanded = true
        }
        const parent = node.parent
        const children =  parent.data
        const cIndex = children.findIndex(d => d.id === data.id)
        const tempChildrenNodex2 = children[cIndex]  //拿到被添加的上一级
        console.log(tempChildrenNodex2.children[cIndex - 1])
      },
// 修改
      nodeEdit(ev, store, data) {
        data.isEdit = true
        this.$nextTick(() => {
          const $input = ev.target.parentNode.parentNode.querySelector('input') || ev.target.parentElement.parentElement.querySelector('input')
          !$input ? '' : $input.focus()
        })
      },
 
      edit_sure(ev, data) {
        const $input = ev.target.parentNode.parentNode.querySelector('input') || ev.target.parentElement.parentElement.querySelector('input')
        if (!$input) {
          return false
        } else {
          data.label = $input.value
          data.isEdit = false
        }
      },
// 节点删除
      nodeDelete(node, data) {
        const parent = node.parent
        const children = parent.data.children || parent.data
        const index = children.findIndex(d => d.id === data.id)
        children.splice(index, 1)
      },

      showOrEdit(data) {
        if (data.isEdit) {
          return <input type="text" value={data.label} on-blur={ev => this.edit_sure(ev, data)}/>
        } else {
          return <span className="node_labe">{data.label}</span>
        }
      },
// 结构树操作group node,
      renderContent(h, {node, data, store}) {
        return (
            <span>
                <span>
                    {this.showOrEdit(data)}
                </span>
                <div class="tree_node_op" style="float: right;margin-left:26px;">
                    <svg-icon icon-class="edit" class="ml10" style="color:#FE824C;font-size: 20px;" on-click={(ev) => this.nodeEdit(ev, store, data)}/>
                    <i class="ml10" class="icontree" style="color:#F95A54;border:1px solid #F95A54;" on-click={() => this.nodeDelete(node, data)}>-</i>
                    <i class="ml10" class="icontree" style="color:#08C173;border:1px solid #08C173;" on-click={() => this.append(store, node, data)}>+</i>
                </div>
            </span>
            )
        }
    }
}
// <i class="el-icon-upload2" on-click={() => this.nodeUp(node, data)}></i>
// <i class="el-icon-download" on-click={() => this.nodeDown(store, node, data)}></i>
</script>
<style lang="scss" scoped>
.el-table__row--striped{background: #E4F1FF!important}
.mt5{margin-top: 5px;}
.mt20{margin-top: 20px;}
.el-row{
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {border-radius: 4px;}
.bg-purple-dark {background: #ffffff;}
.bg-purple {background: #ffffff;}
.bg-purple-light {background: #e5e9f2;}
.grid-content {border-radius: 4px;min-height: 36px;}
.row-bg {padding: 10px 0;background-color: #ffffff;}
.container{padding: 20px;background-color: rgb(240, 242, 245);position: relative;}
.order_search{padding:25px 30px 30px;background: #fff;}
.int_model{width: 100%;height: 40px;display: flex;
    & div{flex: 1;}
}
.mt10{margin-top: 10px;}
.mt30{margin-top: 30px;}
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
.upimg{width: 100%;height: 150px;}
.ml30{margin-left: 30px;}
</style>
<style>
.icontree{border:1px solid #F95A54;width:21px;height:21px;border-radius:50%;text-align:center;line-height:17px;display:inline-block;margin-left: 10px;}
.ml10{margin-left: 10px;}
</style>