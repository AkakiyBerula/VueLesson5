<template>
  <div class="greetings">
    <h1 class="green text-center">Hello User</h1>

    <v-divider></v-divider>

    <SingleModel />

    <v-divider></v-divider>

    <BindingData />

    <v-divider></v-divider>

    <Counter />
  </div>
</template>

<script>
import SingleModel from './model/SingleModel.vue';
import BindingData from './model/BindingData.vue';
import Counter from './model/Counter.vue';

export default {
  name: "HelloWorld",
  components: {
    SingleModel,
    BindingData,
    Counter
  },
  data() {
    return {
      input: ''
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
