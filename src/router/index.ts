import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home - My Portfolio'
      }
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/Resume.vue'),
      meta: {
        title: 'Resume - My Portfolio'
      }
    },
    {
      path: '/resume/:id',
      name: 'resume-detail',
      component: () => import('../views/ResumeDetail.vue'),
      meta: {
        title: 'Resume Details - My Portfolio'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/Blog.vue'),
      meta: {
        title: 'Blog - My Portfolio'
      }
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: () => import('../views/BlogPost.vue'),
      meta: {
        title: 'Blog Post - My Portfolio'
      }
    },
    {
      path: '/github',
      name: 'github',
      component: () => import('../views/Github.vue'),
      meta: {
        title: 'GitHub Projects - My Portfolio'
      }
    },
    {
      path: '/message-board',
      name: 'message-board',
      component: () => import('../views/MessageBoard.vue'),
      meta: {
        title: 'Message Board - My Portfolio'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'My Portfolio'
  next()
})

export default router