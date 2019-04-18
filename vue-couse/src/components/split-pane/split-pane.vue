<template>
  <div ref="outer" class="split-pane-wrapper">
    <div class="pane pane-left" :style="{width: leftOffsetPercent}"></div>
    <div class="pane-trigger-con" :style="{left: triggerLeft,width: triggerWidth + 'px'}" @mousedown="handleMousedown"></div>
    <div class="pane pane-right" :style="{left: leftOffsetPercent}">
      <button @click="changeOffset">改变大小</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  props:{
    triggerWidth: {
      type: Number,
      default: 8
    }
  },
  data () {
    return {
      leftOffset: 0.3,
      canMove: false
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.leftOffset * 100}%`;
    },
    triggerLeft () {
      return `calc(${this.leftOffsetPercent} - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    changeOffset () {
      this.leftOffset -= 0.02;
    },
    handleMousedown () {
      document.addEventListener('mousemove', this.handleMousemove);
      document.addEventListener('mouseup', this.handleMouseup);
      this.canMove = true;
    },
    handleMousemove (event) {
      if (!this.canMove) return;
      const outerRect = this.$refs.outer.getBoundingClientRect();
      const offset = event.pageX - outerRect.left;
      this.leftOffset = offset / outerRect.width;
    },
    handleMouseup () {
      this.canMove = false;
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
        height: 100%;
        background: yellow;
        position: absolute;
        top: 0;
        z-index: 9;
      }
    }
  }
</style>

