<template>
  <ul>
    <li v-for="(item, index) in list" :key="item + index">
      <span>{{item}}</span>
      <renderDom :name="item" :render-func="render"></renderDom>
    </li>
  </ul>
</template>

<script>
import RenderDom from '@/components/render-dom.js'
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
    RenderDom
  }
}
</script>
