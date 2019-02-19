<template>
    <div class="box">
        <div class="title"></div>
        <div class="list">
            <div class="list-img"><img src="@/assets/logo.jpeg" alt="" width="60"></div>
            <div class="list-middle">
                <div class="list-name">第一章 可爱的你</div>
                <div class="list-footer">
                    <div class="list-time">2015-12-21</div>
                    <div class="list-pv"><i class="iconfont arrow-icon">&#xe62d;</i> 2543</div>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="list-img"><img src="@/assets/logo.jpg" alt="" width="60"></div>
            <div class="list-middle">
                <div class="list-name">第二章 他来了</div>
                <div class="list-footer">
                    <div class="list-time">2015-12-21</div>
                    <div class="list-pv"><i class="iconfont arrow-icon">&#xe62d;</i> 1905</div>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="list-img"><img src="@/assets/logo.jpeg" alt="" width="60"></div>
            <div class="list-middle">
                <div class="list-name">第三章 总裁驾到</div>
                <div class="list-footer">
                    <div class="list-time">2015-12-21</div>
                    <div class="list-pv"><i class="iconfont arrow-icon">&#xe62d;</i> 851</div>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="list-img"><img src="@/assets/logo.jpg" alt="" width="60"></div>
            <div class="list-middle">
                <div class="list-name">第四章 气死你</div>
                <div class="list-footer">
                    <div class="list-time">2015-12-21</div>
                    <div class="list-pv"><i class="iconfont arrow-icon">&#xe62d;</i> 1002</div>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="list-img"><img src="@/assets/logo.jpeg" alt="" width="60"></div>
            <div class="list-middle">
                <div class="list-name">第五章 秋季运动会</div>
                <div class="list-footer">
                    <div class="list-time">2015-12-21</div>
                    <div class="list-pv"><i class="iconfont arrow-icon">&#xe62d;</i> 552</div>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="list-img"><img src="@/assets/logo.jpg" alt="" width="60"></div>
            <div class="list-middle">
                <div class="list-name">第六章 起开吧</div>
                <div class="list-footer">
                    <div class="list-time">2015-12-21</div>
                    <div class="list-pv"><i class="iconfont arrow-icon">&#xe62d;</i> 110</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailCatalog"
    }
</script>

<style scoped>
    .box{
        margin: 0 .4rem 0;
    }
    .title{
        height: .8rem;
    }
    .list{
        display: flex;
        height: 1.4rem;
    }
    .list-img{
        margin: auto 0;
    }
    .list-middle{
        display: flex;
        flex-direction:column;
    }
    .list-name{
        font-size: 16px;
        margin: .2rem 0 0 .25rem;
    }
    .list-footer{
        display: flex;
        width: 5rem;
        margin: .4rem 0 0 .25rem;
    }
    .list-time{
        font-size: 12px;
        color: #9D9D9D;
    }
    .list-pv{
        margin-left: 2.5rem;
    }
</style>