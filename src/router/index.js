import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// import HelloWorld from '@/components/HelloWorld'
import homeComponent from '../pages/home'
import memberComponent from '../pages/member'
import shopcarComponent from '../pages/shopcar'
import searchComponent from '../pages/search'
import newsListComponent from '../pages/newsList'
import newsInfoComponent from '../pages/newsInfo'
import photoListComponent from '../pages/photoList'
import goodsListComponent from '../pages/goodsList'
import goodsInfoComponent from '../pages/goodsInfo'
import goodsDescComponent from '../pages/goodsDesc'
import goodsCommentComponent from '../pages/goodsComment'



export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
    {path:'/home',component:homeComponent},
    {path:'/member',component:memberComponent},
    {path:'/shopcar',component:shopcarComponent},
    {path:'/search',component:searchComponent},
    {path:'/home/newsList',component:newsListComponent},
    {path:'/home/newsInfo/:id',component:newsInfoComponent},
    {path:'/home/photoList',component:photoListComponent},
    {path:'/home/goodsList',component:goodsListComponent},
    {path:'/home/goodsInfo/:id',component:goodsInfoComponent},
    {path:'/home/goodsDesc/:id',component:goodsDescComponent},
    {path:'/home/goodsComment/:id',component:goodsCommentComponent},
    
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ],
  linkActiveClass:'mui-active'
})
