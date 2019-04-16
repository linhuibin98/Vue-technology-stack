<template>
  <div>
    <a-input v-model="inputValue"></a-input>
    <p>{{inputValue}}</p>
    <ashow :content='inputValue'></ashow>
    <b-input :value="stateValued" @input="handleStateValue"></b-input>          <!--vuex 数据的双向绑定 ，不能使用v-model直接赋值修改-->
    <p>{{stateValued}}</p>
    <p><button @click="handleClick">获取数据</button></p>
  </div>
</template>

<script>
import AInput from './AInput.vue'
import BInput from './BInput.vue'
import Ashow from './Ashow.vue'
import {getBook} from '../api/book.js'
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'store',
  data () {
    return {
      inputValue: '',
      book: {}
    }
  },
  components: {
    AInput,
    BInput,
    Ashow
  },
  methods: {
    ...mapMutations([
      'setValue'
    ]),
    handleStateValue (val) {
      // this.setValue(val);  //方法一
      this.stateValued = val;  //方法二
    },
    async getBk () {
      // let {data} = await getBook();
      // console.log(data)
    },
    handleClick () {
      getBook({name: 'lhb'}).then(res => {
        console.log(res)
      }); 
    }
  },

  computed: {
    ...mapState({
      // stateValued: state => state.stateValued   //方法一
    }),
    //方法二
    stateValued: {
      get () {
        return this.$store.state.stateValued;
      },
      set (val) {
        this.setValue(val);
      }
    }
  },
}
</script>
