<template>
  <div>
    <label v-if="label">{{ label }} </label>
    <slot></slot>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'LFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      required: false
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      error: ''
    }
  },
  mounted() {
    this.$on('vaildate', () => {
      this.vaildate()
    })
  },
  methods: {
    vaildate() {
      const rules = this.form.rule[this.prop]
      const value = this.form.model[this.prop]
      //   校验对象
      const desc = { [this.prop]: rules }
      const schema = new Schema(desc)
      return schema.validate({ [this.prop]: value }, error => {
        if (error) {
          this.error = error[0].message
        } else {
          this.error = ''
        }
      })
    }
  }
}
</script>
