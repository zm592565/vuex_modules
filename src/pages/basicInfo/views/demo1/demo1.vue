<template>
  <Layout>
    <!-- header -->
    <template slot="breadcrumb">客服 > 工单基础配置 > 工单分配配置</template>
    <template slot="title">中心出港作业实时监控----{{a}}</template>
    <template slot="form">
      <Form inline>
        <div class="from_module">
          <FormItem label="中心" placeholder="请选择">
            <Select clearable style="width: 120px">
              <Option value="-1">全部</Option>
              <Option value="0">启用</Option>
              <Option value="1">禁用</Option>
            </Select>
          </FormItem>
          <FormItem>
            <Button type="primary">查询</Button>
            <Button style="margin-left: 8px">重置</Button>
          </FormItem>
        </div>
      </Form>
    </template>
    <!-- module -->
    <!-- 全国派送情况 -->
    <Module>
      <!-- module-header -->
      <span class="text">全国派送情况</span>
      <!-- module-content -->
      <template slot="content">
        <Row :gutter="16">
          <Col span="5" class="type_total">
            <span>已卸车包裹量</span>
            <h2>23,446,323</h2>
          </Col>
          <Col span="5" class="type_total">
            <span>已装车包裹量</span>
            <h2>34,446</h2>
          </Col>
          <Col span="5" class="type_total">
            <span>已出港包裹量</span>
            <h2>34,446</h2>
          </Col>
          <Col span="5" class="type_total">
            <span>已进未出包裹量</span>
            <h2>34,446</h2>
          </Col>
          <Col span="4" class="type_total">
            <span>处理进度</span>
            <h2>97.27%</h2>
          </Col>
        </Row>
        <Row :gutter="16">
          <Col span="5" class="type_total">
            <span>本地揽收量</span>
            <h2>23,446,323</h2>
          </Col>
          <Col span="5" class="type_total">
            <span>本地进港量</span>
            <h2>34,446</h2>
          </Col>
          <Col span="5" class="type_total">
            <span>本地出港量</span>
            <h2>34,446</h2>
          </Col>
          <Col span="5" class="type_total">
            <span>中转进港量</span>
            <h2>34,446</h2>
          </Col>
          <Col span="4" class="type_total">
            <span>中转出港量</span>
            <h2>97.27%</h2>
          </Col>
        </Row>
      </template>
    </Module>

    <!-- 全国派送情况 -->
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
      <template  slot="content">
        <div style='height:300px;' v-renderTarget='test'></div>
      </template>
    </Module>

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
const { mapState, mapActions } = Vuex.createNamespacedHelpers('basicInfo')
export default {
  components: {
    Layout,
    Module
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
      test:{
        data:[
          {
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
          options:{
            type:function(res){
                res.line().position('month*temperature').color('city');
                res.point().position('month*temperature').color('city').size(4).shape('circle').style({stroke: '#fff',lineWidth: 2});
            },
            defs:{
              month:{range:[0, 1]}
            },
            tooltip:{
              crosshairs: {
                type: 'line'
              }
            },
            axis:{
              'temperature': {
                label: {
                  formatter: function formatter(val) {
                    return val + '°C';
                  }
                }
              }
            }
          }
        }
    }
  },
  computed: {
    ...mapState([
      'companyCode'
    ])
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
