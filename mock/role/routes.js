// Just a mock data

export const constantRoutes = [
  {
    path: '/redirect',
    component: 'layout/Layout',
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: 'views/redirect/index'
      }
    ]
  },
  {
    path: '/login',
    component: 'views/login/index',
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: 'views/login/auth-redirect',
    hidden: true
  },
  {
    path: '/404',
    component: 'views/error-page/404',
    hidden: true
  },
  {
    path: '/401',
    component: 'views/error-page/401',
    hidden: true
  },
  {
    path: '',
    component: 'layout/Layout',
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: 'views/dashboard/index',
        name: 'Dashboard',
        meta: { title: '首  页', icon: 'dashboard', affix: true }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/locationDistribution',
    component: 'layout/Layout',
    children: [
      {
        path: 'index',
        component: 'views/locationDistribution/index',
        name: 'locationDistribution',
        meta: { title: '位置分布', icon: 'location', affix: true }
      }
    ]
  },
  {
    path: '/timeDistribution',
    component: 'layout/Layout',
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: 'views/timeDistribution/index',
        name: 'timeDistribution',
        meta: { title: '时间分布', icon: 'time', noCache: true }
      }
    ]
  },
  {
    path: '/pmDistribution',
    component: 'layout/Layout',
    redirect: '/pmDistribution/province',
    alwaysShow: true,
    meta: {
      title: 'PM2.5分布',
      icon: 'pm2_5',
      roles: ['admin']
    },
    children: [
      {
        path: 'province',
        component: 'views/pmDistribution/province',
        name: 'province',
        meta: {
          title: '省份',
          icon: 'province',
          roles: ['admin']
        }
      },
      {
        path: 'china',
        component: 'views/pmDistribution/china',
        name: 'china',
        meta: {
          title: '全国',
          icon: 'china',
          roles: ['admin']
        }
      },
      {
        path: 'world',
        component: 'views/pmDistribution/world',
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
    component: 'layout/Layout',
    redirect: '/dataComparison/time',
    name: 'dataComparison',
    meta: {
      title: '数据比较',
      icon: 'compare',
      roles: ['admin']
    },
    children: [
      {
        path: 'create',
        component: 'views/dataComparison/create',
        name: 'city',
        meta: { title: '城市', icon: 'city', roles: ['admin'] }
      },
      {
        path: 'list',
        component: 'views/dataComparison/list',
        name: 'time',
        meta: { title: '时段', icon: 'time (1)', roles: ['admin'] }
      }
    ]
  },

  {
    path: '/weatherInfluence',
    component: 'layout/Layout',
    children: [
      {
        path: 'index',
        component: 'views/weatherInfluence/index',
        name: 'weatherInfluence',
        meta: { title: '天气影响', icon: 'weather' }
      }
    ]
  },

  {
    path: '/economicImpact',
    component: 'layout/Layout',
    children: [
      {
        path: 'index',
        component: 'views/economicImpact/index',
        name: 'economicImpact',
        meta: { title: '经济影响', icon: 'wealth' },
      }
    ]
  },

  {
    path: '/statisticalRanking',
    component: 'layout/Layout',
    redirect: '/statisticalRanking/index',
    children: [
      {
        path: 'index',
        component: 'views/statisticalRanking/index',
        name: 'statisticalRanking',
        meta: { title: '统计排名', icon: 'range', roles: ['admin'] }
      }
    ]
  },

  {
    path: '/pmImpact',
    component: 'layout/Layout',
    children: [
      {
        path: 'index',
        component: 'views/pmImpact/index',
        name: 'pmImpact',
        meta: { title: '关于PM2.5', icon: 'about' },
      }
    ]
  },
  {
    path: '/platformIntroduction',
    component: 'layout/Layout',
    children: [
      {
        path: 'index',
        component: 'views/platformIntroduction/index',
        name: 'platformIntroduction',
        meta: { title: '平台介绍', icon: 'intro' },
      }
    ]
  },
  {
    path: '/detectionProblems',
    component: 'layout/Layout',
    children: [
      {
        path: 'index',
        component: 'views/detectionProblems/index',
        name: 'detectionProblems',
        meta: { title: '检测难题', icon: 'problems' },
      }
    ]
  },
  {
    path: '/marketAnalysis',
    component: 'layout/Layout',
    children: [
      {
        path: 'index',
        component: 'views/marketAnalysis/index',
        name: 'marketAnalysis',
        meta: { title: '市场分析', icon: 'market' },
      }
    ]
  },
  {
    path: '/developmentStrategy',
    component: 'layout/Layout',
    children: [
      {
        path: 'index',
        component: 'views/developmentStrategy/index',
        name: 'developmentStrategy',
        meta: { title: '发展战略', icon: 'develop' },
      }
    ]
  },
  {
    path: '/marketPrediction',
    component: 'layout/Layout',
    children: [
      {
        path: 'index',
        component: 'views/marketPrediction/index',
        name: 'marketPrediction',
        meta: { title: '市场预测', icon: 'prediction' },
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
