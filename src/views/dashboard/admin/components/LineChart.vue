<template>
  <div class="chart" style="height: 350px;"></div>
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
      this.chart = echarts.init(this.$el);
      this.setOptions();
    },
    setOptions() {
		this.chart.setOption({
			grid: {
				left:60,
				top:30,
				right:50,
				bottom:30
			},
			xAxis:{
				type: 'category',
				boundaryGap: false,
				data: ['10月', '11月', '12月', '01月', '02月', '3月', '4月','5月','6月','7月','8月','9月']
			},
			yAxis: {
				type : 'value',
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

			series: [{
				data: [0, 250, 480, 532, 223, 260, 1000,790,666,700,485,0],
				type: 'line',
				itemStyle:{
					normal:{
						label:{
							show:true,
							color:'#fff',
							// backgroundColor: '#50C3FD',
							backgroundColor: {
								image: 'http://q.gslchain.com/bgspan.png'
							},
							padding:[5, 10, 3, 10],
						}
					}
				},
        		smooth: true,
				areaStyle: {
					color: {
						type: 'dashed',
						x: 1,
						y: 0,
						x2: 0,
						y2: 0,
						colorStops: [{
							offset: 0, color: '#50C3FD' // 0% 处的颜色
						},{
							offset: 1, color: '#5295FE' // 100% 处的颜色
						}],
						global: false ,// 缺省为 false
					}
				},
				color:['#50C3FD']
			}]
		})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>