<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useLogger } from 'vue-logger-plugin';
import { CreateUserDto } from '@/dto/create-user.dto';
import TheForm from '@/components/TheForm.vue';
import TheSpinner from '@/components/TheSpinner.vue';
import { PhChatsCircle, PhEyeSlash, PhEye } from '@phosphor-icons/vue';
import { generatePass } from '@/services/utils.service';
import { randomIntFromInterval } from '@/services/utils.service';

const log = useLogger();
const autoCreatedUser = ref(new CreateUserDto());
const loading = ref({ main: false, autoCreateUser: false });
const anonymUser = ref(false);
onMounted(() => {
  log.warn('mounted');
});

const onClickAnonym = () => {
  loading.value.autoCreateUser = true;
  log.warn(anonymUser.value);
  if (anonymUser.value) {
    log.info('created user');
    autoCreatedUser.value = new CreateUserDto(
      `user#${randomIntFromInterval()}${randomIntFromInterval()}${randomIntFromInterval()}`,
      generatePass(5)
    );
    log.info(autoCreatedUser.value);
  } else {
    autoCreatedUser.value = new CreateUserDto();
  }
  loading.value.autoCreateUser = false;
};
</script>

<template>
  <main class="home" v-if="!loading.main">
    <!-- <n-card class="form-container" title="создание образа"> -->
    <div class="card-container">
      <n-space vertical justify="center" align="center" class="pt-3">
        <a class="form-title">войти/присоединиться</a>
        <div class="mt-2">
          <n-space vertical justify="center" align="center">
            <n-switch v-model:value="anonymUser" size="large" class="mb-4" @click="onClickAnonym">
              <template #checked-icon>
                <n-icon :component="PhEyeSlash"></n-icon>
              </template>
              <template #unchecked-icon>
                <n-icon :component="PhEye"></n-icon>
              </template>
            </n-switch>
            <n-collapse-transition class="collapse-container" :show="anonymUser">
              <span class="msg-container text-spacing hover-red"
                >создал тебе временный аккаунт..</span
              >
            </n-collapse-transition>
          </n-space>
        </div>
        <TheSpinner v-if="loading.autoCreateUser"></TheSpinner>
        <TheForm
          v-else
          :dto="autoCreatedUser"
          :selectRaw="{
            sex: [
              { label: 'мужской', value: 'man' },
              { label: 'женский', value: 'women' }
            ]
          }"
        >
          <n-space vertical justify="center" align="center">
            <!-- <n-tag class="cu-tag" size="medium" closable> Real Love </n-tag> -->

            <div class="cu-btn hover-red">
              <ph-chats-circle class="hover-red" :size="32" />
            </div>
          </n-space>
        </TheForm>
      </n-space>
    </div>

    <!-- </n-card> -->
  </main>
</template>
