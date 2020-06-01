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
			<!-- 当季好玩 -->
			<view class="driRoutePopRoutesTitle">
				<wTitle :title="driRoutePopRoutesTitle" :textMore="is_show" />
			</view>
			<scroll-view scroll-x="true">
				<view class="attractionContent">
					<block v-for="(item, index) in attractionList" :key="index">
						<navigator url="/pages/scenicDetail/scenicDetail">
							<view class="attractionList">
								<wPopDestionCard :destionCard="item" :styles="styles" :is_city="is_city[index]" :is_detail="false" />
							</view>
						</navigator>
					</block>
				</view>
			</scroll-view>
			<!-- 推荐景点 -->
			<view class="driRouteRecommendTitle">
				<wTitle :title="driRouteRecommendTitle" :textMore="is_show" />
			</view>
			<view class="commonStyle">
				<navigator url="/pages/scenicDetail/scenicDetail">
					<block v-for="(item, index) in 9" :key="index">
						<block v-if="(index+1) % 3 === 1">
							<view class="area">
								<wAreaAttraction :drivingRouteData="item" />
							</view>
						</block>
						<block v-if="(index+1) % 3 === 2">
							<view class="area_2">
								<wAreaAttraction :drivingRouteData="item" />
							</view>
						</block>
						<block v-if="(index+1) % 3 === 0">
							<view class="area_3">
								<wAreaAttraction :drivingRouteData="item" />
							</view>
						</block>
					</block>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '../../components/uni-search-bar/uni-search-bar.vue'
	import wTabControl from '../../components/w-tab-control/w-tab-control.vue'
	import wTitle from '@/components/w-title/w-title.vue'
	import wPopDestionCard from '../../components/w-pop-destion-card/w-pop-destion-card.vue'
	import wAreaAttraction from '../../components/w-area-attractions/w-area-attractions.vue'
	export default {
		components: {
			uniSearchBar,
			wTabControl,
			wTitle,
			wPopDestionCard,
			wAreaAttraction
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
				driRoutePopRoutesTitle: '当季好玩',
				is_show: false,
				attractionList: [{
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/热门景点-正果寺.png',
					title: 'Top.1',
					price: '105',
					detail: '气势恢宏，鉴于崖壁直指蓝天'
				}, {
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/热门景点-明王殿.png',
					title: 'Top.2',
					price: '105',
					detail: '庄严宝相，线条流畅，气韵生动'
				}, {
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/热门景点-大罗宫.png',
					title: 'Top.3',
					price: '105',
					detail: '站立顶层，俯瞰山间，风光旖旎。最大看点是'
				}],
				styles: {
					is_price: true,
				},
				is_city: [{
					title: '正果寺',
					show: true
				}, {
					title: '明王殿',
					show: true
				}, {
					title: '大罗宫',
					show: true
				}],
				driRouteRecommendTitle: '推荐景点',
				driRouteRecommendCardList: [{
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/编组 16.png',
					title: '云南5日游线路',
					text: '5209人收藏*6个景点'
				}, {
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/编组 17.png',
					title: '青海6日游线路',
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

	/* 当季好玩 */
	/* 推荐景点 */
	.driRoutePopRoutesTitle,
	.driRouteRecommendTitle {
		margin: 0 32rpx;
		margin-top: 48rpx;
	}

	.commonStyle {
		margin: 0 32rpx;
	}

	.marginRight {
		margin-right: 0;
	}

	.attractionContent {
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.attractionList {
		margin: 0 8rpx;
	}

	.attractionList>>>.destionCard {
		width: 292rpx;
		height: 377.12rpx;
	}

	.attractionList:first-child {
		margin-left: 32rpx;
	}

	.area {
		display: inline-block;
		margin-right: 20rpx;
		margin-top: 32rpx;
	}

	.area_2 {
		display: inline-block;
		margin-right: 18rpx;
		margin-top: 32rpx;
	}

	.area_3 {
		display: inline-block;
		margin-right: 0rpx;
		margin-top: 32rpx;
	}
</style>
