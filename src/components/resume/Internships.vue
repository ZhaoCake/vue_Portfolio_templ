<script setup lang="ts">
const internships = [
  {
    company: "洗碗房",
    position: "母亲的抹布",
    period: "2023夏",
    responsibilities: [
      "编",
      "看情况",
      "看情况",
      "编"
    ]
  },
  {
    company: "编",
    position: "编",
    period: "2022夏",
    responsibilities: [
      "编",
      "编",
      "编",
      "编"
    ]
  }
]
</script>

<template>
  <section class="mb-8">
    <h2 class="text-2xl font-bold text-primary-dark mb-4">工作经历</h2>
    <div class="space-y-4">
      <div 
        v-for="internship in internships" 
        :key="internship.company"
        class="bg-white rounded-lg p-6 shadow-sm"
      >
        <h3 class="text-xl font-semibold">{{ internship.position }}</h3>
        <p class="text-gray-600">{{ internship.company }} | {{ internship.period }}</p>
        
        <ul class="mt-4 list-disc list-inside text-gray-600 space-y-1">
          <li v-for="responsibility in internship.responsibilities" :key="responsibility">
            {{ responsibility }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>