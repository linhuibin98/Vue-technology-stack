<template>
  <div>
    <list :list="list" :render="renderFn"></list>
  </div>
</template>

<script>
import List from '@/components/list_/index.js'
export default {
  data () {
    return {
      list: ['llll', 'kkkk']
    }
  },
  components: {
    List
  },
  methods: {
    renderFn (h, name) {
      return h('i', name)
    }
  }
}
</script>
