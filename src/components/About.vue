<template>
  <div class="min-h-screen bg-background text-foreground">
    <div class="container mx-auto px-6 py-20">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-balance">About Me</h1>
        
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <div class="space-y-6">
            <p class="text-lg text-muted-foreground leading-relaxed">
            Passionate full-stack developer with experience in designing and developing web and desktop applications. I’m proficient in Java (JavaFX, JDBC) 
            as well as modern web technologies (Laravel, Vue.js, Inertia.js, TailwindCSS).
            </p>
            
            <p class="text-lg text-muted-foreground leading-relaxed">
            I’ve worked on projects ranging from building interactive dashboards to implementing secure authentication systems.
             I enjoy learning new technologies and creating efficient, user-friendly solutions.
            </p>

            
          </div>

          <div class="space-y-8">
    

            <div>
              <h3 class="text-xl font-semibold mb-4">My Skills</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-muted text-sm rounded-full hover:bg-gray-600"
                >
                  {{ tech }}
                </span>
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



const technologies = ref([
  'Vue.js', 'Angular', 'Laravel', 'PHP', 'Java', 'MySQL', 
  'PostgreSQL', 'JavaFx', 'SQL', 'Git', 'Inertia.js', 'TailwindCSS','CSS','Python','GitHup'
])
</script>