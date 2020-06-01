<template>
	<scroll-view class="container" scroll-y="true" scroll-top="0" @scroll="scroll()" @scrolltoupper="upper()"
	 @scrolltolower="lower()">
		<view>
			<!-- 搜索栏 -->
			<view class="searchContanier">
				<view class="searchContent">
					<view class="searchPositioning">
						<image src="http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/首页-定位.png" mode=""></image>
						<text class="positioningName">绵山</text>
					</view>
					<view class="search">
						<uniSearchBar :radius="10" :bgColor="'#F6F7F8'" placeholder="目的地/关键词" @confirm="search" />
					</view>
				</view>
			</view>
			<!-- 轮播图 -->
			<view class="swiperContanier">
				<wSwiper :swiperList="swiperList" :swiperStyle="swiperStyle" />
			</view>
			<!-- 项目导航 -->
			<view class="categoryContent">
				<wCategory :categoryList="categoryList" />
			</view>
			<!-- 热门路线 -->
			<view class="popRoutes">
				<view class="popRoutesTitle">
					<wTitle :title="popRoutesTitle" :navUrl="popRoutesNavUrl" />
				</view>
				<view class="popRoutesTab">
					<wTabControl :popRoutesList="popRoutesList" />
				</view>
				<view class="popRoutesCard">
					<wRoutesCard :routesCardList="routesCardList" />
				</view>
			</view>
			<!-- 旅途服务 -->
			<view class="journeyService">
				<wTitle :title="journeyServiceTitle" :textMore="journeyServiceShow" />
				<view class="journeyServiceContent">
					<wJourneyService :serviceList="serviceList" />
				</view>
			</view>
			<!-- 热门景点 -->
			<view class="popDestination">
				<wTitle :title="popDestinationTitle" :navUrl="popDestinationNavUrl" />
				<view class="popDestinationContent">
					<wPopDestination :popDestinationList="popDestinationList" />
				</view>
			</view>
			<!-- 周边热门推荐 -->
			<view class="popRecommendAroundBG">
				<view class="popRecommendAround">
					<wTitle :title="popRecommendAroundTitle" :textMore="popRecommendAroundShow" />
					<view class="popRecommendAroundContent">
						<wScenic :scenicList="scenicList" />
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import uniSearchBar from '../../components/uni-search-bar/uni-search-bar.vue'
	import wSwiper from '../../components/w-swiper/w-swiper.vue'
	import wCategory from '../../components/w-category/w-category.vue'
	import wTitle from '@/components/w-title/w-title.vue'
	import wPopDestination from '../../components/w-pop-destination/w-pop-destination.vue'
	import wTabControl from '../../components/w-tab-control/w-tab-control.vue'
	import wRoutesCard from '../../components/w-routes-card/w-routes-card.vue'
	import wScenic from '../../components/w-scenic/w-scenic.vue'
	import wJourneyService from '../../components/w-journey-service/w-journey-service.vue'
	export default {
		components: {
			uniSearchBar,
			wSwiper,
			wCategory,
			wTitle,
			wPopDestination,
			wTabControl,
			wRoutesCard,
			wScenic,
			wJourneyService
		},
		data() {
			return {
				// 轮播图片
				swiperList: [{
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/1.png'
				}, {
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/2.png'
				}, {
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/3.png'
				}],
				// 轮播点的默认样式和选中样式
				swiperStyle: {
					backgroundColor: '#FFFFFF',
					border: '1px rgba(83, 200, 249, 0) solid',
					selectedBackgroundColor: '#FAAD14',
					selectedBorder: '1px rgba(83, 200, 249, 0) solid',
					bottom: 8,
					width: 4,
					height: 4
				},
				// 项目导航
				categoryList: [{
					navigatorUrl: '/pages/attractionList/attractionList',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/编组.png',
					title: "景点"
				}, {
					navigatorUrl: '/pages/drivingRoute/drivingRoute',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/编组 2.png',
					title: "路线"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/编组 3.png',
					title: "门票"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/编组 4.png',
					title: "美食"
				}],
				// 热门景点
				popDestinationTitle: '热门景点',
				popDestinationNavUrl: '/pages/popDestionList/popDestionList',
				popDestinationList: [{
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/热门景点-正果寺.png',
					title: '正果寺',
					price: '105',
					detail: '气势恢宏，鉴于崖壁直指蓝天'
				}, {
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/热门景点-明王殿.png',
					title: '明王殿',
					price: '105',
					detail: '庄严宝相，线条流畅，气韵生动'
				}, {
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/热门景点-大罗宫.png',
					title: '大罗宫',
					price: '105',
					detail: '站立顶层，俯瞰山间，风光旖旎。最大看点是'
				}],
				// 热门路线
				popRoutesTitle: '热门路线',
				popRoutesNavUrl: '/pages/drivingRoute/drivingRoute',
				popRoutesList: [{
					title: '4月',
					exp: '采花赏樱'
				}, {
					title: '5月',
					exp: '漫步花海'
				}, {
					title: '6月',
					exp: '仲夏狂欢'
				}, {
					title: '7月',
					exp: '赏荷避暑'
				}, {
					title: '8月',
					exp: '星星萤火'
				}, {
					title: '9月',
					exp: '采花赏樱'
				}, {
					title: '10月',
					exp: '采花赏樱'
				}, {
					title: '11月',
					exp: '采花赏樱'
				}, {
					title: '12月',
					exp: '采花赏樱'
				}],
				routesCardList: [{
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/编组 17 2.png',
					title: '绵山4日游线路',
					text: '6681人收藏*6个景点'
				}, {
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/编组 6备份 2 2.png',
					title: '绵山3日游线路',
					text: '5209人收藏*5个景点'
				}, {
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/编组 18.png',
					title: '绵山2日游线路',
					text: '6681人收藏*12个景点'
				}],
				// 旅途服务
				journeyServiceTitle: '旅途服务',
				journeyServiceShow: false,
				serviceList: [{
					title: '租车',
					navUrl: '/pages/secondIndex/secondIndex',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/租车.png',
					colorStyle: 'rgba(255, 208, 114, 1)'
				}, {
					title: '维修',
					navUrl: '/pages/secondIndex/secondIndex',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/路径 2.png',
					colorStyle: 'rgba(109, 228, 228, 1)'
				}, {
					title: '补给',
					navUrl: '/pages/secondIndex/secondIndex',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/中途补给.png',
					colorStyle: 'rgba(107, 194, 255, 1)'
				}, {
					title: '救援',
					navUrl: '/pages/rescueMap/rescueMap',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/救援.png',
					colorStyle: 'rgba(252, 139, 113, 1)'
				}],
				// 周边热门推荐
				popRecommendAroundTitle: '周边热门推荐',
				popRecommendAroundShow: false,
				scenicList: [{
					title: '山西绵山',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/山西绵山.png',
					text: '山西绵山景区一日游',
					scoreNum: '5.0分',
					distance: '4.8km',
					score: '105',
					comment: '2076条点评',
					user: {
						avatar: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/马尔代夫图片.png',
						text: '绵山又称介山，这里山势陡峭，山中多悬崖绝壁与…'
					}
				}, {
					title: '栖贤谷',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/栖贤谷.png',
					text: '绵山-栖贤谷景区',
					scoreNum: '4.0',
					distance: '15.2km',
					score: '30',
					comment: '276条点评',
					user: {
						avatar: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/马尔代夫图片.png',
						text: '分享绵山栖贤谷一日游，这是历经世界上里程最长…'
					}
				}, {
					title: '洪崖大峡谷',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/洪崖大峡谷.png',
					text: '山西灵石县红崖大峡谷一日游',
					scoreNum: '5.0',
					distance: '9.2km',
					score: '99',
					comment: '1980条点评',
					user: {
						avatar: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/马尔代夫图片.png',
						text: '集险、秀、雄、奇、幽于一体，天成胜境，景区生态环境优美，森林茂密，草甸坦荡，风景秀丽，在山西所有景区中水资源也是非常充沛的'
					}
				}, {
					title: '介公岭',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/介公岭.png',
					text: '介公岭景区一日游',
					scoreNum: '4.0',
					distance: '12.4km',
					score: '160',
					comment: '4029条点评',
					user: {
						avatar: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/马尔代夫图片.png',
						text: '这里四面环山，前沟后川，左泉右谷，松柏苍翠，山花烂漫。雨霁，在此观云海，云雾苍茫，如万马奔腾，海市蜃楼。'
					}
				}]
			}
		},
		onLoad() {

		},
		methods: {
			upper(e) {
				console.log(1, e)
			},
			scroll(e) {
				console.log(2, e)
			},
			lower(e) {
				console.log(3, e)
			}
		}
	}
</script>

<style>
	.container {
		background: #FFFFFF;
		height: 100%;
	}

	/* 搜索栏 */
	.searchContanier {
		border-bottom: 1px solid #f3f3f3;
	}

	.searchContent {
		margin: 0 32rpx 12rpx;
		width: 100%;
	}

	.searchPositioning {
		display: inline-block;
		font-size: 32rpx;
		width: 120rpx;
		margin-right: 4rpx;
	}

	.searchPositioning image {
		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;
	}

	.positioningName {
		vertical-align: middle;
		color: #FAAD14;
	}

	.search {
		display: inline-block;
		width: 556rpx;
	}

	/* 轮播图容器 */
	.swiperContanier {
		margin: 28rpx 32rpx;
		width: 686rpx;
		height: 272rpx;
		border-radius: 20rpx;
		/* box-shadow: 0rpx 10rpx 20rpx 0rpx rgba(237, 160, 82, 1); */
		box-shadow: rgba(237, 160, 82, 1) 0rpx 40rpx 40rpx -20rpx;
	}

	/* 热门景点 */
	.popDestination {
		margin: 0 32rpx;
		margin-top: 48rpx;
	}

	.popDestinationContent {
		margin-top: 32rpx;
	}

	/* 项目导航 */
	.categoryContent {
		margin-top: 66rpx;
	}

	/* 热门路线 */
	.popRoutes {
		margin-top: 48rpx;
	}

	.popRoutesTitle {
		margin: 0 32rpx;
	}

	.popRoutesTab {
		margin-top: 32rpx;
	}

	.popRoutesCard {
		margin-top: 22rpx;
	}
	.popRoutesCard >>> .routesContent {
		margin: 0 8rpx;
	}
	.popRoutesCard >>> .routesContent:first-child {
		margin-left: 32rpx;
	}
	/* 旅途服务 */
	.journeyService {
		margin: 0 32rpx;
		margin-top: 34rpx;
	}

	/* 周边热门推荐 */
	.popRecommendAroundBG {
		background: linear-gradient(to bottom, #FFFFFF, #F9FAFB);
	}

	.popRecommendAround {
		margin: 0 32rpx;
		margin-top: 48rpx;
		margin-bottom: 120rpx;
	}

	.popRecommendAroundContent {
		margin-top: 24rpx;
	}
</style>
