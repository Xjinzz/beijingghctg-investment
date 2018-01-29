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
        titlename2:'项目属性',
        titlename3:'项目类型',
        titlename4:'行业领域',

        titlename5:'立项时间',

        


        listData:[{
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '鼎信长城基金',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '中城投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '新沃资本',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '盛世神州基金',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }],
        
    }
  },
 components: {
   listtpl
 },
 
}
</script>
