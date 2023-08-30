<script setup lang="ts">
import { ref, toRefs } from 'vue';

const props = defineProps<{
  title?: string;
  dto: { value: Object; label: Object };
  item?: Object;
  selectRaw: Object;
}>();
const { title, dto, item, selectRaw } = toRefs(props);
const formValue = ref(Object.assign(props.dto.value));
</script>

<template>
  <div class="form-card">
    <div v-for="formProp in Object.keys(formValue)" :key="formProp">
      <div v-if="selectRaw[formProp]">
        <n-select :options="selectRaw[formProp]" v-model:value="dto.value[formProp]"></n-select>
      </div>
      <div v-else class="inputBox">
        <input type="text" required="required" :value="dto.value[formProp]" />
        <span class="user">{{ dto.label[formProp] }}</span>
      </div>
    </div>
    <div class="form-action">
      <slot></slot>
    </div>
  </div>
</template>
