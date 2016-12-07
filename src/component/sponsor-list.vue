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
        width:360px;
        .sponsor-item{
            width:115px;
            text-align:center;
            .sponsor-img{
                border:1px solid #f5f5f5;                
                width:100%;
                height:40px;
                overflow:hidden;                            
            }
            img{
                width:100%;
                height:auto;
            }
        }
    }
</style>
