<script setup lang="ts">
const internships = [
  {
    company: "Tech Solutions Inc.",
    position: "Software Development Intern",
    period: "Summer 2023",
    responsibilities: [
      "Developed and maintained RESTful APIs using Node.js",
      "Collaborated with senior developers on front-end features",
      "Participated in daily stand-ups and sprint planning",
      "Implemented automated testing using Jest"
    ]
  },
  {
    company: "Innovation Labs",
    position: "Web Development Intern",
    period: "Summer 2022",
    responsibilities: [
      "Built responsive web components using React",
      "Optimized website performance and loading times",
      "Assisted in UI/UX design improvements",
      "Worked with version control using Git"
    ]
  }
]
</script>

<template>
  <section class="mb-8">
    <h2 class="text-2xl font-bold text-primary-dark mb-4">Internships</h2>
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