<script setup lang="ts">
const posts = [
  {
    id: 1,
    title: 'Getting Started with Vue 3',
    date: '2024-02-20',
    excerpt: 'Learn how to build modern web applications with Vue 3 and TypeScript.',
    link: '/blog/getting-started-with-vue-3'
  },
  {
    id: 2,
    title: 'Best Practices in Web Development',
    date: '2024-02-15',
    excerpt: 'Essential practices every web developer should follow.',
    link: '/blog/web-development-best-practices'
  }
]
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-3xl font-bold text-primary-dark mb-8">Blog Posts</h1>
      
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
              Read more →
            </span>
          </router-link>
        </article>
      </div>
    </div>
  </div>
</template>