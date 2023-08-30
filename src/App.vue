<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui';

const blackColor = '#000000';
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: blackColor,
    iconColor: blackColor,
    primaryColorHover: null, //'#fa2a55'
    pressedColor: null,
    primaryColorSuppl: null,
    primaryColorPressed: null,
    borderColor: null,
    // primaryColorPressed: null,
    // pressedColor: null,
    railColor: '#e81cff',
    borderRadius: '8px'
  }
};
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="wrapper">
      <MainLayout></MainLayout>
    </div>
  </n-config-provider>
</template>
