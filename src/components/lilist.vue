<template>
    <div class="wap">
        <!-- {id: "0001", imgUrl: ": "故宫", desc: "东方宫殿建筑代表，世界宫殿建筑典范"}
1
:
{id: "0002", imgUrl: " title: "南山滑雪场", desc: "北京专业级滑雪圣地"}
2
:
{id: "0003", imgUrl: " title: "天安门广场", desc: "我爱北京天安门，天安门上太阳升"}
3
:
{id: "0004", imgUrl: " title: "水立方", desc: "中国的荣耀，阳光下的晶莹水滴"}
4
:
{id: "0005", imgUrl: ": "温都水城养生馆", desc: "各种亚热带植物掩映其间仿佛置身热带雨林"}
length
: -->


        <p class="navs">热销推荐</p>
        <dl v-for="(item, index) in recommendlist" :key="index">
            <dt>
                <router-link to="./xqing">
                <img :src="item.imgUrl">
                </router-link>
            </dt>
            <dd>
                <h2>{{item.title}}</h2>
                <p title="item.desc" class="p_one">{{item.desc}}</p>
                <router-link to="./xqing">
                <p class="p_two">查看详情</p>
                </router-link>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name:"lilist",
        props:['recommendlist'],
        data:function(){
            return{
            }
        }
    }
</script>

<style scoped lang="less">
.wap{
    .navs{
        text-indent: 10px;
        font-size: 28px;
        line-height: 40px;
        background-color: #ddd;
    }
    dl{
        display: flex;
        border-bottom: 5px solid #ddd;
        dt{
            flex: 3;
            margin: 10px;
            img{
                width: 100%;
            }
        }
        dd{
            flex: 7;
            h2{
                margin: 10px 0;
                font-size: 30px;
                font-weight: bold;
                line-height: 55px;
            }
            .p_one{
                font-size: 28px;
                margin: 10px 0;
                line-height: 55px;
                width: 520px;
                color: rgb(196, 193, 193);
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .p_two{
                display: inline-block;
                background-color: orange;
                color: white;
                font-size: 28px;
                line-height: 40px;
                padding: 0 10px;
                border-radius: 10px;
                margin-top: 20px;

            }
        }
    }
}
</style>