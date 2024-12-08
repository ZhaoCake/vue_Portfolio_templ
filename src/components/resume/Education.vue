<script setup lang="ts">
const education = {
  degree: "干饭学士",
  university: "家里蹲大学",
  period: "2022 - 2026",
  gpa: "1.0/4.0",
  achievements: [
    "看情况",
    "看情况",
    "看情况"
  ],
  relevantCourses: [
    "干饭",
    "刷视频",
    "看小说",
    "睡觉"
  ]
}
</script>

<template>
  <section class="mb-8">
    <h2 class="text-2xl font-bold text-primary-dark mb-4">教育背景</h2>
    <div class="bg-white rounded-lg p-6 shadow-sm">
      <h3 class="text-xl font-semibold">{{ education.degree }}</h3>
      <p class="text-gray-600">{{ education.university }} | {{ education.period }}</p>
      <p class="text-primary-dark font-medium mt-2">GPA: {{ education.gpa }}</p>
      
      <div class="mt-4">
        <h4 class="font-semibold text-gray-700 mb-2">成就</h4>
        <ul class="list-disc list-inside text-gray-600 space-y-1">
          <li v-for="achievement in education.achievements" :key="achievement">
            {{ achievement }}
          </li>
        </ul>
      </div>
      
      <div class="mt-4">
        <h4 class="font-semibold text-gray-700 mb-2">相关课程</h4>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="course in education.relevantCourses" 
            :key="course"
            class="bg-primary-light text-primary-dark px-3 py-1 rounded-full text-sm"
          >
            {{ course }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>