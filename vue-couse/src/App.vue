<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/parent">Patent</router-link>
    </div>
    <transition-group name="router">
      <router-view key='default'/>
      <router-view key="Email" name="email"/>
      <router-view key="Tel" name="tel" />
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.router-enter {
  opacity: 0;
}
.router-enter-active {
  transition: opacity 1s ease;
}
.router-enter-to {
  opacity: 1;
}
.router-leave {
  opacity: 0;
}
.router-leave-active {
  transition: opacity 1s ease;
}
.router-leave-to {
  opacity: 1;
}
</style>
