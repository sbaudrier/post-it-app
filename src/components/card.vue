<template>
  <div>
    <h1>{{ step.titre }}</h1>
    <div>{{ step.contenue }}</div>
    <input type="text" v-model="test" />
    <button v-on:click="addStep(index)">Add</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      test: "",
    };
  },
  methods: {
    addStep(index) {
      if (this.test != "") {
        this.$store.state.step[index].contenue.push(this.test);
        this.test = "";
      }
    },
  },
  props: {
    step: Object,
    index: undefined,
  },
};
</script>
