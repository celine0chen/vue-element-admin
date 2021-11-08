<template lang="">
  <button class="button">
    <svg-icon icon-class="search" class-name="card-panel-icon" />{{ name }}
  </button>
</template>
<script>
export default {
  name: 'SearchButton',
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
  background-color: #1e84c6;
  color: white;
}
</style>

