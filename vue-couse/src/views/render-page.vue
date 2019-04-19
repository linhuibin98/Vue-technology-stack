<template>
  <div>
    <list :list="list" :render="renderFunc"></list>
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
    renderFunc (h, name) {
      return h('span', name)
    }
  }
}
</script>
