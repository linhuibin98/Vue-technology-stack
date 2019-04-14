<template>
  <div>
    <p>Ashow: {{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: [String, Number],
    default: ''
  }
}
</script>