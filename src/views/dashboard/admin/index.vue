<template>
  <div class="dashboard-editor-container">
	<a class="pdfa" target="view_window" href="">飞腾V23.2上线公告.pdf 2019-8-13 &gt;&gt;</a>
    <el-row class="harts1">
		<div class="page1_chart1">
			<ul class="page1_title">
				<li class="active">预估收入</li>
				<li>订单量</li>
			</ul>
			
			<div class="page1_title2">
				<el-date-picker
					v-model="value1"
					type="daterange"
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期" style="float: right;width: 300px;height: 32px;">
				</el-date-picker>
				<ul class="list_btn" style="float: right;">
					<li class="active">今日</li>
					<li>本周</li>
					<li>本月</li>
					<li>全年</li>
				</ul>
			</div>
			<div class="pagechart1">
				<h2>预估收入趋势</h2>
				<p>单位/万</p>
				<line-chart :chart-data="lineChartData"/>
			</div>
			<div class="pagemain">
				<h2>预估收入排名</h2>
				<ul>
					<li><i class="orange">1</i>深圳市伏地魔物流有限公司 <span class="right">154612</span></li>
					<li><i class="orange">2</i>深圳市伏地魔物流有限公司 <span class="right">154612</span></li>
					<li><i class="orange">3</i>深圳市伏地魔物流有限公司 <span class="right">154612</span></li>
					<li><i class="grey">4</i>深圳市伏地魔物流有限公司 <span class="right">154612</span></li>
					<li><i class="grey">5</i>深圳市伏地魔物流有限公司 <span class="right">154612</span></li>
					<li><i class="grey">6</i>深圳市伏地魔物流有限公司 <span class="right">154612</span></li>
					<li><i class="grey">7</i>深圳市伏地魔物流有限公司 <span class="right">154612</span></li>
				</ul>
			</div>
		</div>
    </el-row>
	
	<el-row :gutter="30">
		<el-col :xs="24" :sm="24" :lg="16">
			<div class="chart-wrapper" style="padding-bottom: 30px;">
				<div class="titlefont">
					<i></i>车辆利用率
					<img src="../../../assets/images/wenhao.png" alt="">
				</div>
				<div class="msg_box">
					<div>
						<p>车辆总数</p>
						<h2>234</h2>
						<i></i>
					</div>
					<div>
						<p>在途车辆</p>
						<h2>134</h2>
						<i></i>
					</div>
					<div>
						<p>在台车辆</p>
						<h2>99</h2>
						<i></i>
					</div>
					<div>
						<p>检修车辆</p>
						<h2>4</h2>
						<i></i>
					</div>
					<div>
						<p>车辆利用率</p>
						<h2>57.26%</h2>
					</div>
				</div>
				<div class="msg_box2 clearfix">
					<div>
						<i></i>检修
					</div>
					<div>
						<i></i>在台
					</div>
					<div>
						<i></i>在途
					</div>
				</div>
				<line-chart2/>
			</div>
		</el-col>
		
		<el-col :xs="24" :sm="24" :lg="8">
			<div class="chart-wrapper" style="position: relative;height: 550px;display: inline-block;width:100%;box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:10px;">
				<div class="titlefont" style="font-weight: 500;">
					驾驶模式占比
					<img src="../../../assets/images/wenhao.png" alt="">
				</div>
				<pir-chart/>
				<div class="supernatant">
					<p>订单数</p>
					<p>123,224</p>
				</div>
				<div class="color_model">
					<div><i class="skyblue"></i> 双驾 544</div>
					<div><i class="orangebg"></i> 外请 344</div>
				</div>
				<div class="color_model">
					<div><i class="green"></i> 接驳 444</div>
					<div><i class="red"></i> 单驾 144</div>
				</div>
			</div>
		</el-col>
	</el-row>
	
    <el-row :gutter="32">
		<el-col :xs="24" :sm="24" :lg="14">
			<div class="chart-wrapper" style="height: 540px">
				<div class="titlefont" style="font-weight: 600;">
					<i></i>
					时效延误率
					<img src="../../../assets/images/wenhao.png" alt="">
				</div>
				<div class="clearfix">
					<ul class="list_btn" style="float: left;margin: 16px;">
						<li class="active">今日</li>
						<li>本周</li>
						<li>本月</li>
						<li>全年</li>
					</ul>
					<el-date-picker
						v-model="value1"
						type="daterange"
						range-separator="至"
						start-placeholder="开始日期"
						end-placeholder="结束日期" style="width: 250px;height: 32px;margin: 20px;float: left;">
					</el-date-picker>
				</div>
				<div class="clearfix yantip">
					<div class="left" style="font-size:20px;font-weight: 600;color: #828282;">
						时效延误率 <i style="color:#FE5E5E">30.65%</i>
						平均延误时长 <i style="color:#FE5E5E">90分钟</i>
					</div>
					<div class="right" style="font-size:18px;">
						<i></i> &gt;5h
						<i></i> 1~5h
						<i></i> &lt;1h
					</div>
				</div>
				<bar-chart />
			</div>
		</el-col>
		<el-col :xs="24" :sm="24" :lg="10">
			<div class="chart-wrapper" style="box-shadow:0px 2px 5px rgba(18,31,62,0.16);border-radius:5px;">
				<div class="titlefont" style="font-weight: 500;">
					司机利用率
					<img src="../../../assets/images/wenhao.png" alt="">
				</div>
				<div class="percentage">
					<cbai></cbai>
				</div>
			</div>
		</el-col>
    </el-row>
	
	<el-row :gutter="32">
		<el-col :xs="24" :sm="24" :lg="24">
			<div class="chart-wrapper" style="border-radius:5px;box-shadow:0px 2px 5px rgba(18,31,62,0.16);">
				<div class="titlefont" style="font-weight: 600;">
					<i></i>
					里程报表
					<img src="../../../assets/images/wenhao.png" alt="">
				</div>
				<div class="mileage">
					<el-row :gutter="30">
						<el-col :xs="24" :sm="24" :lg="6">
							<div class="left" style="width: 50%">
								<div class="indadd">
									<h3>累计里程总数</h3>
									<p style="color: #1890FF">4320</p>
								</div>
								<div class="indadd">
									<h3>本周里程总数</h3>
									<p style="color: #1890FF">432</p>
								</div>
							</div>
							<div class="left" style="width: 50%">
								<div class="inddata">
									周同比 <i class="san"></i><span style="margin-left: 20px">12%</span>
								</div>
								<div class="inddata">
									周环比 <i class="san2"></i><span style="margin-left: 20px">12%</span>
								</div>
							</div>
						</el-col>
						<el-col :xs="24" :sm="24" :lg="18">
							<div class="data_title">
								近一周里程数
							</div>
							<div class="right">
								<ul class="list_btn" style="float: left;margin: 20px;">
									<li class="active">今日</li>
									<li>本周</li>
									<li>本月</li>
									<li>全年</li>
								</ul>
								<el-date-picker
									v-model="value1"
									type="daterange"
									range-separator="至"
									start-placeholder="开始日期"
									end-placeholder="结束日期" style="width: 250px;height: 32px;margin: 20px;float: left;">
								</el-date-picker>
							</div>
							<line-chart3></line-chart3>
						</el-col>
					</el-row>
				</div>
			</div>
		</el-col>
	</el-row>
  </div>
</template>

<script>
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import LineChart2 from './components/LineChart2'
import PirChart from './components/PirChart'
import LineChart3 from './components/LineChart3'
import Cbai from './components/Cbai'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    // GithubCorner,
    // PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
	LineChart2,
	PirChart,
	LineChart3,
	Cbai
  },
  data() {
    return {
		lineChartData: lineChartData.newVisitis,
		value1: '' 
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style>
.el-range-editor--medium .el-range-separator{width: 20px!important;}
.el-range-editor--medium .el-range__icon{position: absolute!important;right: 5px!important;}
</style>

<style lang="scss" scoped>
.supernatant{
	width: 100px;
    height: 55px;
    text-align: center;
    position: absolute;
    top: 215px;
    left: 50%;
    margin-left: -50px;
    z-index: 1000;
	z-index: 1000;
	& p:nth-child(1){
		font-size:18px;
		line-height:24px;
		color:rgba(130,130,130,1);
	}
	& p:nth-child(2){
		font-size:20px;
		line-height:34px;
		color:rgba(15,24,46,1);
	}
}
.pdfa{color:#F95A54;padding-left: 15px;}
.dashboard-editor-container {
  padding: 20px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 0px;
    margin-bottom: 16px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
.page1_chart1{
	width: 100%;
	height: 70px;
	line-height: 70px;
	padding: 0 30px;
	border-bottom: 1px solid #F1F1F1;
}
.page1_title{
	display: inline-block;
}
.page1_title li{
	float: left;
	height: 70px;
	line-height: 70px;
	cursor: pointer;
}
.page1_title li:not(:first-child){
	margin-left: 90px;
}
.page1_title .active{
	color: #55A8FD;
	border-bottom: 3px solid #55A8FD;
}
.list_btn{
	height: 32px;
}
.list_btn li{
	width:56px;
	float: left;
	height: 32px;
	line-height: 32px;
	text-align: center;
	cursor: pointer;
}
.list_btn li:not(:last-child){
	margin-right: 10px;
}
.list_btn .active{height:32px;background:rgba(23,143,254,1);border-radius:5px;color: #fff;}
.page1_title2{
	display: block;
	float: right;
	margin: 20px 0px;
}
.el-range-separator{
	width: 20px;
	line-height: 25px;
}
.el-icon-date{
	line-height: 26px;
}
.harts1{
	width: 100%;
	height: 540px;
	background:#fff;
	padding:0 16px 16px 16px;
	margin-bottom:16px;
	box-shadow:0px 2px 5px rgba(18,31,62,0.16);
	border-radius:5px;
	margin-top: 20px;
}
.pagechart1{
	width: 75%;
	height: auto;
	display: block;
	float: left;
}
.pagechart1 h2{
	height: 20px;
	line-height: 0;
	font-weight: 600;
	font-size:20px;
}
.pagechart1 p{
	font-size:14px;
	line-height:19px;
	height: 30px;
	color:rgba(130,130,130,1);
	text-indent: 28px;
}
.pagemain{
	width: 25%;
	height: 400px;
	float: left;
	font-size: 16px;
}
.pagemain ul li{
	line-height: 50px;
	font-size: 14px;
	color: #828282;
}
.pagemain ul li i{width:24px;height: 24px;line-height: 24px;border-radius: 50%;display: inline-block;text-align: center;color: #fff;margin-right: 8px;}
.pagemain h2{
	font-size:20px;
	font-weight: 600;
	line-height: 0;
	height: 44px;
}
.orange{background: orange;}
.grey{background: #C1C5D1;}
.titlefont{height: 72px;line-height: 72px;padding: 0 30px;border-bottom: 1px solid #F1F1F1;font-size:20px;font-weight:bold;}
.titlefont i{width:4px;height:25px;background:rgba(85,168,253,1);display: block;float: left;margin: 24px 8px 0 0;}
.titlefont img{float: right;margin: 22px 0px;}
.msg_box{width: 88%;height: 56px;display: flex;margin: 22px 6%}
.msg_box div{flex: 1;text-align: center;line-height: 26px;height: 45px;}
.msg_box div p{color: #828282;font-size:18px}
.msg_box div h2{font-weight: 600;font-size:18px;}
.msg_box div i{width: 0px;height: 32px;border-right: 1px solid #f1f1f1;float: right;margin: -40px 0;}
.msg_box2{height: 25px;float: right;width: 100%;}
.msg_box2 div{float: right;margin-right: 40px;}
.msg_box2 div i{margin-right: 5px;}
.msg_box2 div:nth-child(3) i{width: 14px;height: 14px;display: inline-block;border-radius: 50%;background: #44A6FF;}
.msg_box2 div:nth-child(2) i{width: 14px;height: 14px;display: inline-block;border-radius: 50%;background: #31D093;}
.msg_box2 div:nth-child(1) i{width: 14px;height: 14px;display: inline-block;border-radius: 50%;background: #FE5E5E;}
.color_model{width: 80%;height: auto;margin: 0 auto;display: flex;margin-bottom: 28px;}
.color_model div{flex: 1;text-align: center;}
.skyblue{width:14px;height:14px;background:rgba(68,166,255,1);border-radius:50%;display: inline-block;}
.orangebg{width:14px;height:14px;background:#FFAB15;border-radius:50%;display: inline-block;}
.green{width:14px;height:14px;background:#31D093;border-radius:50%;display: inline-block;}
.red{width:14px;height:14px;background:#FE5E5E;border-radius:50%;display: inline-block;}
.yantip{padding: 0 20px;margin:6px 0 20px 0;}
.yantip .right i:nth-child(1){width: 14px;height: 14px;display: inline-block;border-radius: 50%;background: #79D195;}
.yantip .right i:nth-child(2){width: 14px;height: 14px;display: inline-block;border-radius: 50%;background: #44A7FE;}
.yantip .right i:nth-child(3){width: 14px;height: 14px;display: inline-block;border-radius: 50%;background: #FFAB15;}
.percentage{height: 470px;}
.mileage{width: 100%;height: 390px;}
.san{border-left: 8px solid transparent;border-right: 8px solid transparent;border-bottom: 8px solid #79D195}
.san2{border-left: 8px solid transparent;border-right: 8px solid transparent;border-top: 8px solid #FE5E5E}
.indadd{text-align: center;margin-top: 65px}
.indadd h3{font-size:20px;font-weight: 600;color: #505050;line-height: 30px}
.indadd p{font-size:20px;font-weight: 600;color: #1890FF;line-height: 30px}
.inddata{text-align: center;margin-top: 105px;position: relative;}
.inddata i{position: absolute;top: 50%;margin-top: -4px;}
.data_title{
	display: inline-block;height:72px;line-height: 72px;font-weight: 600;font-size: 20px;
}
</style>
