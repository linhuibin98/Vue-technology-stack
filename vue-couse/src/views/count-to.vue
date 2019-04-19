<template>
  <div>
    <count-to ref="counter" :end-val="endVal" @animation-end="endNum">
      <span slot="left">计数器：</span>
      <span slot="right">完美</span>
    </count-to>
    <button @click="getNum">获取数值</button>
    <button @click="changeVal">改变数值</button>
  </div>
</template>

<script>
import CountTo from '@/components/count-to'
export default {
  name: 'count_to',
  data() {
    return {
      endVal: 100
    }
  },
  components: {
    CountTo
  },
  methods: {
    getNum () {
      console.log(this.$refs.counter)
      this.$refs.counter.getNum();
    },
    changeVal () {
      this.endVal = Math.random() * 1000;
    },
    endNum (num) {
      console.log(num);
    } 
  }
}
</script>