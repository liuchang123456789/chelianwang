<template>
	<div class="chart3" style="height: 350px;"></div>
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
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series: [
				{
					name:'访问来源',
					type:'pie',
					radius : ['50%', '70%'],
					center: ['50%', '50%'],
					color:['#44A6FF','#FFAB15','#31D093','#FE5E5E'],
					data:[
						{value:544, name:'双驾'},
						{value:344, name:'外请'},
						{value:444, name:'接驳'},
						{value:144, name:'单驾'}
					]
				}
			]
		})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>