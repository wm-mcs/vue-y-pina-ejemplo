import { defineStore } from "pinia";

export const chatState = defineStore("chat", {
  state: () => {
    return { messages: [] };
  },

  actions: {
    addMessage(message) {
      this.messages.push(message);
    }
  }
});
