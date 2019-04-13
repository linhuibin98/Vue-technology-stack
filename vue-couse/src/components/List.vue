<template>
  <div>
    {{this.$route.params.name}}
    {{food}}
    <p>{{this.$store.state.name}}</p>
  </div>
</template>


<script>
export default {
  props: {
    food: String,
    default: 'apple'
  }
}
</script>

