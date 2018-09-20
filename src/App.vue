<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <div class="phrase">
        <router-view/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
