<template>
	<scroll-view scroll-x="true">
		<view class="routesCardSeroll">
			<block v-for="(item, index) in routesCardList" :key="index">
				<view @tap="navigatorToUrl('/pages/routeDetail/routeDetail', item.title)">
					<wDrivingRoute :drivingRouteData="item"/>
				</view>
			</block>
		</view>
	</scroll-view>
</template>

<script>
	import wDrivingRoute from '../w-driving-route/w-driving-route.vue'
	export default {
		components: {
			wDrivingRoute
		},
		props: {
			routesCardList: {
				type: Array
			}
		},
		data() {
			return {

			};
		},
		methods: {
			navigatorToUrl(parm1,parm2) {
				uni.navigateTo({
					url: parm1 + '?title=' + parm2
				})
			}
		}
	}
</script>

<style>
	.routesCardSeroll {
		/* height: 400rpx; */
		width: 100%;
		margin: auto;
		display: flex;
		flex-direction: row;
		height: auto;
	}
	.routesCardContent {
		/* width: 100%;
		margin: auto;
		display: flex;
		flex-direction: row;
		height: auto; */
	}
</style>
