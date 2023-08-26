<template>
  <div class="chat">
    <n-card class="chat-container" title="user nickname">
      <div class="chat-container-msgs">
        <span v-for="msg in messages" :key="msg.id"> {{ msg }}</span>
      </div>
      <template #action>
        <div class="chat-action-container" justify="space-between">
          <n-input
            class="chat-msg-area"
            autosize
            size="medium"
            :autosize="{
              minRows: 1
            }"
            round
            v-model:value="msg"
            type="textarea"
            placeholder="Расскажи что-нибудь.."
          />
          <n-button class="chat-btn-snd-msg" circle ghost @click="onClickSendMsg">
            <ph-paper-plane-tilt :size="32" />
          </n-button>
        </div>
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { io } from 'socket.io-client';
import { ref } from 'vue';
import { PhPaperPlaneTilt } from '@phosphor-icons/vue';

const socket = io('http://localhost:3000');
socket.on('connect', function () {
  socket.on('recMessage', (response) => console.log(response));
  socket.emit('recMessage', 0, (response: any) => console.log('newMessage', response));
  console.log('Connected');
});

const messages = ref([{ id: 0, text: 'некоторый текст', is_read: false }]);

const msg = ref('');
const onClickSendMsg = () => {
  console.log(msg.value);
  msg.value = '';
  socket.emit('recMessage', msg);
};

socket.on('recMessage', function (data) {
  console.log('message', data);
});
// socket.on('events', function (data) {
//   console.log('event', data);
// });
// socket.on('exception', function (data) {
//   console.log('event', data);
// });
socket.on('disconnect', function () {
  console.log('Disconnected');
});
</script>
