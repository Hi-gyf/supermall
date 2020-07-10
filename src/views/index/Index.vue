<template>
    <div id="home">
        <nav-bar class="index-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComponents/IndexSwiper'
import RecommendView from './childComponents/RecommendView'

import {getIndexMultidata} from 'network/index'

export default {
    name: 'index',
    components: {
        NavBar,
        HomeSwiper,
        RecommendView
    },
    data(){
        return {
            banners: [],
            recommends: []
        }
    },
    created(){
        getIndexMultidata().then(res => {
            // console.log(res)
            this.banners = res.data.banner.list;
            console.log(this.banners)
            this.recommends = res.data.recommend.list;
        })
    }
}
</script>

<style scoped>
    .index-nav {
        background-color: var(--color-tint);
        color: white;
    }
</style>