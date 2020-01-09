<template>
	<div class="chart2" style="height: 350px;"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    
  },
  data() {
    return {
		
    }
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      this.chart2 = echarts.init(this.$el);
      this.setOptions();
    },
    setOptions() {
		this.chart2.setOption({
			tooltip: {
				trigger: 'axis'
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '8%',
				top:'6%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				data: ['0','1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
			},
			yAxis: {
				type: 'value',
				splitLine:{
					lineStyle:{
						type:'dashed'
					}
			　　 },
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				}
			},
			series: [
				{
					name:'在途',
					type:'line',
					smooth:true,
					symbol:'none',
					stack: '总量',
					color:"#44A6FF",
					data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101]
				},
				{
					name:'在台',
					type:'line',
					smooth:true,
					symbol:'none',
					stack: '总量',
					color:"#31D093",
					data:[220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191]
				},
				{
					name:'检修',
					type:'line',
					smooth:true,
					symbol:'none',
					stack: '总量',
					color:"#FE5E5E",
					data:[150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201]
				}
			]
		})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>