<template>
  <div :id="id">
  </div>
</template>

<script>
export default {
  data(){
    return{
      chart: null,
    }
  },
  props: {
    chartData: {
      type: Array,
      default: function (){
        return {
          data: []
        }
      }
    },
    id: {
      type: String
    }
  },
  watch:{
    charData(curVal,oldVal){
      this.drawChart()
    }
  },
  mounted(){
    this.drawChart()
  },
  methods: {
    //绘制图形
    drawChart(){
      this.chart && this.chart.destory();
      this.chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: 300,
        padding: [20, 20, 60, 60]
      });
      this.chart.source(this.chartData, {
        month: {
          range: [0, 1]
        }
      });
      this.chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      });
      this.chart.axis('temperature', {
        label: {
          formatter: function formatter(val) {
            return val + '°C';
          }
        }
      });
      this.chart.line().position('month*temperature').color('city');
      this.chart.point().position('month*temperature').color('city').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 2
      });
      this.chart.render();
    }
  }
}
</script>

<style lang="less" scoped>
</style>
