<template>

    <div class="wrapper" ref="wrapper">
        <div class="content">
            <nav class="nav">
                <p class="p_one">
                    <span class="fa fa-angle-left lsa" aria-hidden="true" @click="tui"></span>
                    城市选择
                </p>
                <p class="p_two">
                    <input type="text" v-model="ipt" placeholder="输入城市名或则拼音">
                </p>
            </nav>

            <div class="main">
                <ul class="uls" v-if="isul">
                    <li v-for="(item, index) in arr" :key="index" @click="libtn(item)">{{item}}</li>
                </ul>
                <p>当前城市</p>
                <ul class="ul_to">
                    <li>{{this.$store.state.chengshi}}</li>
                </ul>
            </div>

            <div class="main_r">
                <p>热门城市</p>
                <ul>
                    <li v-for="(item, index) in hotCities" :key="index" @click="manc($event,item)">{{item.name}}</li>
                </ul>
            </div>

            <div class="content">

                <div v-for="(v, s,index) in lilletb" :key="index">
                    <p @click="bts(index)" ref="asd">{{s}}</p>
                    <ul v-show="!yes[index]">
                        <li @click="manc($event,vs)" v-for="(vs, index) in v" :key="index">{{vs.name}}</li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="acti">
            <ul>
                <li v-for="(v, index) in lilleta" :key="index" @click="strs(index)">{{v}}</li>
            </ul>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import BScroll from 'better-scroll'
// import { mapState } from 'Vuex';
    export default {
        name:"cshi",
        data(){
            return{
            lilleta:[],
            lilletb:[],
            yes:[],
            hotCities:'',
            mans:"",
            isul:false,
            ipt:"",
            arr:[],
            }
        },
        watch:{
            ipt(aaa,bbb){
                this.arr = [];
                for(var p in this.lilletb){
                    this.lilletb[p].forEach( (v,i)=>{
                        if(v.name.includes(aaa)){
                            this.arr.push(v.name);
                        }
                    } )
                }
                if(!this.ipt) this.arr = [];
               if(this.arr.length !=0){
                   this.isul = true
               }else{
                    this.isul = false
               }
            }
              
        },
        mounted(){
            setTimeout(()=>{
                this.scroll = new BScroll(this.$refs.wrapper, {
                    //开启点击事件 默认为false
                    click: true
                })
            },1000);
        },
        computed:{
            // ...mapState(['chengshi'])
        },
        methods:{
            getcity(){
                axios.get('../../static/data/city.json').then( (res)=>{
                    this.hotCities = res.data.data.hotCities;
                    var obj = res.data.data.cities;
                    for(var p in obj){
                        this.lilleta.push(p);
                    }
                    this.lilletb = res.data.data.cities;

                } )
            },
            bts(idx){
               this.$set(this.yes,idx,!this.yes[idx]) ;
            },
            tui(){
                window.history.go(-1);
            },
            manc(e,s){
                this.$store.state.chengshi = s.name;
                this.$router.push({path:'/'})
            },
           strs(idx){
            //    this.$store.state.str = idx;
               this.scroll.scrollToElement(
                   this.$refs.asd[idx]
               )
           },
           libtn(a){
               this.$store.state.chengshi = a;
               this.$router.push({path:'/'})
           }
        },
        created() {
            this.getcity();
        },
    }
</script>

<style scoped lang="less">
.wrapper{
    width: 100%;
    position: fixed;
    top:0px;
    bottom: 0px;
    overflow: hidden;
    .content{
        .nav{
            position: relative;
            background-color: rgb(102, 195, 207);
            
            .p_one{
                text-align: center;
                color: white;
                line-height: 90px;
                font-size: 30px;
                .lsa{
                    float: left;
                    margin-left: 10px;
                    line-height: 90px;
                    font-size: 40px;
                }         
            }
            .p_two{
                text-align: center;
                input{
                    text-align: center;
                    width: 90%;
                    height: 60px;
                    border-radius: 10px;
                    margin: 5px 10px;
                }
            }
        }
        .main{
           position: relative;
            p{
                line-height: 50px;
                background-color: #ddd;
                font-size: 26px;
                text-indent: 10px;
            }
            .ul_to{
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                li{
                    width: 30%;
                    border-radius: 10px;
                    border:1px solid #ddd;
                    text-align: center;
                    line-height: 48px;
                    margin: 10px;
                }
            }
             .uls{
                background-color: #aaa;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%);
                margin: auto;
                width: 90%;
                height: auto;
                border-radius: 10px;
                li{
                    color: white;
                    border-radius: 10px;
                    line-height: 50px;
                    text-indent: 20px;
                    border-bottom: 1px solid #ddd;
                }
            }
        }
        .main_r{
            p{
                line-height: 50px;
                background-color: #ddd;
                font-size: 26px;
                text-indent: 10px;
            }
            ul{
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                li{
                    width: 30%;
                    border-radius: 10px;
                    border:1px solid #ddd;
                    text-align: center;
                    line-height: 48px;
                    margin: 10px;
                }
            }
        }
        .content{
            p{
                line-height: 50px;
                background-color: #ddd;
                font-size: 26px;
                text-indent: 10px;
                margin-bottom: 5px;
            }
            ul{
                li{
                    line-height: 70px;
                    border-bottom: 1px solid #ddd;
                    text-indent: 10px;
                }
            }
        }
    }
    .acti{
        position: fixed;
        z-index: 22;
        right: 10px;
        top: 180px;
        ul{
            li{
                font-size: 30px;
                color: rgb(123, 193, 221);
                line-height: 40px;
            }
        }
    }
}

</style>