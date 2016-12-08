<template>
    <div class="sponsor-list">
        <div class="sponsor-item" v-for="n in 6">
            <div class="sponsor-img">
                <img src="http://img.benditoutiao.com/handwork_20161122/05c8d430-b062-11e6-9ca3-173cdb5d95b4.jpg@!sponser" alt="">
            </div>
            <div class="sponsor-name">妩媚</div>
        </div>
    </div>
</template>
<script>

export default {
    name: "sponsor-list",
    data () {
        return {
            data:""
        }
    },
    methods: {

    },
    props: {
        items :{
            type:Array
        }
    }
}
</script>
<style lang="sass" scoped>
    .sponsor-list{
        display:box;
        display:flex;
        justify-content:space-between;        
        flex-wrap: wrap;
        width:690px;
        margin:0 auto;
        .sponsor-item{
            width:220px;
            box-sizing:border-box;
            text-align:center;
            .sponsor-img{
                border:1px solid #e0e0e0;                
                width:100%;
                height:70px;
                overflow:hidden;                            
            }
            img{
                width:100%;
                height:auto;
            }
            .sponsor-name{
                line-height: 45px;
                font-size: 22px;/*px*/
                color:#666;
            }
        }
    }
</style>
