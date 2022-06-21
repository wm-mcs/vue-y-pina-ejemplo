<script setup>
import { onBeforeMount, onMounted, ref, reactive, computed } from "vue";
import Layout from "./components/layoute.vue";

const text = ref("MAURICO");
const data = ref([{ name: "Pablo" }, { name: "Mario" }]);

function buttonClick() {
  data.value.push({ name: text.value });
  text.value = "Defecto";
}
</script>

<template>
  <Layout msg="Mensaje" foo="De Mauricio">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>

    <h2>{{ text }}</h2>
    <input type="text" v-model="text" />

    <button @click="buttonClick">Agregar</button>

    <div v-for="item in data">
      {{ item.name }}
    </div>
  </Layout>
</template>

<style></style>
