<script setup lang="ts">
const education = {
  degree: "Bachelor of Science in Computer Science",
  university: "Tech University",
  period: "2020 - 2024",
  gpa: "3.8/4.0",
  achievements: [
    "Dean's List: All semesters",
    "Best Undergraduate Research Project",
    "Computer Science Student Association President"
  ],
  relevantCourses: [
    "Data Structures and Algorithms",
    "Web Development",
    "Database Systems",
    "Software Engineering"
  ]
}
</script>

<template>
  <section class="mb-8">
    <h2 class="text-2xl font-bold text-primary-dark mb-4">Education</h2>
    <div class="bg-white rounded-lg p-6 shadow-sm">
      <h3 class="text-xl font-semibold">{{ education.degree }}</h3>
      <p class="text-gray-600">{{ education.university }} | {{ education.period }}</p>
      <p class="text-primary-dark font-medium mt-2">GPA: {{ education.gpa }}</p>
      
      <div class="mt-4">
        <h4 class="font-semibold text-gray-700 mb-2">Achievements</h4>
        <ul class="list-disc list-inside text-gray-600 space-y-1">
          <li v-for="achievement in education.achievements" :key="achievement">
            {{ achievement }}
          </li>
        </ul>
      </div>
      
      <div class="mt-4">
        <h4 class="font-semibold text-gray-700 mb-2">Relevant Coursework</h4>
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