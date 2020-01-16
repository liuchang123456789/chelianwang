<template>
  <div class="container">
    <!-- 搜索框 -->
    <div class="order_search">
      <div class="int_model mt36">
        <div>
          考勤月历 &nbsp;
          <el-date-picker v-model="value1" style="width: 70%" type="date" placeholder="选择日期" />
        </div>
        <div>
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
          <el-button>导出EXCEL</el-button>
        </div>
        <div />
      </div>
    </div>

    <!-- 表格展示 -->
    <div class="tab_warpper">
      <div class="tab_title clearfix">
        <div class="left">
          <i />考勤列表
        </div>
      </div>
      <el-table style="margin: 0 1.5%;width: 97%;text-align:center" :data="tableData3" />
      <el-table-column fixed prop="date" label="姓名" width="100" />
      <el-table-column label="1号">
        <el-table-column prop="shang" label="上午" width="100" />
        <el-table-column prop="xia" label="下午" width="100" />
      </el-table-column>
      <el-table-column label="2号">
        <el-table-column prop="shang" label="上午" width="100" />
        <el-table-column prop="xia" label="下午" width="100" />
      </el-table-column>
      <el-table-column label="3号">
        <el-table-column prop="shang" label="上午" width="100" />
        <el-table-column prop="xia" label="下午" width="100" />
      </el-table-column>
      <el-table-column label="4号">
        <el-table-column prop="shang" label="上午" width="100" />
        <el-table-column prop="xia" label="下午" width="100" />
      </el-table-column>
      <el-table-column label="5号">
        <el-table-column prop="shang" label="上午" width="100" />
        <el-table-column prop="xia" label="下午" width="100" />
      </el-table-column>
      <el-table-column label="6号">
        <el-table-column prop="shang" label="上午" width="100" />
        <el-table-column prop="xia" label="下午" width="100" />
      </el-table-column>
      <el-table-column label="7号">
        <el-table-column prop="shang" label="上午" width="100" />
        <el-table-column prop="xia" label="下午" width="100" />
      </el-table-column>
      <el-table-column label="8号">
        <el-table-column prop="shang" label="上午" width="100" />
        <el-table-column prop="xia" label="下午" width="100" />
      </el-table-column>
      </el-table>

      <div class="block" style="text-align: right;margin:29px 25px 0 0;padding-bottom: 56px">
        <el-pagination
          background
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
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
      value1: '',
      tableData3: [{
        date: '李浩',
        shang: '9:30',
        xia: '18:30'
      }],
      currentPage: 1, // 分页
      val: ''
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    }, // 表格

    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="scss" scope>
	.container {
		padding: 20px;
		background-color: rgb(240, 242, 245);
		position: relative;
	}

	.order_search {
		padding: 46px;
		background: #fff;
		box-shadow: 0px 2px 5px rgba(18, 31, 62, 0.16);
		border-radius: 5px;
	}

	.int_model {
		width: 100%;
		height: 40px;
		display: flex;

		& div {
			flex: 1;
		}
	}

	.mt36 {
		margin-top: 36px;
	}

	.el-range-editor--medium .el-range__icon {
		position: absolute !important;
		right: 5px !important;
	}

	.el-range-editor--medium .el-range-separator {
		width: 20px !important;
	}

	.btn_warpper {
		width: 100%;
		height: auto;
		margin-top: 45px;

		& button:not(:first-child) {
			margin-left: 38px
		}
	}

	.tab_warpper {
		width: 100%;
		height: auto;
		background: #fff;
		box-shadow: 0px 2px 5px rgba(18, 31, 62, 0.16);
		border-radius: 5px;
		margin-top: 20px;
	}

	.tab_title {
		height: 70px;
		line-height: 70px;
		padding: 0 30px;
		border-bottom: 1px solid #F1F1F1;

		& .left i {
			width: 4px;
			height: 25px;
			display: inline-block;
			background: rgba(58, 156, 255, 1);
			float: left;
			margin: 22px 10px 0 0;
		}
	}

	.el-table .cell {
		text-align: center
	}
</style>
