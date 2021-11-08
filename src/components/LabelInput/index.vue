<template lang="">
  <div class="main">
    <div class="label"> {{ labelName }}</div>
    <input class="input" :placeholder="inputName">
  </div>
</template>
<script>
export default {
  name: 'LabelInput',
  props: ['labelName', 'inputName']
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
  width: 40px;
  align-items: center;
  justify-content: center;
}
.input {
  border-left: 1px solid rgba(128, 128, 128, 0.466);
  border-top: none;
  border-bottom: none;
  border-right: none;
}
</style>

