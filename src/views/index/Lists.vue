<template>
    <div>
        <List
            v-model="loading"
            :finished="finished"
            :immediate-check=false
            finished-text="已经到底了"
            @load="onLoad"
        >
            <Cell
                v-for="item in list"
                :key="item"
                :title="item"
                size="large"
            />
        </List>
    </div>
</template>

<script>
    import { List, Cell } from 'vant';
    export default {
        name: "Lists",
        components:{
            List,
            Cell
        },
        data(){
            return {
                loading:false,
                finished:false,
                list:[],
            }
        },
        mounted(){
            this.onLoad();
        },
        methods:{
            onLoad(){
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 20; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            },
        }
    }
</script>

<style scoped>

</style>