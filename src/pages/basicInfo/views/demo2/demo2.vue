<template>
  <Layout>
    <!-- header -->
    <template slot="breadcrumb">客服 > 工单基础配置 > 工单分配配置</template>
    <template slot="title">网点取件/派件监控</template>
    <!-- module -->
    <!-- 全国派送情况 -->
    <Module>
      <!-- module-header -->
      <span class="text">全国派送情况</span>
      <span style="margin-right: 16px">到目的中心日期</span>
        <DatePicker type="date" placeholder="选择日期"></DatePicker >
      <template slot="tooltip">
        <RadioGroup style="margin-right: 16px;">
            <Radio label="淘系"></Radio>
            <Radio label="全网"></Radio>
            <Radio label="橙诺达2.0"></Radio>
        </RadioGroup>
      </template>
      <!-- module-content -->
      <template slot="content">
        <Row :gutter="16">
          <Col span="3" class="type_total">
            <span>应派送量</span>
            <h2>34,446</h2>
          </Col>
          <Col span="3" class="type_total">
            <span>已取件量</span>
            <h2>12,446</h2>
          </Col>
          <Col span="3" class="type_total">
            <span>已派送量</span>
            <h2>2,446</h2>
          </Col>
          <Col span="3" class="type_total">
            <span>已签收量</span>
            <h2>446</h2>
          </Col>
          <Col span="3" class="type_total">
            <span>自提柜签收量</span>
            <h2>100</h2>
          </Col>
          <Col span="3" class="type_total">
            <span>驿站签收量</span>
            <h2>200</h2>
          </Col>
          <Col span="3" class="type_total">
            <span>送货上门签收量</span>
            <h2>140</h2>
          </Col>
          <Col span="3" class="type_total">
            <span>未签收量</span>
            <h2>6</h2>
          </Col>
        </Row>
        <Row :gutter="16">
          <Col span="3" class="type_total">
            <span>总体派送进度</span>
            <h2>64%</h2>
          </Col>
          <Col span="3" class="type_total">
            <span>取件进度</span>
            <h2>64%</h2>
          </Col>
          <Col span="3" class="type_total">
            <span>派送进度</span>
            <h2>28%</h2>
          </Col>
          <Col span="3" class="type_total">
            <span>签收进度</span>
            <h2>446</h2>
          </Col>
          <Col span="3" class="type_total">
            <span>自提柜签收量</span>
            <h2>18%</h2>
          </Col>
          <Col span="3" class="type_total">
            <span>自提柜签收占比</span>
            <h2>30%</h2>
          </Col>
          <Col span="3" class="type_total">
            <span>送货上门签收占比</span>
            <h2>45%</h2>
          </Col>
          <Col span="3" class="type_total">
            <span>未签收占比</span>
            <h2>5%</h2>
          </Col>
        </Row>
      </template>
    </Module>

    <!-- 全国派送情况 -->
    <Row :gutter="16">
      <Col span="16">
        <Module>
          <!-- module-header -->
          <span class="text">全国派送情况</span>
          <template slot="tooltip">
            <div style="margin-right: 16px">数据更新时间2018.03.0112:00</div>
            <div style="margin-right: 16px;">
              <Select clearable placeholder="请选择指标">
                <Option value="001">指标1</Option>
                <Option value="002">指标2</Option>
              </Select>
            </div>
            <Icon type="md-open" size="20" style="margin-right: 16px;"/>
            <Icon type="md-image" size="20" style="margin-right: 16px;" />
          </template>
          <!-- module-content -->
          <template slot="content">
            <line-Chart :chartData="data" id="xxx"></line-Chart>
          </template>
        </Module>
      </Col>
      <Col span="8">
        <Module>
          <!-- module-header -->
          <span class="text">签收渠道统计</span>
          <!-- module-content -->
          <template slot="content">
            <pie-Chart :chartData="data3" id="yyy"></pie-Chart>
          </template>
        </Module>
      </Col>
    </Row>


    <!-- 分流向监控表 -->
    <Module>
      <!-- module-header -->
      <span class="text">分流向监控报表</span>
      <RadioGroup>
          <Radio label="淘系"></Radio>
          <Radio label="全网"></Radio>
          <Radio label="橙诺达2.0"></Radio>
      </RadioGroup>
      <template slot="tooltip">
        <Icon type="md-open" size="20" style="margin-right: 16px;"/>
        <Icon type="md-image" size="20" style="margin-right: 16px;" />
      </template>
      <!-- module-content -->
      <template slot="content">
        <Table height="200" :columns="columns1" :data="data2"></Table>
      </template>
    </Module>
  </Layout>
</template>

<script>
import Layout from "@/components/layout";
import Module from "@/components/module";
import LineChart from "@/components/chart/line-chart";
import PieChart from "@/components/chart/pie-chart";
const mapState=Vuex.mapState;
export default {
  components: {
    Layout,
    Module,
    LineChart,
    PieChart
  },
  data(){
    return {
      columns1: [
        {
          title: '目的中心',
          key: 'name'
        },
        {
          title: '已卸车票数',
          key: 'age',
          sortable: true,
          sortType: 'asc'
        },
        {
          title: '已装车票数',
          key: 'address'
        },
        {
          title: '已发运票数',
          key: 'name'
        },
        {
          title: '已进未出票数',
          key: 'age'
        },
        {
          title: '已装车票数',
          key: 'address'
        }
      ],
      data2: [
        {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
        },
        {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
        },
        {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
        },
        {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
        }
      ],
      data: [{
          "month": "Jan",
          "city": "Tokyo",
          "temperature": 7
        }, {
          "month": "Jan",
          "city": "London",
          "temperature": 3.9
        }, {
          "month": "Feb",
          "city": "Tokyo",
          "temperature": 6.9
        }, {
          "month": "Feb",
          "city": "London",
          "temperature": 4.2
        }, {
          "month": "Mar",
          "city": "Tokyo",
          "temperature": 9.5
        }, {
          "month": "Mar",
          "city": "London",
          "temperature": 5.7
        }, {
          "month": "Apr",
          "city": "Tokyo",
          "temperature": 14.5
        }, {
          "month": "Apr",
          "city": "London",
          "temperature": 8.5
        }, {
          "month": "May",
          "city": "Tokyo",
          "temperature": 18.4
        }, {
          "month": "May",
          "city": "London",
          "temperature": 11.9
        }, {
          "month": "Jun",
          "city": "Tokyo",
          "temperature": 21.5
        }, {
          "month": "Jun",
          "city": "London",
          "temperature": 15.2
        }, {
          "month": "Jul",
          "city": "Tokyo",
          "temperature": 25.2
        }, {
          "month": "Jul",
          "city": "London",
          "temperature": 17
        }, {
          "month": "Aug",
          "city": "Tokyo",
          "temperature": 26.5
        }, {
            "month": "Aug",
            "city": "London",
            "temperature": 16.6
        }, {
            "month": "Sep",
            "city": "Tokyo",
            "temperature": 23.3
        }, {
            "month": "Sep",
            "city": "London",
            "temperature": 14.2
        }, {
            "month": "Oct",
            "city": "Tokyo",
            "temperature": 18.3
        }, {
            "month": "Oct",
            "city": "London",
            "temperature": 10.3
        }, {
            "month": "Nov",
            "city": "Tokyo",
            "temperature": 13.9
        }, {
            "month": "Nov",
            "city": "London",
            "temperature": 6.6
        }, {
            "month": "Dec",
            "city": "Tokyo",
            "temperature": 9.6
        }, {
            "month": "Dec",
            "city": "London",
            "temperature": 4.8
      }],
      data3: [{
          type: '分类一',
          value: 20
        }, {
          type: '分类二',
          value: 18
        }, {
          type: '分类三',
          value: 32
        }, {
          type: '分类四',
          value: 15
        }, {
          type: 'Other',
          value: 15
      }],
    }
  },
  computed:{
    ...mapState({
      a: state => state.index.index,
      b: state => state.basicInfo.companyCode
    })
  },
  mounted(){
    console.info('ccccedsad')
  }
}
</script>

<style lang="less" scoped>
.type_total{
  margin-bottom: 16px;
  span{
    font-size: 14px;
    color: rgba(0,0,0,0.45);
  }
  h2{
    font-size: 24px;
    color: rgba(0,0,0,0.85);
    font-weight: bold;
  }
}

</style>
