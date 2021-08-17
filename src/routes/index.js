import AuthView from '../views/auth/AuthView';
import Governance from '../views/Governance';
import MainView from '../views/MainView';
import SmartYield from '../views/SmartYield';
import YieldFarming from '../components/farming/YieldFarming';

let routes = [
	{
		path: '/auth',
		component: AuthView,
		layout: 'auth',
	},
	{
		path: '/',
		component: MainView,
		layout: 'main',
	},
	{
		path: '/governance',
		component: Governance,
		layout: 'main',
	},
	{
		path: '/smartyield',
		component: SmartYield ,
		layout: 'main',
	},
	{
		path: '/farming',
		component: YieldFarming ,
		layout: 'main',
	},
	
];
export default routes;
