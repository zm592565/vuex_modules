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

      // 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值
       var sliceNumber = 0.01;

      // 自定义 other 的图形，增加两条线
      G2.Shape.registerShape('interval', 'sliceShape', {
        draw: function draw(cfg, container) {
          var points = cfg.points;
          var path = [];
          path.push(['M', points[0].x, points[0].y]);
          path.push(['L', points[1].x, points[1].y - sliceNumber]);
          path.push(['L', points[2].x, points[2].y - sliceNumber]);
          path.push(['L', points[3].x, points[3].y]);
          path.push('Z');
          path = this.parsePath(path);
          return container.addShape('path', {
            attrs: {
              fill: cfg.color,
              path: path
            }
          });
        }
      });

      this.chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: 300,
        padding: [40, 100, 40, 0]
      });
      this.chart.source(this.chartData);

      this.chart.legend({
        position: 'right-center',
      });

      this.chart.coord('theta', {
        innerRadius: 0.75
      });
      this.chart.tooltip({
        showTitle: false
      });
      this.chart.intervalStack().position('value').color('type').shape('sliceShape')
      this.chart.render();
    }
  }
}
</script>

<style lang="less" scoped>
</style>
