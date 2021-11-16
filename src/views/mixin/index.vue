<template>
  <div>
    <div>mixin的使用</div>
    <input type="text" @blur="blur">
    {{ errmsg }}
  </div>
</template>

<script>
import validateMixin from '@/layout/index.vue'

export default {
  mixins: [validateMixin],
  data: () => ({ errmsg: '' }),
  methods: {
    blur() {
      this.validate()
    }
  }
}
</script>

<style>
</style>
