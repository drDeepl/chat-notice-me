<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <n-space justify="center" align="center">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/chat">About</RouterLink>
        </n-space>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
