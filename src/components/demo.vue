<template>
    <div>
        <heads></heads>
        <router-link to="./xqing">
        <swip :swiperlist="swiperlist"></swip>
        </router-link>
        <cd :iconlist="iconlist"></cd>
        <lilist :recommendlist="recommendlist"></lilist>
        <ullist :weekendlist="weekendlist"></ullist>
    </div>
</template>

<script>
import axios from 'axios';	
import heads from './heads';
import swip from './swip';
import cd from './cd';	
import lilist from './lilist';	
import ullist from './ullist';	

    export default {
        name:"demo",
        components:{heads,swip,cd,lilist,ullist},
        data:function(){
            return{
                swiperlist:[],
                iconlist:[],
                recommendlist:[],
                weekendlist:[],
            }

        },
        methods:{
            getindex(){
                axios.get('../../static/data/index.json').then((res)=>{
                    // console.log(res.data.data);
                    this.swiperlist = res.data.data.swiperList;
                    this.iconlist = res.data.data.iconList;
                    this.recommendlist = res.data.data.recommendList;
                    this.weekendlist = res.data.data.weekendList;

                    // console.log(this.swiperList)

                })
            }
        },
        created(){
            this.getindex();
        },
        mounted(){
        }
    }
</script>

<style scoped lang="less">

</style>