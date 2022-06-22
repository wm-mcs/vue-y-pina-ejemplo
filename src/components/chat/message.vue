<script setup>
defineProps({
  belongToUserAuth: {
    type: Boolean,
    required: true
  },
  message: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <li
    :class="`${belongToUserAuth ? 'flex justify-end ' : 'flex justify-start'}`"
  >
    <div>
      <div
        :class="
          `relative max-w-xl px-4 py-2 text-gray-600 rounded shadow ${
            belongToUserAuth ? 'bg-blue-50' : 'bg-white'
          }
          `
        "
      >
        <span class="block">{{ message.text }}</span>
      </div>
      <div
        :class="
          `${
            belongToUserAuth ? 'text-end' : ''
          } text-[8px] text-gray-300 mt-1 px-1`
        "
      >
        {{ belongToUserAuth ? "Tú" : message.user.name }} {{ message.date }}
      </div>
    </div>
  </li>
</template>

<style scoped></style>
