<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref({
  title: '',
  date: '',
  content: '',
  author: ''
})

onMounted(() => {
  post.value = {
    title: route.params.slug as string,
    date: '2024-12-08',
    content: '这就是，最后的博客了',
    author: 'Zhao Cake'
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-md p-8">
      <router-link 
        to="/blog"
        class="text-primary-dark hover:underline mb-4 inline-block"
      >
        ← Back to Blog
      </router-link>
      
      <article class="prose lg:prose-xl max-w-none">
        <h1 class="text-3xl font-bold text-primary-dark">{{ post.title }}</h1>
        <div class="flex items-center text-gray-500 mt-2 mb-8">
          <time>{{ post.date }}</time>
          <span class="mx-2">•</span>
          <span>{{ post.author }}</span>
        </div>
        
        <div class="text-gray-700 leading-relaxed">
          {{ post.content }}
        </div>
      </article>
    </div>
  </div>
</template>