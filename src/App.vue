<script setup>
import { onBeforeMount, onMounted, ref, reactive, computed } from "vue";
import Layout from "./components/layoute.vue";
import Chat from "./components/chat/chat.vue";

const text = ref("MAURICO");
const data = ref([{ name: "Pablo" }, { name: "Mario" }]);

function buttonClick() {
  data.value.push({ name: text.value });
  text.value = "Defecto";
}
</script>

<template>
  <Layout msg="Mensaje" foo="De Mauricio">
    <div class="container flex flex-col items-center space-y-6 py-6">
      <h1 class="text-3xl font-bold">Chat de prueba</h1>
      <Chat> </Chat>
    </div>
  </Layout>
</template>

<style></style>
