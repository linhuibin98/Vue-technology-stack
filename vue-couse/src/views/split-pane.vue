<template>
  <div class="split-pane-con">
    <split-pane :value.sync="value"></split-pane>
  </div>
</template>

<script>
import SplitPane from '../components/split-pane'
export default {
  name: 'split',
  data () {
    return {
      value: 0.5
    }
  },
  components: {
    SplitPane
  }
}
</script>

<style lang="less" scoped>
  .split-pane-con {
    width: 400px;
    height: 200px;
    background: papayawhip;
  }
</style>


