import DashboardClientPage from '../../components/dashboard/dashboard-client/dashboard-client.page.vue'
import DashboardBusinessmanPage from '../../components/dashboard/dashboard-businessman/dashboard-businessman.page.vue'
export const dashboardRoutes = [
    { path: '/client-dashboard', component: DashboardClientPage, meta: { requiresAuth: true, userRole: 'CLIENT' }},
    { path: '/businessman-dashboard', component: DashboardBusinessmanPage, meta: { requiresAuth: true, userRole: 'SELLER' }}
]