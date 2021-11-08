<template lang="">
  <button class="button">
    <svg-icon icon-class="arrow-right" class-name="card-panel-icon" />{{ name }}
  </button>
</template>
<script>
export default {
  name: 'ResetButton',
  props: ['name']
}
</script>
<style scoped>
.button {
  border: none;
  width: 60px;
  margin-left: 15px;
  margin-top: 10px;
  height: 30px;
  background-color: #c2c2c2;
  color: white;
}
</style>

