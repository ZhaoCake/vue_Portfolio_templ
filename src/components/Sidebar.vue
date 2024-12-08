<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { HomeIcon, DocumentTextIcon, NewspaperIcon, CodeBracketIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const links = [
  { name: '主页', path: '/', icon: HomeIcon },
  { name: '简历', path: '/resume', icon: DocumentTextIcon },
  { name: '博客', path: '/blog', icon: NewspaperIcon },
  { name: 'GitHub', path: '/github', icon: CodeBracketIcon },
  { name: '留言板', path: '/message-board', icon: ChatBubbleLeftRightIcon },
]

const socialLinks = [
  { name: 'Zhihu', url: 'https://zhihu.com' },
  { name: 'CSDN', url: 'https://csdn.com' },
  { name: 'Bilibili', url: 'https://bilibili.com' },
]
</script>

<template>
  <aside class="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
    <div class="p-6">
      <h1 class="text-2xl font-bold text-primary-dark mb-8">My Portfolio</h1>
      <nav class="space-y-2">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="flex items-center px-4 py-2 rounded-lg transition-colors"
          :class="route.path === link.path ? 'bg-primary-light text-primary-dark' : 'hover:bg-gray-100'"
        >
          <component :is="link.icon" class="w-5 h-5 mr-3" />
          {{ link.name }}
        </router-link>
      </nav>
      
      <div class="mt-8 pt-8 border-t border-gray-200">
        <h2 class="text-sm font-semibold text-gray-600 mb-4">Connect with me</h2>
        <div class="space-y-2">
          <a
            v-for="link in socialLinks"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="block text-gray-600 hover:text-primary-dark transition-colors"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>