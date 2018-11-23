<template>
  <div id="app">
  	<div ref='ref1'></div>
    <transition 
    enter-active-class="animated zoomIn"
    >       
      	<router-view/> 	    
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
</style>
