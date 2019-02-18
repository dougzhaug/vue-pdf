<template>
    <div>
        <div class="box">
            <div class="tab" @click="setDetailTab('DetailList')">
                <div class="content" :class="{'action':detailTab==='DetailList'}">详情</div>
            </div>
            <div class="tab" @click="setDetailTab('DetailCatalog')">
                <div class="content" :class="{'action':detailTab==='DetailCatalog'}">选集</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapState } from 'vuex'
    export default {
        name: "DetailTab",
        computed:{
            ...mapState(['detailTab'])
        },
        methods:{
            ...mapMutations(['setDetailTab']),
        }
    }
</script>

<style scoped>
    .box{
        display: flex;
        height: .8rem;
        border-bottom: 1px solid #eee;
    }
    .tab{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    .content{
        display: flex;
        width: 50%;
        border-bottom: 3px solid #fff;
        justify-content: center;
        align-items:center;
    }
    .action{
        border-bottom: 3px solid coral;
    }
</style>