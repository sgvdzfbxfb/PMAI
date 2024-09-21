import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首  页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: '个人信息', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/locationDistribution',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/locationDistribution/index'),
        name: 'locationDistribution',
        meta: { title: '位置分布', icon: 'location', affix: true }
      }
    ]
  },
  {
    path: '/timeDistribution',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/timeDistribution/index'),
        name: 'timeDistribution',
        meta: { title: '时间分布', icon: 'time', noCache: true }
      }
    ]
  },
  {
    path: '/pmDistribution',
    component: Layout,
    redirect: '/pmDistribution/province',
    alwaysShow: true, // will always show the root menu
    name: 'pmDistribution',
    meta: {
      title: 'PM2.5分布',
      icon: 'pm2_5',
      roles: ['admin'] // you can set roles in root nav
    },
    children: [
      {
        path: 'province',
        component: () => import('@/views/pmDistribution/province'),
        name: 'province',
        meta: {
          title: '省份',
          icon: 'province',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'china',
        component: () => import('@/views/pmDistribution/china'),
        name: 'china',
        meta: {
          title: '全国',
          icon: 'china',
          roles: ['admin']
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'world',
        component: () => import('@/views/pmDistribution/world'),
        name: 'world',
        meta: {
          title: '全球',
          icon: 'world',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/dataComparison',
    component: Layout,
    redirect: '/dataComparison/time',
    name: 'dataComparison',
    meta: {
      title: '数据比较',
      icon: 'compare',
      roles: ['admin']
    },
    children: [
      {
        path: 'city',
        component: () => import('@/views/dataComparison/city'),
        name: 'city',
        meta: { title: '城市', icon: 'city', roles: ['admin'] }
      },
      {
        path: 'time',
        component: () => import('@/views/dataComparison/time'),
        name: 'time',
        meta: { title: '时段', icon: 'time (1)', roles: ['admin'] }
      }
    ]
  },

  {
    path: '/weatherInfluence',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/weatherInfluence/index'),
        name: 'weatherInfluence',
        meta: { title: '天气影响', icon: 'weather' }
      }
    ]
  },

  {
    path: '/economicImpact',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/economicImpact/index'),
        name: 'economicImpact',
        meta: { title: '经济影响', icon: 'wealth' }
      }
    ]
  },

  {
    path: '/statisticalRanking',
    component: Layout,
    redirect: '/statisticalRanking/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/statisticalRanking/index'),
        name: 'statisticalRanking',
        meta: { title: '统计排名', icon: 'range', roles: ['admin'] }
      }
    ]
  },

  {
    path: '/pmImpact',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/pmImpact/index'),
        name: 'pmImpact',
        meta: { title: '关于PM2.5', icon: 'about' }
      }
    ]
  },

  {
    path: '/platformIntroduction',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/platformIntroduction/index'),
        name: 'platformIntroduction',
        meta: { title: '平台介绍', icon: 'intro' }
      }
    ]
  },

  {
    path: '/detectionProblems',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/detectionProblems/index'),
        name: 'detectionProblems',
        meta: { title: '检测难题', icon: 'problems' }
      }
    ]
  },

  {
    path: '/marketAnalysis',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/marketAnalysis/index'),
        name: 'marketAnalysis',
        meta: { title: '市场分析', icon: 'market' }
      }
    ]
  },

  {
    path: '/developmentStrategy',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/developmentStrategy/index'),
        name: 'developmentStrategy',
        meta: { title: '发展战略', icon: 'develop' }
      }
    ]
  },

  {
    path: '/marketPrediction',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/marketPrediction/index'),
        name: 'marketPrediction',
        meta: { title: '市场预测', icon: 'prediction' }
      }
    ]
  },
  
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
