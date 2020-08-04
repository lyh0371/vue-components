<!--
 * @Date: 2020-08-03 14:31:15
-->
<template>
  <div class="home">
    <l-form></l-form>
    <p @click="$store.commit('add')">{{$store.state.num}}</p>
    <p @click="$store.dispatch('add')">{{$store.state.num}}</p>
    <p @click="$store.dispatch('add')">{{$store.getters.num}}</p>

    <!-- <router-view></router-view> -->
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
  methods: {
   
  }
}
</script>

<style scope>
.home {
  width: 500px;
  margin: 50px auto;
}
</style>
