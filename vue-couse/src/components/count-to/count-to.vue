<template>
  <div>
    <slot name="left"></slot>
    <span ref="count" :id="eleId" :class="countClass"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup';
export default {
  name: 'CountTo',
  data () {
    return {
      counter: {}
    }
  },
  computed: {
    eleId () {
      return `${this._uid}`;
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  props: {
    className: {
      type: String
    },
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    /**
     * @description 小数点后保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 动画延迟开始时间
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @description 渐变时长
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * description 是否使用变速效果
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * @description 分组符号
     */
    separactor: {
      type: String,
      default: ','
    },
    /**
     * @description 整数和小数的分隔符
     */
    decimal: {
      type: String,
      default: '.'
    }

  },
  methods: {
    getNum () {
      console.log(this.$refs.count.innerText);
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal);
      setTimeout(() => {
        this.$emit('getEndNum', this.$refs.count.innerText);
      }, 1005)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separactor: this.separactor,
        decimal: this.decimal
      });
      setTimeout(() =>{
        this.counter.start();
      }, this.delay);
    })
  }
}
</script>

<style lang="less" scoped>
@import './count-to.less';
</style>
