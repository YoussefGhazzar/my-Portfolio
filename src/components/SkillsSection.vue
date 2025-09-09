<template>
  <div class="py-16 bg-gray-50">
    <div class="max-w-screen-xl mx-auto px-4">

      <!-- Section Header -->
      <div class="text-center">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          My Skills
        </h2>
        <p class="mt-4 font-nunito text-xl  text-gray-400">
          Technologies and Tools I'm proficient in
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-[#f2f2f1] to-[#000000] mx-auto mt-6 rounded-full"></div>
      </div>

      <!-- Skills Grid -->
      <div v-if="skills.length"
        class="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">

        <div v-for="skill in skills" :key="skill.id"
          class="text-center bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-transform">
          <!-- Skill Icon -->
          <div class="text-5xl text-primary flex justify-center items-center">
            <span v-html="skill.icon" class="w-16 h-16 sm:w-20 sm:h-20"></span>
          </div>

          <!-- Skill Name -->
          <h3 class="text-lg sm:text-xl font-semibold text-gray-800">
            {{ skill.name }}
          </h3>

          <!-- Skill Details -->
          <div class="mt-3">
            <p class="text-gray-500 text-sm sm:text-base">
              {{ skill.category }}
            </p>
            <!-- <p class="text-sm sm:text-base font-medium text-primary">
              {{ skill.level }}
            </p> -->
          </div>
        </div>

      </div>

      <!-- Loading Message -->
      <p v-else class="text-center text-lg text-gray-600 mt-8">Loading skills...</p>

    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const skills = inject('skills');
</script>
