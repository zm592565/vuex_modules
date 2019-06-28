
import Demo1 from './views/demo1'
import Demo2 from './views/demo2'

export default new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/demo1',
      component: Demo1
    },
    {
      path: '/demo2',
      component: Demo2
    },
  ]
})
