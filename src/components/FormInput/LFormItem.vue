<!--
 * @Date: 2020-08-03 14:31:15
-->
<template>
  <div>
    <div class="formitem">
      <label v-if="label">{{ label }}</label> <slot></slot>
    </div>
    <p v-if="error" class="error">{{ error }}</p>
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

<style scope>
.formitem {
  display: flex;
  padding: 10px;
}
label {
  padding-right: 20px;
}
.error {
  color: red;
  font-size: 12px;
  display: inline-block;
  padding-left: 60px;
}
</style>
