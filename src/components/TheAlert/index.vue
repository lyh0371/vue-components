<!--
 * @Date: 2020-08-03 14:42:30
-->
<template>
  <div class="theAlert" v-if="show">
    {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      msg: 'nihao'
    }
  }
}
</script>
<style scope>
.theAlert {
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 10%;
  left: 50%;
  margin-left: -100px;
  background: #333;
  color: #fff;
}
</style>
