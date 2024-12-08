<script setup lang="ts">
const repositories = [
  {
    name: '编',
    description: '难绷',
    stars: 8421,
    language: 'verilog'
  },
  {
    name: '编',
    description: '完事',
    stars: 1357,
    language: 'cpp'
  }
]
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-3xl font-bold text-primary-dark mb-8">GitHub 项目</h1>
      
      <div class="grid gap-6">
        <div
          v-for="repo in repositories"
          :key="repo.name"
          class="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors"
        >
          <h3 class="text-xl font-semibold text-gray-800">{{ repo.name }}</h3>
          <p class="text-gray-600 mt-2">{{ repo.description }}</p>
          <div class="mt-4 flex items-center space-x-4 text-sm text-gray-500">
            <span>⭐ {{ repo.stars }}</span>
            <span>{{ repo.language }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>