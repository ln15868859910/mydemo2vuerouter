import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';

// import Layout from '@/views/layout';
// import Project from '@/views/backend/project';
// import Doc from '@/views/backend/doc';
// import Workbench from '@/views/backend/workbench';
import Login from '@/components/login';
import header from '@/components/header';
let Layout = (res) => {
	return require.ensure([], () => {
		res(require('@/views/layout'));
	});
};
let Project = (res) => {
	return require.ensure([], () => {
		res(require('@/views/backend/project'));
	});
};
let Doc = (res) => {
	return require.ensure(
		[],
		() => {
			res(require('@/views/backend/doc'));
		},
		'abc'
	);
};
// let Workbench = (res) => {
// 	return require.ensure(
// 		[],
// 		() => {
// 			res(require('@/views/backend/workbench'));
// 		},
// 		'abc'
// 	);
// };
let Workbench = (res) => {
	return import('@/views/backend/workbench');
};
Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/management',
			name: 'management',
			component: Layout,
			children: [
				{
					path: '/project',
					name: 'project',
					meta: {
						login: true
					},
					component: Project
				},
				{
					path: '/Workbench',
					name: 'Workbench',
					meta: {
						login: true
					},
					component: Workbench
				},
				{
					path: '/Doc',
					name: 'Doc',
					component: Doc
				}
			]
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/header',
			name: 'header',
			component: header
		}
	]
});
