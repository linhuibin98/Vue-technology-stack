<template>
  <div>
    <p><button @click="handleClick">点我</button></p>
    <p>Email: 10323555354@qq.com</p>
  </div>
</template>

<script>
export default {
  name: 'email',
  methods: {
    handleClick () {
      this.$bus.$emit('showMessage', '你好啊~~~');
    }
  },
}
</script>

