// import Vue from 'vue'
// import Router from 'vue-router'
import test from './views/test' //测试页面


export default new VueRouter({
	//mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		//数据字典
		{
			path: '/test',
			component: test
		},
		{
			path: '/basicInfo',
			//beforeEnter(to, from, next)
			beforeEnter() {
				window.location = "/basicInfo.html"
			}
		},
		{
			path: '/dataCenter',
			beforeEnter() {
				window.location = "/dataCenter.html"
			}
		},
	]
})
