<template>
  <div>
    <HocCustomCom :value="value" :rules="rules" />
  </div>
</template>

<script>
import HocFunc from './custominput/hoc'
import CustomInput from './custominput/index'

const HocCustomCom = HocFunc(CustomInput)

export default {
  components: {
    HocCustomCom,
    CustomInput,
    HocFunc
  },
  data() {
    return {
      value: '',
      rules: [
        {
          test: function(value) {
            return /\d+/.test(value)
          },
          message: '请输入一个数字'
        }
      ]
    }
  }
}
</script>

<style>
</style>
