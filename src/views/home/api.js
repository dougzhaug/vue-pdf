import axios from '@/units/axios';

export {
    getHomeAD,
    getHomeIcon,
    getHomeHot,
    getHomeWeek,
    getHomeNew,
    getHomeWaterfall
}

/**
 * 获取首页广告
 * @param a
 */
let getHomeAD =()=> axios({
    method:'get',
    url:'index/ad',
    headers:{}
});

/**
 * 获取首页导航信息
 *
 * @param b
 */
let getHomeIcon = () => axios({
    method:'get',
    url:'index/icon',
    headers:{}
});

/**
 * 获取热门推荐
 */
let getHomeHot = () => axios({
    method:'get',
    url:'index/hot',
    headers:{}
});

/**
 * 本周头版
 */
let getHomeWeek = () => axios({
    method:'get',
    url:'index/week',
    headers:{}
});

/**
 * 新作主打
 */
let getHomeNew = () => axios({
    method:'get',
    url:'index/new',
    headers:{}
});

/**
 * 获取瀑布流数据
 */
let getHomeWaterfall = (page=1) => axios({
    method:'get',
    url:'index/waterfall/' + page,
    headers:{}
})

