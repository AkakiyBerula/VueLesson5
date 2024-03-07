<template>
  <div class="form-group">
    <v-text-field v-model="text" label="New Message"></v-text-field>
    <p> Результат вводу за полем: {{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "SingleModel",
  data() {
    return {
      text: ''
    }
  }
}
</script>




<style>

</style>


