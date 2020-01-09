<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 6000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['01', '02', '03', '04', '05', '06', '07'],
        }],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine :{    //网格线
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                },
                show:true //隐藏或显示
            }
          },
        {
          type: 'value',
          name: '百分比',
          min: 0,
          max: 100,
          interval: 25,
          axisLabel: {
            formatter: '{value} %'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine :{    //网格线
            lineStyle:{
                type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
            },
            show:false //隐藏或显示
          },
        }
			
		],
        series: [
					{
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
		      color:'#79D195',
          barWidth: '30%',
          data: [79, 52, 200, 334, 390, 330, 220],
          //animationDuration
        }, {
          name: 'pageB',
          type: 'bar',
          stack: 'vistors',
		      color:'#44A7FE',
          barWidth: '30%',
          data: [80, 52, 200, 334, 390, 330, 220],
          //animationDuration
        }, {
          name: 'pageC',
          type: 'bar',
          stack: 'vistors',
		      color:'#FFAB15',
          barWidth: '30%',
          data: [30, 52, 200, 334, 390, 330, 220],
          //animationDuration
        },
        {
          name:'百分比',
          type:'line',
          yAxisIndex: 1,
          data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
          color:['#FE5E5E']
        }
		]
      })
    }
  }
}
</script>
