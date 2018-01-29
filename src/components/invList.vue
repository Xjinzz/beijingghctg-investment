<template>
<div>
  <listtpl :titlename="titlename1" :titlename2="titlename2" :titlename3="titlename3" :titlename4="titlename4" :titlename5="titlename3" :listData="listData"></listtpl>
  </div>
</template>
<script>
import listtpl from "./listtpl.vue";
export default {
  data(){
    return{
        titlename1:'项目名称',
        titlename2:'项目金额',
        titlename3:'合作方式',
        titlename4:'所属领域',

        titlename5:'立项时间',

        


        listData:[{
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '航空小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '成语小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '新沃资本',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '盛世神州基金',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }],
        
    }
  },
 components: {
   listtpl
 },
 
}
</script>
