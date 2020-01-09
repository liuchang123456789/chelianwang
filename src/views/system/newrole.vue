<template>
    <div class="container">
        <!-- 搜索框 -->
        <div class="warpper" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;">
            <div class="order_title">
                <i></i>新增角色
            </div>
            <div class="order_search">
                <div class="int_model">
                    <div> 
                        <i style="color: #EF5565">*</i>角色名称 &nbsp;&nbsp;<el-input style="width: 60%" placeholder="请输入"></el-input>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="warpper mt10" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;">
            <div class="order_title">
                <i></i>功能权限
            </div>
            <div class="chebox">
                <el-checkbox v-model="checked">首页</el-checkbox>
                <ul class="cheer">
                    <li><el-checkbox v-model="checked">监控台</el-checkbox></li>
                    <li><el-checkbox v-model="checked">监控大屏</el-checkbox></li>
                </ul>
            </div>
        </div>
        <div class="sub_warpper">
            <input type="button" value="取消">
            <input type="button" value="确认">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checked: true,
            options: [{
                value: '选项1',
                label: '1'
            }, {
                value: '选项2',
                label: '2'
            }],
            value: '',
            value1:''
        }
    },
    methods: {
        handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    }
}
</script>
<style lang="scss" scoped>
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
.chebox{height: auto;padding: 20px;background: #fff;}
.cheer{
    padding-left: 20px;
    & li{margin-top: 10px;}
}
</style>