<template>
  <div>
    <input :type="type" :value="value" @input="change" v-bind="$attrs" />
  </div>
</template>

<script>
import { findComponentUpward } from '../../mixins/findComp'
export default {
  inheritAttrs: false,
  data() {
    return {}
  },
  props: {
    value: {
      type: String
    },
    type: {
      type: String
    }
  },
  methods: {
    change(e) {
      this.$emit('input', e.target.value)
      //  通知父级去校验
      //   this.$parent.$emit('vaildate')
      findComponentUpward(this, 'LFormItem').$emit('vaildate')
    }
  },
  mounted() {}
}
</script>
