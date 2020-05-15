<template>
	<scroll-view scroll-x="true" class="popRoutesContent">
		<block v-for="(item, index) in popRoutesList" :key="index">
			<view class="popRoutes-item" :class="currentIndex == index ? 'active' : ''" @click="handleCurrent(index)">
				<text class="title">{{item.title}}</text>
				<text>{{item.exp}}</text>
				<view class="triangle-down" v-if="currentIndex == index"></view>
			</view>
		</block>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			popRoutesList: {
				type: Array
			}
		},
		data() {
			return {
				currentIndex: 0
			};
		},
		methods: {
			handleCurrent(index) {
				this.currentIndex = index;
			}
		}
	}
</script>

<style>
	.popRoutesContent {
		height: 110rpx;
		display: flex;
		white-space: nowrap;
	}

	.popRoutes-item {
		flex: 1;
		text-align: center;
		display: inline-block;
		width: 126rpx;
		height: 92rpx;
		background-color: #eceff2;
		border-radius: 8rpx;
		margin: 0 16rpx;
		position: relative;
	}

	.popRoutes-item:first-child {
		margin-left: 32rpx;
	}

	.popRoutes-item text {
		width: 100%;
		display: block;
		font-size: 20rpx;
		color: #a4a5a6;
	}

	.popRoutes-item .title {
		margin-top: 20rpx;
		font-size: 28rpx;
		color: #525353;
	}

	.popRoutes-item.active {
		background-color: #ff9a00;
	}

	.popRoutes-item.active text {
		color: #654916;
	}

	.popRoutes-item.active text.title {
		color: #292825;
	}

	.triangle-down {
		width: 0;
		height: 0;
		border-left: 12rpx solid transparent;
		border-right: 12rpx solid transparent;
		border-top: 24rpx solid #ff9a00;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
