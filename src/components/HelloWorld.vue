<template>
  <div id="app">
    <zujian :list='list' :fouce="true" :imgtime='1000'></zujian>
  </div>
</template>

<script>
import zujian from './zujian'
export default {
  name: 'HelloWorld',
  components:{zujian},
  data () {
    return {
  			 list:[require('@/assets/7.jpg'),require('@/assets/13.jpg'),require('@/assets/17.jpg'),require('@/assets/17.jpg')]      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  *{
       margin: 0px;
       padding: 0px;
     }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
    .contener{
      width:500px;
      height: 400px;
      border:1px solid #f00;
      position: relative;
    }
    .contener img{
       display: block;
       width: 100%;
       height: 100%;
    }
    .contener .jiaod{
      position: absolute;
      bottom: 10px;
      width:100%;
      line-height: 50px;  
      text-align: center;
    }
    .contener .jiaod span{
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 15px;
      background-color: #fff;
      margin: 0px 5px;
    }
    .contener .jiaod span.cur{
      background-color: #f00;
    }
</style>
