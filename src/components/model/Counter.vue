<template>
  <v-app>
    <v-container class="text-center">
      <h2>{{ counter }}</h2>
      <v-btn @click="increment" color="success">+</v-btn>
      <v-btn @click="decrement" color="danger">-</v-btn>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'Counter',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },    
  },
};
</script>


