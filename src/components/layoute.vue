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
  <div class="w-full bg-gray-400">
    <div :class="`container mx-auto flex flex-col items-center`">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
