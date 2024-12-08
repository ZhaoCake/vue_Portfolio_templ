<script setup lang="ts">
const posts = [
  {
    id: 1,
    title: '笑',
    date: '2024-12-08',
    excerpt: '完事',
    link: '/blog/xiao'
  },
  {
    id: 2,
    title: '抽象',
    date: '2024-12-08',
    excerpt: '并且难绷',
    link: '/blog/chouxiang'
  }
]
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-3xl font-bold text-primary-dark mb-8">博客文章</h1>
      
      <div class="space-y-6">
        <article
          v-for="post in posts"
          :key="post.id"
          class="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
        >
          <router-link 
            :to="post.link"
            class="block group"
          >
            <h2 class="text-2xl font-semibold text-gray-800 group-hover:text-primary-dark transition-colors">
              {{ post.title }}
            </h2>
            <time class="text-sm text-gray-500 block mt-1">{{ post.date }}</time>
            <p class="mt-2 text-gray-700">{{ post.excerpt }}</p>
            <span class="inline-block mt-3 text-primary-dark font-medium group-hover:underline">
              阅读更多 →
            </span>
          </router-link>
        </article>
      </div>
    </div>
  </div>
</template>