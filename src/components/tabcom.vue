<template>
	<div>
	  <div class="content">

			<button 
			 v-for="(val,index) of data.tabname" :key="index"
			 @click="clickH(index)"
			 :class="index==curindex?tabclass:''"
			 >
				{{val}}
			</button>
		<ul>
			<transition-group :name="animate">
				<li v-for="(content,index) of data.tabdetail" :key="index" v-show="index===curindex">{{content}}</li>
			</transition-group>
		</ul>
	   </div>
	</div>
</template>

<script type="text/javascript">
export default {
	name:'tabcom',
	props:{
		data:{
			type:Object,
			default:function(){
				return {
					tabname:['手机','电脑','日用品'],
					tabdetail:['手机详情','电脑详情','日用品详情']
				}
			}
		},
		// tabclass 可传入 red green blue
		tabclass:{
			type:String,
			default:'red'
		},
		// animate 可以传入 bottom left right
		animate:{
			type:String,
			default:'bottom'
		}
	},
	data:function(){
		return {
			curindex:0
		}
	},
	methods:{
		clickH:function(idx){
			this.curindex=idx;
		}
	}
}
</script>

<style type="text/css" scoped>
	
.content{
	width: 500px;
	height: 400px;
	border:1px solid #000;
	overflow: hidden;
}
.content button{
	width:150px;
	height: 40px;
	background-color: #ddd;
	border:0px;
	border-radius: 10px;
}
.content li{
	width:100%;
	height: 360px;
	background-color: #f1f1f1;
}
/*tab标签的样式*/
.content button.red{background-color: #f00;}
.content button.blue{background-color: #0f0;}
.content button.green{background-color: #00f;}

/*动画部分的样式*/
.left-enter{
	transform: translateX(-500px);
}
.left-enter-to{
	transform: translateX(0px);
}
.left-enter-active{
	transition: 1s all;
}


.right-enter{
	transform: translateX(500px);
}
.right-enter-to{
	transform: translateX(0px);
}
.right-enter-active{
	transition: 1s all;
}


.bottom-enter{
	transform: translateY(500px);
}
.bottom-enter-to{
	transform: translateX(0px);
}
.bottom-enter-active{
	transition: 1s all;
}
</style>