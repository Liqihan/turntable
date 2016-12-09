<template>
    <div>
        <ul class="address-list">
            <li class="address-item">
                <div class="item-top">
                    <div class="item-name">灵川</div>
                     <div class="item-tel">12244242424</div>
                </div>
                <div class="item-bottom">
                    浙江省好难过算法这是共商国是说过的是共商国是的根深蒂固说共商国是的根深蒂固说过的阿斯顿发法师打发算法算法是送给
                </div>
            </li>
            <li class="address-item">
                <div class="item-top">
                    <div class="item-name">灵川</div>
                     <div class="item-tel">12244242424</div>
                </div>
                <div class="item-bottom">
                    阿斯顿发法师打发算法算法是送给
                </div>
            </li>
        </ul>
        <router-link to="/addAddress">
            <dvi class="add-address">
                新增地址
            </dvi>
        </router-link>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data :""
        }
    }
}    
</script>
<style lang="sass" scoped>
    $orange:#f45c3a;
    ul{
        background: #fff;
        .address-item{
            border-bottom: 1px solid #e8e8e8;
            padding:0 25px 25px;
            font-size: 28px;/*px*/            
        }
        .item-top{
            line-height: 75px;
            overflow: hidden;
            font-weight: 450;
        }
        .item-bottom{
            color:#333;
            line-height: 1.4;
        }
        .item-name{
            float:left;
        }
        .item-tel{
            float:right;
        }
    }
    .add-address{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        /*display: block;*/
        width: 750px;
        height: 100px;
        line-height: 100px;
        font-size: 32px;/*px*/
        color: #fff;
        background: $orange;
        text-align:center;
    }
</style>