<template>
  <div class="split-pane-wrapper">
    <div class="pane pane-left" :style="{width: leftOffsetPercent}"></div>
    <div class="pane-trigger-con"></div>
    <div class="pane pane-right" :style="{left: leftOffsetPercent}">
      <button @click="changeOffset">改变大小</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  data () {
    return {
      leftOffset: 0.3
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.leftOffset * 100}%`;
    }
  },
  methods: {
    changeOffset () {
      this.leftOffset -= 0.02;
    }
  }
}
</script>

<style lang="less" scoped>
  .split-pane-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
    .pane {
      height: 100%;
      position: absolute;
      top: 0;
      &-left {
        // width: 30%;
        background: firebrick;
      }
      &-right {
        right: 0;
        bottom: 0;
        // left: 30%;
        background: deepskyblue;
      }
      &-trigger-con {
        width: 8px;
        height: 100%;
        background: yellow;
        position: absolute;
        top: 0
      }
    }
  }
</style>

