<template>
  <div>
    <v-text-field v-model="text" label="Binding"></v-text-field>
    <p>Значення текстового поля: {{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "BindingData",
  data() {
    return {
      text: ''
    };
  },
  mounted() {
    setTimeout(() => {
      this.text = 'Несподіване втручання!';
    }, 3000)
  }
};
</script>

<style>

</style>





<style>

</style>


