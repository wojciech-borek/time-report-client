<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Loader from './components/Loader.vue';
</script>
<template>
      <section class="hero is-info is-medium is-bold">
        <Navbar /> 
        <Loader/>
      </section>
        <section class="container">
          <RouterView />
        </section>        
</template>