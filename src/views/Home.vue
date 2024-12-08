<script setup lang="ts">
const name = 'Zhao Cake'
const title = '捡垃圾干饭专业人士'
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-4xl font-bold text-primary-dark mb-4">{{ name }}</h1>
      <h2 class="text-2xl text-gray-600 mb-8">{{ title }}</h2>
      
      <div class="prose lg:prose-xl">
        <p class="text-gray-700">
          欢迎来到我的个人网站！我是一名热衷于为复杂问题创造优雅解决方案的开发者。在这里，您可以找到关于我的职业经历、技术博客文章以及我的开源贡献的信息。
        </p>
      </div>
    </div>
  </div>
</template>