import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '../views/Loginpage';
import SignUpPage from '../views/SignUpFormPage';
import MainPage from '../views/Mainpage';
import TermPage from '../views/SignUpTermPage';
import ProfileManage from '../views/ProfileManage';
import MusicManage from '../views/MusicManage';
import SettlementPage from '../views/SettlementPage';
import Chart from '../views/Chart';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			name: 'login',
			component: LoginPage,
		},
		{
			path: '/signup/form',
			name: 'signup',
			component: SignUpPage,
		},
		{
			path: '/main',
			name: 'main',
			component: MainPage,
		},
		{
			path: '/signup/term',
			name: 'signupterm',
			component: TermPage,
		},
		{
			path: '/profilemanage',
			name: 'profilemanage',
			component: ProfileManage,
		},
		{
			path: '/musicmanage',
			name: 'musicmanage',
			component: MusicManage,
		},
		{
			path: '/settlement',
			name: 'settlement',
			component: SettlementPage,
		},
		{
			path: '/chart',
			name: 'chart',
			component: Chart,
		},
	],
});





























