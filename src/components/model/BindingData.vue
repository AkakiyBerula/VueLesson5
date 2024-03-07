<template>
  <div>
    <v-text-field v-model="text" label="Text"></v-text-field>
    <p>Значення текстового поля: {{ text }}</p>
    <v-text-field v-model="number" label="Number"></v-text-field>
    <p>Значення числового поля: {{ number }}</p>

    <v-checkbox v-model="checkbox" label="Очистити поля" @change="clearFields"></v-checkbox>
  </div>
</template>

<script>
export default {
  name: "BindingData",
  data() {
    return {
      text: '',
      number: null,
      checkbox: false
    };
  },
  methods: {
    clearFields() {
      if (this.checkbox) {
        this.text = '';
        this.number = null;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.text = 'Несподіване втручання!';
      this.number = 42
    }, 3000)
  }
};
</script>

<style>

</style>





<style>

</style>


