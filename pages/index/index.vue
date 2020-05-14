<template>
	<view class="container">
		<!-- 搜索栏 -->
		<view></view>
		<!-- 轮播图343*160 -->
		<view class="swiperContanier">
			<wSwiper :swiperList="swiperList" :swiperColor="swiperColor" />
		</view>
		<!-- 项目导航 -->
		<wCategory :categoryList="categoryList" />
		<!-- 热门景点 -->
		<view class="popDestination">
			<wProTitle :title="popDestinationTitle"/>
			<view class="popDestinationContent">
				<wPopDestination :popDestinationList="popDestinationList"/>
			</view>
		</view>
		<!-- 热门路线 -->
		<view class="popRoutes">
			<view class="popRoutesTitle">
				<wProTitle class="" :title="popRoutesTitle"/>
			</view>
			<view class="popRoutesTab">
				<wTabControl :popRoutesList="popRoutesList"/>
			</view>
			<view class="popRoutesCard">
				<wRoutesCard :routesCardList="routesCardList"/>
			</view>
		</view>
		<!-- 周边热门推荐 -->
		<view class="popRecommendAround">
			<wProTitle :title="popRecommendAroundTitle" :textMore="popRecommendAroundShow"/>
			<view>
				<wScenic />
			</view>
		</view>
	</view>
</template>

<script>
	import wSwiper from '../../components/w-swiper/w-swiper.vue';
	import wCategory from '../../components/w-category/w-category.vue';
	import wProTitle from '../../components/w-pro-title/w-pro-title.vue';
	import wPopDestination from '../../components/w-pop-destination/w-pop-destination.vue';
	import wTabControl from '../../components/w-tab-control/w-tab-control.vue';
	import wRoutesCard from '../../components/w-routes-card/w-routes-card.vue';
	import wScenic from '../../components/w-scenic/w-scenic.vue';
	export default {
		components: {
			wSwiper,
			wCategory,
			wProTitle,
			wPopDestination,
			wTabControl,
			wRoutesCard,
			wScenic
		},
		data() {
			return {
				// 轮播图片
				swiperList: [{
					url: '/static/images/common/shanghai.jpeg'
				}, {
					url: '/static/images/common/shanghai.jpeg'
				}, {
					url: '/static/images/common/shanghai.jpeg'
				}],
				// 轮播点的默认样式和选中样式
				swiperColor: {
					indicatorColor: "rgba(255,255,255,1)",
					indicatorColorActive: "rgba(255,152,0,1)",
				},
				// 项目导航
				categoryList: [{
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "景点"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "酒店"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "路线"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "门票"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "美食"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: "/static/images/profile/message.png",
					title: "宣传"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "租车"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "中补"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "车维"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "救援"
				}],
				popDestinationTitle: '热门景点',
				popDestinationList: [{
					url: '/static/images/common/shanghai.jpeg',
					title: '巴厘岛',
					price: '1080',
					detail: '在细腻的沙滩上，看着太阳渐渐落下。在细腻的沙滩上，看着太阳渐渐落下。'
				}, {
					url: '/static/images/common/shanghai.jpeg',
					title: '马尔代夫',
					price: '1080',
					detail: '蜜月优选，打卡网红水上屋'
				}, {
					url: '/static/images/common/shanghai.jpeg',
					title: '瑞士',
					price: '1080',
					detail: '拥抱阿尔卑斯，赏湖光山色。拥抱阿尔卑斯，赏湖光山色。'
				}],
				popRoutesTitle: '热门路线',
				popRoutesList: [{
					title: '4月',
					exp: '采花赏樱'
				},{
					title: '5月',
					exp: '漫步花海'
				},{
					title: '6月',
					exp: '仲夏狂欢'
				},{
					title: '7月',
					exp: '赏荷避暑'
				},{
					title: '8月',
					exp: '星星萤火'
				},{
					title: '9月',
					exp: '采花赏樱'
				},{
					title: '10月',
					exp: '采花赏樱'
				},{
					title: '11月',
					exp: '采花赏樱'
				},{
					title: '12月',
					exp: '采花赏樱'
				}],
				routesCardList: [{
					url: '/static/images/common/shanghai.jpeg',
					routesText: '三亚5日右边特色景点',
					routesUserAvatar: '/static/images/common/shanghai.jpeg',
					routesUserName: '虫虫虫'
				}, {
					url: '/static/images/common/shanghai.jpeg',
					routesText: '洛阳最美赏花路线，虽然不长但是很美',
					routesUserAvatar: '/static/images/common/shanghai.jpeg',
					routesUserName: '开飞机的舒克'
				}, {
					url: '/static/images/common/shanghai.jpeg',
					routesText: '洛阳最美赏花路线，虽然不长但是很美',
					routesUserAvatar: '/static/images/common/shanghai.jpeg',
					routesUserName: '开飞机的舒克'
				}, {
					url: '/static/images/common/shanghai.jpeg',
					routesText: '洛阳',
					routesUserAvatar: '/static/images/common/shanghai.jpeg',
					routesUserName: '开飞机的舒克'
				}, {
					url: '/static/images/common/shanghai.jpeg',
					routesText: '洛阳最美赏花路线，虽然不长但是很美1111',
					routesUserAvatar: '/static/images/common/shanghai.jpeg',
					routesUserName: '开飞机的舒克'
				}],
				popRecommendAroundTitle: '周边热门推荐',
				popRecommendAroundShow: false
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.container {
		background-color: #ffffff;
	}
	/* 轮播图容器 */
	.swiperContanier {
		margin: 28rpx 32rpx;
		width: 686rpx;
		height: 320rpx;
	}
	/* 热门景点 */
	.popDestination {
		margin: 60rpx 32rpx;
	}
	.popDestinationContent {
		margin-top: 38rpx;
	}
	/* 热门路线 */
	.popRoutes {
		margin-top: 54rpx;
		margin-bottom: 50rpx;
	}
	.popRoutesTitle {
		margin: 0 32rpx;
	}
	.popRoutesTab {
		margin-top: 38rpx;
	}
	.popRoutesCard {
		margin-top: 38rpx;
	}
	/* 周边热门推荐 */
	.popRecommendAround {
		margin: 48rpx 32rpx;
	}
</style>
