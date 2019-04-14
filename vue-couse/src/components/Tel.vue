<template>
  <div>
    <p>tel: 1112324564</p>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'tel',
  data () {
    return {
      message: ''
    }
  },
  mounted() {
    this.$bus.$on('showMessage', (meg) => {
      this.message = meg;
    })
  },
}
</script>
