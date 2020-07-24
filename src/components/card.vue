<template>
  <div>    
    <h1> {{ step.titre }}  </h1>
    <div> {{ step.contenue }} </div>
    <input type="text" v-model="test"/> 
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      test: ""
    }
  },
  methods: {
    addStep(index) {
      this.$store.state.step[index].contenue.push(this.test)
    }
  },
  props:{
      step: Object, index: undefined
  },  
}
</script>
