<template lang="">
  <div class="main">
    <div class="label"> {{ labelName }}</div>
    <select class="options">
      <option v-for="item in options" :key="item">{{ item }}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'LabelSelect',
  props: ['labelName', 'options']
}
</script>
<style scoped>
.main {
  margin-left: 15px;
  margin-top: 10px;
  height: 30px;
  border: 1px solid rgba(128, 128, 128, 0.466);
  display: flex;
}
.label {
  display: flex;
  width: 50px;
  align-items: center;
  justify-content: center;
}
.options {
  color: rgba(128, 128, 128, 0.466);
  border-left: 1px solid rgba(128, 128, 128, 0.466);
  border-top: none;
  border-bottom: none;
  border-right: none;
}
</style>

