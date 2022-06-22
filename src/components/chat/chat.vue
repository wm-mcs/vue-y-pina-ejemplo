<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Message from "./../chat/message.vue";
import { chatState } from "./../../states/chatState";

defineProps({});

/**
 * S puede validar data ----> leer sobre esto --
 */
const emit = defineEmits({
  message(payload) {}
});

/**
 * El usuario conectado
 */
const userAuth = {
  name: "Mauricio Costanzo",
  email: "mauricio@vue.com"
};

/**
 * Otros usuarios
 */
const otherUsers = [
  {
    name: "Marcelo Bagnasco",
    email: "marcelo@vue.com"
  },
  {
    name: "Federico Vázquez",
    email: "federico@vue.com"
  }
];

const message = ref("");
const stateChat = chatState();
const messages = stateChat.messages;
const addingMessage = ref(false);
const count = ref(0);

/**
 * Id del setInterval
 */
let interval = "";

/**
 * Genero mensajes de otros suarios d emanera aleatoria
 */
onMounted(() => {
  interval = setInterval(function() {
    count.value++;
    stateChat.addMessage({
      text: `Mensaje número ${count.value}`,
      user: otherUsers[Math.floor(Math.random() * (otherUsers.length - 0)) + 0],
      date: new Date().toLocaleString("uy", { timeZoneName: "short" })
    });
  }, 10000);
});

/**
 * Saneo de "interval" antes de destruir
 */
onUnmounted(() => clearInterval(interval));

/**
 * Enviar mensaje
 */
const addMessage = () => {
  if (message.value != "") {
    addingMessage.value = true;

    stateChat.addMessage({
      text: message.value,
      user: userAuth,
      date: new Date().toLocaleString("uy", { timeZoneName: "short" })
    });

    message.value = "";
    addingMessage.value = false;
  }
};
</script>

<template>
  <div class="w-full lg:w-1/2 rounded-xl p-8 bg-slate-50">
    <div class="container mx-auto">
      <div class="max-w-2xl border rounded">
        <div>
          <div class="w-full">
            <div
              class="relative flex items-center p-3 border-b border-gray-300"
            >
              <span class=" w-3 h-3 bg-green-600 rounded-full  "> </span>
              <span class="block ml-2 font-bold text-gray-600"
                >Sessión Chat {{ message }}</span
              >
            </div>
            <div class="relative w-full p-6 overflow-y-auto h-[300px]">
              <div
                v-if="messages.length < 1"
                class="p-5 text-center my-5 text-gray-300 text-2xl"
              >
                Aún no hay mensages. ¡Escribe el primero!
              </div>
              <ul v-else class="space-y-2">
                <Message
                  :belongToUserAuth="message.user.name == userAuth.name"
                  :message="message"
                  v-for="message in messages"
                  :key="`message ${message.date} ${message.user.name}`"
                ></Message>
              </ul>
            </div>

            <div
              class="flex items-center justify-between w-full p-3 border-t border-gray-300"
            >
              <input
                type="text"
                placeholder="Message"
                class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                @keyup.enter="addMessage"
                name="message"
                v-model="message"
                required
              />

              <button
                type="submit"
                @click="addMessage"
                :style="{
                  opacity: addingMessage ? '0.5' : '1',
                  pointerEvents:
                    addingMessage || message.length == 0 ? 'none' : 'auto'
                }"
              >
                <svg
                  class="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
