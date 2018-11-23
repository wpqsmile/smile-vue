<template>
	<div>
	     <transition>
	     	<slot></slot>
	     </transition>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'transitionfade'
	}
</script>

<style type="text/css" >
.v-enter{
	opacity: 0;
}
.v-enter-to{
	opacity: 1;
}
.v-enter-active{
	transition: all 0.3s;
}

.v-leave{
	opacity: 1;
}
.v-leave-to{
	opacity: 0;
}
.v-leave-active{
	transition: all 0.3s;
}
	
	
</style>