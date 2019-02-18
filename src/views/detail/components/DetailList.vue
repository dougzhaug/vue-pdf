<template>
    <div>
        <div class="tabContent">
            <div class="summary">作品简介</div>
            <div>
                Adobe Premiere是一款常用的视频编辑软件，由Adobe公司推出。现在常用的版本有CS4、CS5、CS6、CC 2014、CC 2015、CC 2017、CC 2018以及CC 2019版本。Adobe Premiere是一款编辑画面质量比较好的软件，有较好的兼容性，且可以与Adobe公司推出的其他软件相互协作。目前这款软件广泛应用于广告制作和电视节目制作中。 其最新版本为Adobe Premiere Pro CC 2019。
            </div>
        </div>
        <div class="divide"></div>
        <div class="tabContent comment">
            <div class="comment-list">
                <div class="comment-title">
                    <div class="comment-img"><img src="@/assets/logo.jpeg" alt="" width="30"></div>
                    <div class="comment-title-middle">
                        <div class="comment-name">拐角遇见你</div>
                        <div class="comment-time">2-11</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailList",
        props:{
            list:Array
        }
    }
</script>

<style scoped>
    .tabContent{
        margin: .4rem .4rem 0;
    }
    .summary{
        font-size: 16px;
        margin-bottom: .2rem;
        font-weight:bold
    }
    .divide{
        width: 100%;
        height: .1rem;
        background-color: #eee;
    }
    .comment-title{
        display: flex;
        height: .8rem;
    }
    .comment-img{
        margin: auto 0;
    }
    .comment-img img{
        border-radius: 50%;
    }
    .comment-title-middle{
        display: flex;
        flex-direction:column;
    }
    .comment-name{
        margin: .08rem 0 0 .2rem;
    }
    .comment-time{
        margin: .08rem 0 0 .2rem;
        font-size: 10px;
        color: #9D9D9D;
    }
</style>