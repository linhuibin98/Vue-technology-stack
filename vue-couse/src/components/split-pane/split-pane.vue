<template>
  <div ref="outer" class="split-pane-wrapper">
    <div class="pane pane-left" :style="{width: leftOffsetPercent}"></div>
    <div class="pane-trigger-con" :style="{left: triggerLeft,width: triggerWidth + 'px'}" @mousedown="handleMousedown"></div>
    <div class="pane pane-right" :style="{left: leftOffsetPercent}"></div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  props:{
    value: {
      type: Number,
      default: 0.3
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      props: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data () {
    return {
      // leftOffset: 0.3,
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.value * 100}%`;
    },
    triggerLeft () {
      return `calc(${this.leftOffsetPercent} - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleMousedown (event) {
      document.addEventListener('mousemove', this.handleMousemove);
      document.addEventListener('mouseup', this.handleMouseup);
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left;
      this.canMove = true;
    },
    handleMousemove (event) {
      if (!this.canMove) return;
      const outerRect = this.$refs.outer.getBoundingClientRect();
      let offsetPercent = (event.pageX -this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width;
      if (offsetPercent <= this.min) {
        offsetPercent = this.min;
      } else if (offsetPercent >= this.max) {
        offsetPercent = this.max;        
      }
      this.$emit('update:value', offsetPercent);
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
        user-select: none;
        cursor: col-resize;
      }
    }
  }
</style>

