<template>
  <v-container>
    <v-list class="bg-info text-center">
      <h3>Парні числа списку з 10 чисел</h3>
      <v-list-item v-for="(item, index) in filteredNumbers" :key="index">
        <p>{{ item }}</p>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      numbers: []
    };
  },
  computed: {
    filteredNumbers() {
      return this.numbers.filter(item => this.shouldDisplayItem(item));
    }
  },
  created() {
    this.generateNumbers();
  },
  methods: {
    generateNumbers() {
      for (let i = 0; i < 10; i++) {
        this.numbers.push(Math.floor(Math.random() * 100));
      }
    },
    shouldDisplayItem(item) {
      return item % 2 === 0;
    },
    toggleFilterCondition() {
      this.numbers = this.numbers.filter(item => this.shouldDisplayItem(item));
    }
  }
};
</script>

<style>

</style>













