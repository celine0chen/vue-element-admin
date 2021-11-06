<template>
  <div>
    <el-input v-model="value" @blur="onBlur"></el-input>
  </div>
</template>

<script>
export default {
  props: {
    name: "CustomInput",
    initValue: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      value: this.initValue
    };
  },
  methods: {
    onBlur() {
      this.$emit("blur", this.value);
      // debugger;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>