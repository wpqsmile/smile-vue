<template>
  <swiper class="banner" :options="swiperOption" ref="mySwiper" v-if=swiperlist.length>
    
    <swiper-slide v-for="(v,index) of swiperlist" :key="index">
     <img :src="v.imgUrl">
    </swiper-slide>
    
  </swiper>
</template>

<script>
  export default {
    name:"swip",
    props:["swiperlist"],
    data:function(){
      return{
        swiperOption: {
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          loop: true,
          // autoplay: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
        },
      }
    },
    computed: {
      swiper() {
        // 然后你就可以使用this的swiper对象去做你想做的事了
        return this.$refs._one.swiper
      }
    },
    created(){
      // console.log(this.swiperlist)
    }
  }
</script>

<style scoped lang="less">
  .swiper-wrapper{
    img{
      width:100%;
    }
  }
</style>