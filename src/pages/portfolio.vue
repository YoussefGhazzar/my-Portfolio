<template>
    <div class="relative">
    <main class="pt-4">
     <section id="home">
       <Home /> 
     </section>
     <section id="about" class="mt-10">
        <About />
     </section>
     <section id="projects" class="mt-5">
        <Projects />
     </section>
     <section id="contact" class="mt-10">
        <Contact />
     </section>
    </main>
    </div>
    
</template>
<script setup>
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
</script>