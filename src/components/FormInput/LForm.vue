<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from '../../mixins/findComp'
export default {
  mixins: ['findComponentsDownward'],
  data() {
    return {}
  },
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rule: {
      type: Object,
      required: false
    }
  },
  methods: {
    vaildate(cb) {
      const tasks = findComponentsDownward(this, 'LFormItem')
        .filter(item => item.prop)
        .map(item => item.vaildate())
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  }
}
</script>
