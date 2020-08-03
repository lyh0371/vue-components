<!--
 * @Date: 2020-08-03 14:31:15
-->
<template>
  <div class="home">
    <l-form></l-form>
  </div>
</template>

<script>
import LForm from './components/LForm'
export default {
  name: 'Home',
  components: {
    LForm
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style scope>
.home {
  width: 500px;
  margin: 50px auto;
}
</style>
