<template>
    <div class="body">
        <div class="header">
            <div class="header-left">
                奇幻
            </div>
            <div class="header-right">
                更多>
            </div>
        </div>

        <div class="grid">
            <div class="item">
                <div class="item-img"><img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563423825913&di=59266771d9ec2373190020f067039961&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F03%2F2018040395557_rlZFY.thumb.700_0.jpeg" alt=""></div>
                <div class="item-bottom">
                    <div class="item-bottom-title">我的老师</div>
                    <div class="item-bottom-summary">校园奇幻，看我所看喜欢校园奇幻</div>
                </div>
            </div>
            <div class="item">
                <div class="item-img"><img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563423825913&di=59266771d9ec2373190020f067039961&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F03%2F2018040395557_rlZFY.thumb.700_0.jpeg" alt=""></div>
                <div class="item-bottom">
                    <div class="item-bottom-title">我的老师</div>
                    <div class="item-bottom-summary">校园奇幻，看我所看喜欢校园奇幻</div>
                </div>
            </div>
            <div class="item">
                <div class="item-img"><img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563423825913&di=59266771d9ec2373190020f067039961&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F03%2F2018040395557_rlZFY.thumb.700_0.jpeg" alt=""></div>
                <div class="item-bottom">
                    <div class="item-bottom-title">我的老师</div>
                    <div class="item-bottom-summary">校园奇幻，看我所看喜欢校园奇幻</div>
                </div>
            </div>
            <div class="item">
                <div class="item-img"><img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563423825913&di=59266771d9ec2373190020f067039961&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F03%2F2018040395557_rlZFY.thumb.700_0.jpeg" alt=""></div>
                <div class="item-bottom">
                    <div class="item-bottom-title">我的老师</div>
                    <div class="item-bottom-summary">校园奇幻，看我所看喜欢校园奇幻</div>
                </div>
            </div>
            <div class="item">
                <div class="item-img"><img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563423825913&di=59266771d9ec2373190020f067039961&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F03%2F2018040395557_rlZFY.thumb.700_0.jpeg" alt=""></div>
                <div class="item-bottom"></div>
            </div>
            <div class="item">
                <div class="item-img"><img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563423825913&di=59266771d9ec2373190020f067039961&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F03%2F2018040395557_rlZFY.thumb.700_0.jpeg" alt=""></div>
                <div class="item-bottom"></div>
            </div>
        </div>

        <div class="bottom">
            <div class="bottom-left">查看更多</div>
            <div class="bottom-right">换一换</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VerticalGrid"            //竖型列表
    }
</script>

<style lang="scss" scoped>
    .body{
        margin-top: .5rem;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items:center;
    }
    .header{
        width: 96%;
        height: 2.4rem;
        display: flex;
        align-items:center;
        justify-content:space-between;
    }
    .header-left{
        font-size: 18px;
        font-weight: bold;
    }
    .header-right{
        font-size: 14px;
        color: gray;
        margin: 0 .5rem;
    }
    .grid{
        width: 97%;
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
    }
    .item{
        flex: 0 0 33.33333%;
        box-sizing: border-box;
        height: 13rem;
        /*background-color: #9D9D9D;*/
        padding: .1rem;
    }
    .item-img{
        width: 100%;
        height: 80%;
    }
    .item-bottom{
        width: 100%;
        height: 20%;
        /*background-color: #25a4bb;*/
    }
    .item-bottom-title{
        width: 100%;
        font-size: 16px;
        line-height: 22px;
        display: flex;
        align-items:center;

    }
    .item-bottom-summary{
        width: 100%;
        font-size: 12px;
        height: 16px;
        display: flex;
        overflow:hidden
    }
    .bottom{
        width: 100%;
        height: 3rem;
        display: flex;
        align-items:center;
        justify-content:center;
    }
    .bottom-left, .bottom-right{
        width: 44%;
        height: 80%;
        margin: 0 .5rem;
        border-radius: .3rem;
        background-color: #EDEDED;
        display: flex;
        align-items:center;
        justify-content:center;
        font-size: 13px;
        color: grey;
    }
</style>