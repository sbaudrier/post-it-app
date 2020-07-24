<template>
  <div class="card">
    <h1>{{ step.titre }}</h1>
    <input type="text" v-model="test" />
    <button v-on:click="addStep(index)">Add</button>
    <div
      v-for="(ticket, index) in $store.state.step[index].contenue"
      :key="index"
    >
      <Ticket :text="ticket" />
    </div>
  </div>
</template>

<script>
import Ticket from "@/components/Ticket.vue";

export default {
  components: {
    Ticket,
  },
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

<style scoped>
.card {
  margin: 20px;
}
</style>
