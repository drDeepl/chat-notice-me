<template>
  <n-space justify="center" align="center">
    <n-button @click="onClickChat()">счатиться</n-button>
  </n-space>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const onClickChat = () => router.push('chat');
</script>
