import Layout from '../layout/index'
export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        meta: {
          name: '首页',
          icon: ''
        },
        component: () => import('../views/home')
      }
    ]
  },
  {
    path: '/amap',
    component: Layout,
    meta: {
      name: "地图"
    },
    children: [
      {
        path: '/amap',
        meta: {
          name: 'vue-amap 地图',
          icon: 'iconfont icon-logistic'
        },
        // 详细到文件后缀，由于结构中存在多个index，避免冲突
        component: () => import('../views/amap/index.vue')
      },
      {
        path: '/amap',
        meta: {
          name: 'vue-amap 地图'
        },
        // 详细到文件后缀，由于结构中存在多个index，避免冲突
        component: () => import('../views/amap/index.vue')
      }
    ]
  },
]