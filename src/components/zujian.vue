<template>
    <div class="contener">
        <transition-group enter-active-class="animated bounceInLeft" >
        <img :src="v" alt="" v-for="(v, index) in list" :key="index" v-show='index==curimg' >
        </transition-group>
        <div class="jiaod" v-show="fouce">
            <span v-for="(val,index) of list" :class="index==curimg?'cur':''"></span>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
        return {
           curimg:0
        }
      },
      props:{
        list:{
          type:Array,
          default:function(){
  			return [require('@/assets/7.jpg'),require('@/assets/13.jpg'),require('@/assets/17.jpg'),require('@/assets/17.jpg')];      

         
          }
        },
        fouce:{
          type:Boolean,
          default:true
        },
        imgtime:{
          type:Number,
          default:1000
        }
      },
      mounted:function(){
        setInterval(()=>{
            if(this.curimg===(this.list.length-1)){
              this.curimg=0;
            }else{
              this.curimg++;
            }
        },this.imgtime);
      }
    }
</script>

<style >

</style>