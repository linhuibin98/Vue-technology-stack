<template>
  <div>
    <router-link tag="button" :to="{name: 'List', params: {name: 'nihaoa1'}}">去列表页</router-link>
    <button @click="toParent">去parent</button>
    <router-link tag="button" :to="{name: 'About'}">去About</router-link>   
  </div>
</template>

<script>
//组件内路由钩子：beforeRouteEnter: 无法调用this, beforeRouteLeave, beforeRouteUpdate

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('enter');
    next();
  },
  beforeRouteLeave (to, from, next) {
    // alert('你确定要离开吗？？？');
    next();
  },
  methods: {
    toParent () {
      const id = 99;
      this.$router.push(`/parent/child/${id}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
