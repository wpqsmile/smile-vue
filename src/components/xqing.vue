<template>
    <div >
        <transitionfade>
        <div class="nan" v-if="yesno">
            <span class="fa fa-chevron-circle-left p" @click="yesno = !yesno"></span>
        <swiper :options="swiperOptions" ref="mySwiper" v-if=imglist.length>
                <swiper-slide v-for="(v,index) of imglist" :key="index">
                    <img :src="v" @click="yesno = !yesno">
                </swiper-slide>
        </swiper>
        </div>
        </transitionfade>
        <div class="banner">
            <swiper class="banner" :options="swiperOption" ref="mySwiper" v-if=imglist.length>
                <swiper-slide v-for="(v,index) of imglist" :key="index">
                    <img :src="v" @click="yesno = !yesno">
                </swiper-slide>
            </swiper>

            <span class="fa fa-chevron-circle-left zuo" @click="bs"></span>

            <div class="footer">
                <p class="p_one">{{sightname}}</p>
                <p class="p_two" @click="yesno = !yesno">
                <span class="fa fa-picture-o"></span>
                {{imglist.length}}
                </p>
            </div>
        </div>
        <transitionfade>
        <mpiao :lilist="lilist"></mpiao>
        </transitionfade>
        <p class="p_s" v-if="issh">{{sightname}}</p>
        <p style="height:1000px"></p>
    </div>
</template>

<script>
import axios from 'axios';	
import mpiao from './mpiao';
import transitionfade from "./transitionfade.vue"
    export default {
        name:"xqing",
        components:{mpiao,transitionfade},
        data:function(){
            return{
                yesno:false,
                imglist:'',
                lilist:'',
                issh:false,
                sightname:'',
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
                swiperOptions: {
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                loop: true,
                // autoplay: true,
                },
            }
        },
        methods:{
            bs(){
                window.history.go(-1);
            },
            swiper() {
                // 然后你就可以使用this的swiper对象去做你想做的事了
                return this.$refs._one.swiper
            },
            getdetail(){
                axios.get('../../static/data/detail.json').then((res)=>{
                    this.imglist = res.data.data.gallaryImgs;
                    this.lilist = res.data.data.categoryList;
                    this.sightname = res.data.data.sightName;
                    // console.log(res.data.data)
                })
            }
        },
        computed:{

        },
        created() {
            this.getdetail();
        },
        mounted:function(){
			window.onscroll=()=>{
				console.log('滚动');
				var st=document.documentElement.scrollTop||document.body.scrollTop;
				if(st>200){
					this.issh=true;
				}else{
					this.issh=false;
				};
			}
		}
    }
</script>

<style scoped lang="less">
div{
    .p_s{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;;
        z-index: 33;
        text-align: center;
        font-size: 48px;
        line-height: 80px;
        color: blue;
        background-color: rgba(54, 51, 51,0.6);
    }
    .nan{
        background-color: black;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        .swiper-wrapper{
            img{
            width:100%;
            }
        }
        .p{
            font-size: 48px;
            position: absolute;
            left: 15px;
            top: 15px;
            color: white;
            z-index: 3;
        }
    }
    .banner{
        position: relative;
        .swiper-wrapper{
            img{
            width:100%;
            height: 412px;
            }
        }
        .zuo{
            font-size: 85px;
            position: absolute;
            left: 15px;
            top: 15px;
            z-index: 1;
        }
        .footer{
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 10px;
            background-color: transparent;
            z-index: 1;
            p{
                display: inline-block;
                font-size: 28px;
                color: white;
            }
            .p_one{
                text-indent: 20px;
            }
            .p_two{
                float: right;
                background-color: black;
                padding: 2px 20px;
                border-radius: 20px;
                font-size: 26px;
                margin-right: 10px;
            }
        }
    }

}
</style>