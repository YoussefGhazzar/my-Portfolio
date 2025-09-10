<template>
  <main>
    <section class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-full mx-auto text-center">
        <div class="mb-4">
          <img
  src="/src/assets/images/image.png"
  alt="Professional Developer Portrait"
  class="w-56 h-56 rounded-full mx-auto mb-8 border-4 border-border shadow-lg"
/>

        </div>
        <!-- name -->
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 text-balance">
            Youssef Ghazzar
        </h1>
        <!-- description -->
        <p class="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
           Full-Stack Developer
        </p>
        <!-- githup Link -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="downloadResume()"
        class="bg-white text-black rounded-md font-bold py-1 sm: px-2 "
        >download resume</button>
           <a
           
            href="https://github.com/YoussefGhazzar?tab=repositories"
            target="_blank"
             title="GitHub"
class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-white hover:text-black"
          >
            View My Work
        </a>
          <!-- Contact -->
           <BaseButton @click="scrollToSection('contact')" text="Contact me" title="Contact Me"
                            btnClass="  text-sm sm:text-base px-5 py-2 border border-gray-700 text-white-900 font-semibold rounded-lg hover:bg-white hover:text-black
 " />
        
         
        </div>
      </div>
      
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue';

const featuredProjects = ref([
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "TypeScript", "PostgreSQL", "Socket.io"]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather application with location-based forecasts and data visualization.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "TailwindCSS"]
  }
])
const scrollToSection = (section) => {
    const target = document.getElementById(section);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
};

const showDropdown = ref(false);

function downloadResume() {
  const fileName = "Youssef_Ghazzar_Developer_fr .pdf"; // your resume file
  const filePath = `/${fileName}`; // assuming it's inside public/

  const link = document.createElement("a");
  link.href = filePath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showDropdown.value = false;
}
</script>