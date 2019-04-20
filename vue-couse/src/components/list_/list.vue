<template>
  <ul>
    <li v-for="(item, index) in list" :key="item + index">
      <!-- <renderDom :list="item" :renderFn="render"></renderDom> -->
      <vnode :list="item" :renderFn="render"></vnode>
    </li>
  </ul>
</template>

<script>
// import RenderDom from '@/components/render-dom.js'
import Vnode from '@/components/Vnode.js'
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type:Function,
      default: () => {}
    }
  },
  components: {
    // RenderDom,
    Vnode
  }
}
</script>
