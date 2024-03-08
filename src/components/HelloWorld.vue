<template>
  <div class="greetings">
    <h1 class="green text-center">Hello User</h1>

    <div>
      <CustomSelect :options="['Червоний', 'Синій', 'Зелений', 'Жовтий', 'Оранжевий', 'Фіолетовий']" @sel="chooseSelectedOptions" />
      <p class="text-justify">Вибраний улюблений колір: {{ selectedOption }}</p>
    </div>

    <v-divider></v-divider>

    <SingleModel />

    <v-divider></v-divider>

    <BindingData />

    <v-divider></v-divider>

    <Counter />

    <ToggleModel />

    <DynamicClass />
  </div>
</template>

<script>
import SingleModel from './model/SingleModel.vue';
import BindingData from './model/BindingData.vue';
import Counter from './model/Counter.vue';
import ToggleModel from './model/ToggleModel.vue';
import DynamicClass from './model/DynamicClass.vue';
import CustomSelect from './model/CustomSelect.vue';

export default {
  name: "HelloWorld",
  components: {
    SingleModel,
    BindingData,
    Counter,
    ToggleModel,
    DynamicClass,
    CustomSelect
  },
  data() {
    return {
      input: '',
      selectedOption: ''
    }
  },
  methods: {
    chooseSelectedOptions (newValue) {
      console.log ("Дані передано")
      this.selectedOption = newValue
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
