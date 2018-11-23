<template>
    <div>
        <div class="nav">
            <p class="left">
                <span class="fa fa-angle-left zuo" aria-hidden="true"></span>
            </p>
            <p class="center">
                <input type="text" placeholder="🔍输入城市/景点/游玩主题">
            </p>

            <p class="right">
                <router-link to="./cshi" style="color:white">
                    {{chengshi}}
                </router-link>
                    <span class="fa fa-sort-desc las"></span>
            </p>
        </div>
    </div>
</template>

<script>
import {mapState} from 'Vuex';
    export default {
        name:"heads",
        data:function(){
            return{
            }
        },
        computed:{
            ...mapState(['chengshi'])
        }
    }
</script>

<style scoped lang="less">
.nav{
    display: flex;
    color: white;
    background-color: rgb(85, 187, 235);
    .left{
        flex: .5;
        display: flex;
        align-items: center;
        justify-content: center;
        .zuo{
        font-size: 42px;
        }
    }
    .center{
        flex: 7;
        display: flex;
        justify-content: center;
            input{
                font-size: 30px;
                width: 100%;
                height: 60px;
                border-radius: 10px;
                margin: 5px 0;
        }
    }
    .right{
        flex: 2;
       display: flex;
       justify-content: center;
       align-items: center;
       color:#fff;
        .las{
            margin-left: 5px;
        margin-top: -10px;
        font-size: 28px;
       }
    }

}
</style>