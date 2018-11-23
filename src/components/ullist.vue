<template>
    <div class="wapp">
        <h2>周末去哪玩</h2>
        <div v-for="(item, index) in weekendlist" :key="index">
            <router-link to="./xqing">
            <img :src="item.imgUrl">
            </router-link>
            <p class="p_one">{{item.title}}</p>
            <p class="p_two">{{item.desc}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"ullist",
        props:['weekendlist'],
    }
</script>

<style scoped lang="less">
   .wapp{
       h2{
        text-indent: 10px;
        font-size: 28px;
        line-height: 60px;
        background-color: #ddd;
       }
       div{
           img{
               width: 100%;
           }
           .p_one{
               line-height: 40px;
               font-weight: bold;
               text-indent: 10px;

           }
           .p_two{
               line-height: 40px;
               text-indent: 10px;
               color: #aaa;

           }
       }
   }
</style>