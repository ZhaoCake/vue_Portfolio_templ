<script setup lang="ts">
const name = 'John Doe'
const title = 'Full Stack Developer'
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-4xl font-bold text-primary-dark mb-4">{{ name }}</h1>
      <h2 class="text-2xl text-gray-600 mb-8">{{ title }}</h2>
      
      <div class="prose lg:prose-xl">
        <p class="text-gray-700">
          Welcome to my personal website! I'm a passionate developer focused on creating
          elegant solutions to complex problems. Here you can find information about my
          professional experience, blog posts about technology, and my open-source contributions.
        </p>
      </div>
    </div>
  </div>
</template>