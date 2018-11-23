<template>
    <div>
        <ul>
            <li v-for="(item, index) in lilist" :key="index" >
                <p @click="libtn(index)">
                    <i>
                        <span class="fa fa-ticket sss"></span>
                    </i>
                    {{item.title}}
                </p>
                <div class="left"  v-if="item.children">
                    <mpiao :lilist="item.children" v-show="yest[index]"></mpiao>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name:"mpiao",
        props:['lilist'],
        data:function(){
            return{
                yest:[],
            }
        },
        methods:{
            libtn(idx){
                // this.yest[idx] = !this.yest[idx];
                this.$set(this.yest,idx,!this.yest[idx])
                // console.log(this.yest)
            }
        }
    }
</script>

<style scoped lang="less">
div{
   ul{
       li{
           p{
               height: 75px;
               line-height: 75px;
               font-size: 35px;
               i{
                   transform:rotate(80deg);
                   margin-left: 20px;
                   display: inline-block;
                   width: 35px;
                   height: 35px;
                   background-color: rgb(87, 191, 209);
                   border-radius: 50%;
                   text-align: center;
                   line-height: 35px;
                   .sss{
                       font-size: 28px;
                       color:white;
                   }
               }
           }
           .left{
               margin-left: 30px;
           }
       }
   }
}

</style>