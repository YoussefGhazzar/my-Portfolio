<template>
    <button :class="btnClass"> <span v-html="text"></span> </button>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
    btnClass: {
        type: String,
        defult: 'bg-primary text-white px-4 py-2 rounded'
    }
})
</script>