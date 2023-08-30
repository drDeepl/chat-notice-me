<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <n-space justify="center" align="center">
          <RouterLink to="/"><n-button>Домашняя страница</n-button></RouterLink>
        </n-space>
      </nav>
    </div>
  </header>
  <RouterView />
  <footer></footer>
</template>
