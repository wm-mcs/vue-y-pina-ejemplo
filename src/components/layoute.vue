<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  foo: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="w-full">
    <div>
      Header <b>{{ msg }} {{ foo }}</b>
    </div>
    <slot></slot>

    <div>Footer</div>
  </div>
</template>

<style scoped></style>
