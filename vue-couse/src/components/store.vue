<template>
  <div>
    <a-input v-model="inputValue"></a-input>
    <p>{{inputValue}}</p>
    <ashow :content='inputValue'></ashow>
  </div>
</template>

<script>
import AInput from './AInput.vue'
import Ashow from './Ashow.vue'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    Ashow
  }
}
</script>
