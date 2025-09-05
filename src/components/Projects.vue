<template>
  <div class="min-h-screen bg-background text-foreground">
    <div class="container mx-auto px-6 py-20">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-balance">My Projects</h1>
        <p class="text-xl text-muted-foreground mb-12 max-w-2xl">
          Here are some of the projects I've worked on. Each one represents a unique 
          challenge and learning experience.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in projects" 
            :key="project.id"
            class="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div class="aspect-video bg-muted relative overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-muted-foreground mb-4 text-sm leading-relaxed">
                {{ project.description }}
              </p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-2 py-1 bg-muted text-xs rounded"
                >
                  {{ tech }}
                </span>
              </div>
              
              <div class="flex gap-3 ">
                <a 
                  :href="project.liveUrl" 
                  class="text-primary hover:underline text-base font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a 
                  :href="project.githubUrl" 
                  class="text-muted-foreground hover:underline text-foreground text-base font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
const projects = ref([
  {
    id: 1,
    title: 'Gestione Recource Humaines',
    description: "A desktop application built with JavaFX for managing human resources efficiently. The system allows administrators to manage employee records, track absences, and process payroll with automated calculations. It integrates with a relational database (via JDBC) to ensure data persistence",
    image: image1,
    technologies: ['JavaFx', 'CSS', 'MySQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/YoussefGhazzar/GRH'
  },
  {
    id: 2,
    title: 'AI-Lead Project',
    description: "Advanced Artificial Intelligence Project (Laravel + Vue.js + Inertia + TailwindCSS)A modern web application integrating AI features with a seamless user experience. Built using Laravel for the backend, Vue.js and Inertia.js for dynamic frontend interactions, and TailwindCSS for a responsive, modern design  ",
    image: image2,
    technologies: ['Laravel', 'Vue.js', 'TailwindCSS','PostgreSQL','Inertia.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/YoussefGhazzar/ai-lead-backend-laravel'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A sleek and responsive personal portfolio showcasing projects, technical skills, and development experience. Built with Vue.js and TailwindCSS, optimized for performance and accessibility ',
    image: image3,
    technologies: ['Vue.js', 'TailwindCSS', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project'
  },
  
])
</script>