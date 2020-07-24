<template>
  <div class="ticket">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'ticket',
  props: {
    text: String,
  },
  data: function () {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.ticket {
  border: 1px solid #f1f1f1;
  border-radius: 3px;
  padding: 5px 10px;
  margin: 5px 0px;
}
</style>