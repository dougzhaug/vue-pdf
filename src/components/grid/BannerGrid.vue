<template>
    <div class="body">
        <div class="header">
            <div class="header-left">
                <div class="header-left-top">你打瞌睡</div>
                <div class="header-left-bottom">介绍康师傅拉手榴弹法拉盛老地方</div>
            </div>
            <div class="header-right">全集></div>
        </div>
        <div class="body-middle"><img width="100%" height="100%"  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563440004920&di=9d335d2f96c14b6251da1d31c928f129&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F04%2F20160404221431_X8QCE.jpeg" alt=""></div>
        <div class="bottom">
            <div class="bottom-left">第12话 看的卡里的罚款</div>
            <div class="bottom-right">
                <div class="bottom-right-item">
                    <i class="iconfont icon-voice"/>
                    <div>123456</div>
                </div>
                <div class="bottom-right-item">
                    <i class="iconfont icon-eye_protection"/>
                    <div>123456</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BannerGrid"          //横屏列表
    }
</script>

<style lang="scss" scoped>
    .body{
        /*margin-top: .5rem;*/
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items:center;
    }
    .header{
        width: 96%;
        height: 3rem;
        display: flex;
        align-items:center;
        justify-content:space-between;
        /*background-color: #25a4bb;*/
    }
    .header-left{
        width: 80%;
    }
    .header-left-top{
        font-size: 18px;
        font-weight: bold;
    }
    .header-left-bottom{
        font-size: 12px;
    }
    .header-right{
        margin: 0 .5rem;
        font-size: 14px;
        color: gray;
    }
    .body-middle{
        /*width: 96%;*/
    }
    .bottom{
        width: 96%;
        height: 2.4rem;
        /*background-color: #9D9D9D;*/
        display: flex;
        align-items:center;
        justify-content:space-between;
    }
    .bottom-left{
        font-size: 14px;
    }
    .bottom-right{
        display: flex;
        margin-right: .5rem;
    }
    .bottom-right-item {
        display: flex;
        align-items:center;
        font-size: 12px;
        margin-left: .2rem;
    }
    .bottom-right-item i{
        font-size: 24px;
    }
</style>