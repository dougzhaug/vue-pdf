<template>
    <div>
        <div class="weui-search-bar" id="search_bar" @click="handleSearch">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" id="search_input" placeholder="搜索" />
                    <a href="javascript:" class="weui-icon-clear" id="search_clear"></a>
                </div>
                <label for="search_input" class="weui-search-bar__label" v-show="searchText" id="search_text">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" :hidden="searchCancel" id="search_cancel">取消</a>
        </div>
<!--        <div class="weui-cells weui-cells_access search_show" id="search_show">-->
<!--            <div class="weui-cell">-->
<!--                <div class="weui-cell__bd weui-cell_primary">-->
<!--                    <p>实时搜索文本</p>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="weui-cell">-->
<!--                <div class="weui-cell__bd weui-cell_primary">-->
<!--                    <p>实时搜索文本</p>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="weui-cell">-->
<!--                <div class="weui-cell__bd weui-cell_primary">-->
<!--                    <p>实时搜索文本</p>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="weui-cell">-->
<!--                <div class="weui-cell__bd weui-cell_primary">-->
<!--                    <p>实时搜索文本</p>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "SearchBar",
        data(){
            return {
                searchText:true,
                searchCancel:false,
            }
        },
        methods:{
            handleSearch(){
                this.searchCancel = true;

                this.searchText = false;
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>