<template>
	<view>
		<!-- 搜索栏 -->
		<view class="searchContanier">
			<view class="driRouteSearchContent">
				<uniSearchBar :radius="10" :bgColor="'#F6F7F8'" placeholder="目的地/关键词" @confirm="search" />
			</view>
		</view>
		<view>
			<!-- 月份 -->
			<view class="driRoutePopRoutesTab">
				<wTabControl :popRoutesList="popRoutesList" />
			</view>
			<!-- 热门自驾路线 -->
			<view class="driRoutePopRoutesTitle">
				<wTitle :title="'热门自驾路线'" :textMore="false" />
			</view>
			<view class="driRoutePopRoutesCard">
				<navigator url="/pages/routeDetail/routeDetail">
					<block v-for="(item, index) in driRouteRoutesCardList" :key="index">
						<view class="driRouteRoutesCardContent" :class="index % 2 === 1 ? 'marginRight' : ''">
							<wDrivingRoute :drivingRouteData="item" />
						</view>
					</block>
				</navigator>
			</view>
			<!-- 推荐自驾线路 -->
			<view class="driRouteRecommendTitle">
				<wTitle :title="'推荐自驾线路'" :textMore="false" />
			</view>
			<view class="driRouteRecommendCard">
				<navigator url="/pages/routeDetail/routeDetail">
					<block v-for="(item, index) in driRouteRecommendCardList" :key="index">
						<view class="driRouteRecommendCardContent" :class="index % 2 === 1 ? 'marginRight' : ''">
							<wDrivingRoute :drivingRouteData="item" />
						</view>
					</block>
				</navigator>
			</view>
			<view class="bottomText">到底了，逛逛其他景点吧</view>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '../../components/uni-search-bar/uni-search-bar.vue'
	import wTabControl from '../../components/w-tab-control/w-tab-control.vue'
	import wTitle from '@/components/w-title/w-title.vue'
	import wDrivingRoute from '../../components/w-driving-route/w-driving-route.vue'
	export default {
		components: {
			uniSearchBar,
			wTabControl,
			wTitle,
			wDrivingRoute
		},
		data() {
			return {
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
				driRouteRoutesCardList: [{
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
				}, {
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/编组 6备份 2.png',
					title: '绵山1日游线路',
					text: '5209人收藏*6个景点'
				}],
				driRouteRecommendCardList: [{
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/编组 16.png',
					title: '绵山2日游线路',
					text: '5209人收藏*6个景点'
				}, {
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/编组 17.png',
					title: '绵山2日游线路',
					text: '5209人收藏*6个景点'
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>
	/* 搜索栏 */
	.searchContanier {
		border-bottom: 1px solid #f3f3f3;
	}

	.driRouteSearchContent {
		margin: 0 32rpx 12rpx;
	}

	/* 月份 */
	.driRoutePopRoutesTab {
		margin-top: 48rpx;
	}

	/* 热门自驾路线 *//* 推荐自驾线路 */
	.driRoutePopRoutesTitle,.driRouteRecommendTitle {
		margin: 0 32rpx;
		margin-top: 48rpx;
	}

	.driRoutePopRoutesCard,.driRouteRecommendCard {
		margin: 0 32rpx;
	}

	.driRouteRoutesCardContent,.driRouteRecommendCardContent {
		display: inline-block;
		margin-right: 18rpx;
		margin-top: 30rpx;
	}

	.marginRight {
		margin-right: 0;
	}

	.driRouteRoutesCardContent>>>.routesContent,
	.driRouteRecommendCardContent>>>.routesContent {
		width: 334rpx;
	}

	.driRouteRoutesCardContent>>>.routesBg,
	.driRouteRecommendCardContent>>>.routesBg{
		width: 334rpx;
		height: 334rpx;
	}
	
	.bottomText {
		margin: 16rpx 0 32rpx 0;
		text-align: center;
		color: rgba(153, 153, 153, 1);
		font-size: 20rpx;
	}
</style>
