import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import BooksIndexView from '@/views/BooksIndexView.vue';
import BooksCreateView from '@/views/BooksCreateView.vue';
import BooksShowView from '@/views/BooksShowView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/books',
      name: 'books',
      component: BooksIndexView,
    },
    {
      path: '/books/create',
      name: 'books-create',
      component: BooksCreateView,
    },
    {
      path: '/books/:id',
      name: 'book-details',
      component: BooksShowView,
    },
  ],
});

export default router;
