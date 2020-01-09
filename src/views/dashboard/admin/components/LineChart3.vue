<template>
    <div class="chart3" style="height: 260px;"></div>
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
    this.chart3 = echarts.init(this.$el);
    this.setOptions();
    },
    setOptions() {
        this.chart3.setOption({
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
            // 提示框
            tooltip: {
                trigger: 'axis'
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
                data: [165, 250, 480, 532, 223, 260, 1000,790,666,700,485,310],
                type: 'line',
                smooth:true,
                symbol:'none',
                areaStyle: {
                    color: {
                        type: 'dashed',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#DCF4FF' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#E9EDFD' // 100% 处的颜色
                        }],
                        global: false ,// 缺省为 false
                    }
                },
                color:['#50C8FD']
            }]
        })
    }
}
}
</script>

<style lang="scss" scoped>

</style>