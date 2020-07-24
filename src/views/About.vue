<template>
  <div class="about">
    <input type="text" v-model="postItTitle"/> 
    <button v-on:click="addCard(index)"> Add Post it</button> 
    <div v-for= "(step, index) in $store.state.step" :key="index">
      <Card ref="card" :step="step" :index="index"/>
      <button v-on:click="test(index)"> Add </button>   
    </div>
  </div>
</template>

<script>
import Card from "@/components/card.vue"

export default {
    data: function () {
    return {
      postItTitle: ""
    }
  },
  components: {
    Card
  },
  methods: {
    addCard() {
      if(this.postItTitle != "") {
        this.$store.state.step.push({
          titre: this.postItTitle,
          contenue: []
       })
      }
    },
    test(index) {
      this.$refs.card.addStep(index)
    }
  }
}
</script>
