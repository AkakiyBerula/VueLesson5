<template>
  <div>
    <v-switch
      v-model="isActive"
      color="primary"
      :label="'Toggle'"
      
    ></v-switch>
    <p>Стан перемикача: {{ message }}, Кількість перемикань: {{ counter }}</p>
  </div>
</template>

<script>

export default {
  name: "ToggleModel",
  data() {
    return {
      isActive: false,
      counter: 0
    };
  },
  computed: {
    message() {
      return this.isActive ? 'Увімкнено' : 'Вимкнено'
    }
  },
  watch: {
    message () {
      this.counter++
    }
  }
};
</script>


<style>

</style>


