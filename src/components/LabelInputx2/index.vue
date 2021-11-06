<template lang="">
  <div class="main">
  <span class="label"> {{labelName}}</span>
  <input class="input" v-bind:placeholder="inputName">
  <input class="input2" v-bind:placeholder="inputName2">
  </div>
</template>
<script>
export default {
  name: "LabelInputx2",
  props: ["labelName", "inputName", "inputName2"]
};
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
  align-items: center;
  justify-content: center;
}
.input {
  border-left: 1px solid rgba(128, 128, 128, 0.466);
  border-top: none;
  border-bottom: none;
  border-right: none;
  width: 30px;
}
.input2 {
  border-left: 1px solid rgba(128, 128, 128, 0.466);
  border-top: none;
  border-bottom: none;
  border-right: none;
  width: 30px;
}
</style>

