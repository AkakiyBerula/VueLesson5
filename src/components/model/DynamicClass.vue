<template>
  <div>
    <label for="class-select">Оберіть клас для зміни:</label>
    <select class="form-select" v-model="selectedClasses" multiple>
      <option value="red">Червоний</option>
      <option value="blue">Синій</option>
      <option value="green">Зелений</option>
      <option value="bold">Жирний</option>
      <option value="italic">Курсив</option>
    </select>

    <div class="block-style">
      <p class="text-center" :class="selectedClasses">Текст зі стилізацією</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicClasses",
  data() {
    return {
      selectedClasses: ['red', 'green', 'blue', 'yellow', 'bold', 'italic']
    };
  }
};
</script>


<style>
.block-style {
  margin-top: 10px;
  background-color:aqua;
  width: 40%;
  margin-left: 30%;
  padding-top: 5px;
  padding-bottom: 5px
}
.red {
  color: red;
}

.green {
  color: green
}

.blue {
  color: blue;
}

.yellow {
  color: yellow
}

.bold {
  font-weight: bold
}

.italic {
  font-style: italic
}

</style>


