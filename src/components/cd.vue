<template>
    <swiper class="divs">
        <swiper-slide class="divss" v-for="(v, index) in list" :key="index">
            <dl v-for="(vs, index) in v" :key="index">
                <dt>
            <router-link to="./xqing">
                    <img :src="vs.imgUrl" alt="">
            </router-link>
                </dt>
                <dd>{{vs.desc}}</dd>
            </dl>
        </swiper-slide>
    </swiper>
</template>

<script>
    export default {
        name:"cd",
        props:['iconlist'],
        data:function(){
            return{

            }
        },
        methods:{

        },
        computed:{
            list(){
                var arr=[];
                this.iconlist.forEach(function(v,i){
                    var num = Math.floor(i/8);
                    if(!arr[num]){
                        arr[num] = [];
                    }
                    arr[num].push(v)
                    // console.log(v,i)
                })
                return arr;
            }

        }
    }
</script>

<style scoped lang="less">
.divs{
    .divss{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    dl{
        width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px 0;
        dt{
            img{
                width: 80%;
            }
        }
        dd{
            line-height: 40px;
        }

}
    }
}
</style>