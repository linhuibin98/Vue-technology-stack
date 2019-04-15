<template>
  <div>
    <input type="text" v-model="content">
    <p>{{content}}</p>
    <p>{{inputValueLastLetter}}</p>
    <p>userName: {{this.$store.state.name}}, appNameWithVersion: {{appNameWithVersion}}</p>
  </div>
</template>

<script>
// vuex 中的 getters
  //获取方式一: computed属性中利用 this.$store.getters.
  //方式二：利用vux中的 mapGetters 方法
// 二： 模块中的 getters
/**
 * 同 mapState一样，省略...
 * getters 可以在vuex中 计算 state 的 属性值，可以作用于全局
 */

import { mapGetters } from 'vuex'
export default {
  name: 'getter',
  data () {
    return {
      content: ''
    }
  },
  computed: {
    inputValueLastLetter () {   //input中最后输入的字符
      return this.content.substr(-1, 1)
    },

    //方式二
    ...mapGetters(['appNameWithVersion'])

    //获取方式一
    /*
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion;
    }
    */
  }
}
</script>
