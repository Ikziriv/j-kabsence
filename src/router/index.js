import VueRouter from 'vue-router';

import Login from '../components/auth/Login.vue';
import DashboardIndex from '../components/pages/dashboard/Index.vue';
// Absensi
import AbsensiIndex from '../components/pages/absensi/Index.vue';
import AbsensiCreate from '../components/pages/absensi/Create.vue';
// Noted
import NotedIndex from '../components/pages/noted/Index.vue';
import NotedCreate from '../components/pages/noted/Create.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
	  {
	  	path:'/', 
	  	component: Login
	  },
	  {
	  	path:'/auth', 
	  	component: Login
	  },
	  {
	  	path:'/dashboard', 
	  	component: DashboardIndex
	  },
	  {
	  	path:'/absensi', 
	  	component: AbsensiIndex
	  },
	  {
	  	path:'/absensi/create', 
	  	component: AbsensiCreate
	  },
	  {
	  	path:'/noted', 
	  	component: NotedIndex
	  },
	  {
	  	path:'/noted/create', 
	  	component: NotedCreate
	  }
  ]
});
export default router;