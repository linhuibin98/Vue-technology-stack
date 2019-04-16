<template>
  <div>
    <router-link tag="button" :to="{name: 'List', params: {name: 'nihaoa1'}}">去列表页</router-link>
    <button @click="toParent">去parent</button>
    <router-link tag="button" :to="{name: 'About'}">去About</router-link>
    <p>name: {{name}}</p>
    <p>username: {{username}}</p> 
    <p><button @click="handleChangeName">修改name</button></p> <!--修改state.name -->
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
// 二、若vuex的module使用了命名空间
/*
import {createNamespacedHelpers} from 'vuex'
const { mapState } = createNamespacedHelpers('user');
*/

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
    ...mapMutations([    // mutations中的方法注册到vue实例中
      'handleName',
    ]),
    toParent () {
      const id = 99;
      this.$router.push(`/parent/child/${id}`);
    },
    handleChangeName () {
      //方式一
      // this.$store.commit('handleName', 'dsdfas');  //跳过actions，直接调用mutations修改，更新视图
      
      //方式二
      this.handleName('nnnnnnn')
    }
  },
  computed: {
    //若使用了命名空间
      //一：引入 createNamespacedHelpers
      /*
      ...mapState({
       username: state => state.username
      })
      */
     //二：直接在mapState的第一个参数中，赋值为命名空间的name

    ...mapState('user', {
      username: state => state.username
    }),

    ...mapState({
      name: state => state.name
    }),

    


    // 方式二，使用vuex 上的 mapState，mapMutation .....方法
    /*
    ...mapState({
      name: state => state.name,
      username: state => state.user.username
    })
    */

    //调用 store 方式一
    /*
    name () {
      return this.$store.state.name;
    },
    username () {
      return this.$store.state.user.username;
    }
    */
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
