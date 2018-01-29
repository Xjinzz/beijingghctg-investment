import Vue from 'vue'
import Router from 'vue-router'

const content = () => import('@/components/Clue.vue')
const projectList = () => import('../components/project_list.vue')
const invList=()=>import('../components/invList.vue')
const view=()=>import('@/components/index/list1.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'content',
      component: content,
      children:[
        {
          path:'list1',
          component:view,

        },
        {
          path: 'list2',
          component: view,
        },
        {
          path: 'list3',
          component: view,
      
        },
        {
          path: 'list4',
          component: view,

          
        }
      ],

    },{
      path: '/project/project_list',
      name: 'content',
      component: projectList
    }, {
      path: '/invList/invList',
      name: 'content',
      component: invList
    }
  ]
})
