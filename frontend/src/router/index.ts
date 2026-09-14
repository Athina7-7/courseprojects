import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/AuthStore';

import HomeView from '../views/HomeView.vue';
import AdminSocialView from '@/views/admin/AdminSocialView.vue';
import AdminUsersView from '@/views/admin/AdminUsersView.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/admin/redes',
      name: 'admin-redes',
      component: AdminSocialView,
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: '/admin/usuarios',
      name: 'admin-usuarios',
      component: AdminUsersView,
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
  ],
});

router.beforeEach((to) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated()) {
    return { name: 'login' };
  }

  if (to.meta.requiresAdmin && authStore.currentUser?.role !== 'admin') {
    return { name: 'home' };
  }

  return true;
});

export default router;
