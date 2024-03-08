<template>
  <div class="custom-select">
    <div class="col-md-5">
      <label for="country" class="form-label">Оберіть ваший улюблений колір</label>
      <select class="form-select" v-model="value">
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      value: ''
    }
  },
  watch: {
    value (newValue) {
      this.$emit('sel', newValue);
    }
  }
};
</script>

<style scoped>

</style>



