<template>
    <div class="clueView">

        <div class="pageheader">招商线索报表统计</div>
        <div class="subNav">
            <ul class="subnav">
                <router-link :to="link1" tag="li">

                    <span><img src="../../static/img/i-subimg4.png"></span><span>社区商业</span>
                
                </router-link>
                 <router-link :to="link2" tag="li">

                    <span><img src="../../static/img/i-subimg3.png"></span><span>写字楼</span>
                
                </router-link>
                 <router-link :to="link3" tag="li">

                    <span><img src="../../static/img/i-subimg2.png"></span><span>产业园区</span>
                
                </router-link>
                 <router-link :to="link4" tag="li">

                    <span><img src="../../static/img/i-subimg1.png"></span><span>招商分析</span>
                
                </router-link>
               
               
            </ul>
            
        </div>
         <div class="subview">
                 <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return{
          link1:'/index/list1',
          link2:'/index/list2',
          link3:'/index/list3',
          link4:'/index/list4',

      }
  }
}
</script>
<style scoped>
    .clueView{
            width:98%;
            margin:0 auto;
            height:100%;
            background:#fff;
            margin-top:1%;
    }
    .clueView .pageheader{
        font-size:16px;
        padding:20px;
    }
    
    .clueView .subNav{
        width:298px;
        height:920px;
        background:#f5f5f5;
        float: left;
    }
    .clueView .subView{
        float:right;
        width:1390px;
        height:920px;
    }
    .subNav ul li{
        width:100%;
        border-bottom:0.2px solid #ccc;
        padding-bottom:15px;
        padding-top:15px;
    }
    .subNav ul li span:nth-last-child(1){
       position: relative;
       top:-50px;
       left: 20px;
       color:#999;
       font-size:14px;
    }
    .subnav li:hover{
       background:#dae7f5;
    }
</style>
