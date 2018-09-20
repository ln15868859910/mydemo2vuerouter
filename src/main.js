// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/css/app.css';
import Util from './lib/Utils';

// Vue.use(utils);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	let b = to.matched.some((item) => {
		return item.meta.login;
	});

	if (b) {
		let info = router.app.$local.fetch('miaov');
		if (info.login) {
			next();
		} else {
			router.push({
				path: '/login',
				query: {
					redirect: to.path.slice(1)
				}
			});
		}
	} else {
		next();
	}
});

// Vue.prototype.$custom = '自定义';

Vue.use(Util);
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
});
