<!--
 * @Date: 2020-08-03 14:49:19
-->
<template>
  <l-form :model="userInfo" :rule="ruleValidate" ref="loginForm">
    <l-form-item label="姓名" prop="name">
      <l-input
        v-model="userInfo.name"
        type="name"
        placeholder="请输入密码"
      ></l-input>
    </l-form-item>
    <l-form-item label="邮箱" prop="mail">
      <l-input
        v-model="userInfo.mail"
        type="text"
        placeholder="请输入邮箱"
      ></l-input>
    </l-form-item>
    <l-form-item>
      <button @click="login">提交</button>
    </l-form-item>
  </l-form>
</template>

<script>
import LInput from '@/components/FormInput/LInput'
import LFormItem from '@/components/FormInput/LFormItem'
import LForm from '@/components/FormInput/LForm'
export default {
  components: {
    LInput,
    LFormItem,
    LForm
  },
  data() {
    return {
      userInfo: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs['loginForm'].vaildate(res => {
        if (res) {
          this.$Alert({
            content: '验证成功'
          })
        } else {
          this.$Alert({
            content: '验证失败'
          })
        }
      })
    }
  }
}
</script>
