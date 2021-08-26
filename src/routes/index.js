import AuthView from '../views/auth/AuthView';
import Governance from '../views/Governance';
import SmartYield from '../views/SmartYield';
import YieldFarming from '../views/YieldFarming';
import Dashboard from '../views/Dashboard';
import Vault from '../views/Vault';
import Swap from '../views/Swap';
import BurnVault from '../views/BurnVault';
import carbonStake from'../views/carbonStake';
import blackStake from '../views/blackStaking';
import lpStake from '../views/LpStaking';
let routes = [
	{
		path: '/auth',
		component: AuthView,
		layout: 'auth',
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
		layout: 'main',
	},
	{
		path: '/vault',
		name: 'Vault',
		component: Vault,
		layout: 'main',
	},
	{
		path: '/swap',
		name: 'Swap',
		component: Swap,
		layout: 'main',
	},
	{
		path: '/governance',
		name: 'Governance',
		component: Governance,
		layout: 'main',
	},
	{
		path: '/carbon-yield',
		name: 'Carbon Yield',
		component: SmartYield,
		layout: 'main',
	},
	{
		path: '/yield-farming',
		name: 'Yield Farming',
		component: YieldFarming,
		layout: 'main',
	},
	{
		path: '/burn-vault',
		name: 'Burn Vault',
		component: BurnVault,
		layout: 'main',
	},
	{
		path: '/carbon-stake',
		name: 'carbon stake',
		component: carbonStake,
		layout: 'main',
	},
	{
		path: '/black-stake',
		name: 'black stake',
		component: blackStake,
		layout: 'main',
	},
	{
		path: '/lp-stake',
		name: 'lp stake',
		component: lpStake,
		layout: 'main',
	},
];
export default routes;
