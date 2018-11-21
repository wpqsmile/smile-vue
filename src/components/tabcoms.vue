<template>
    <div>
        <tabcom animate="right" tabclass="blue" :data=datas></tabcom>
    </div>
</template>

<script>
import tabcom from './tabcom';
    export default {
        name:"tabcoms",
        components:{tabcom},
        data:function(){
            return {
                datas:{

                    tabname:['111','222','333'],
					tabdetail:['111手机详情','222电脑详情','333日用品详情']
                }
            }
        }
    }
</script>

<style scoped>

</style>