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
        title: '主页 - 我的作品集'
      }
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/Resume.vue'),
      meta: {
        title: '简历 - 我的作品集'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/Blog.vue'),
      meta: {
        title: '博客 - 我的作品集'
      }
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: () => import('../views/BlogPost.vue'),
      meta: {
        title: '博客 - 我的作品集'
      }
    },
    {
      path: '/github',
      name: 'github',
      component: () => import('../views/Github.vue'),
      meta: {
        title: 'GitHub项目 - 我的作品集'
      }
    },
    {
      path: '/message-board',
      name: 'message-board',
      component: () => import('../views/MessageBoard.vue'),
      meta: {
        title: '留言板 - 我的作品集'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'My Portfolio'
  next()
})

export default router