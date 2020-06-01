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
		height: 102rpx;
		display: flex;
		white-space: nowrap;
	}

	.popRoutes-item {
		flex: 1;
		text-align: center;
		display: inline-block;
		width: 126rpx;
		height: 92rpx;
		background-color: #F6F7F8;
		border-radius: 10rpx;
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
		color: #666666;
	}

	.popRoutes-item .title {
		margin-top: 12rpx;
		font-size: 28rpx;
		color: #525353;
	}

	.popRoutes-item.active {
		background-color: #FAAD14;
	}

	.popRoutes-item.active text {
		color: rgba(51, 51, 51, 0.9);
		font-weight: 500;
	}

	.popRoutes-item.active text.title {
		color: rgba(51, 51, 51, 0.9);
		font-weight: 500;
	}

	.triangle-down {
		width: 0;
		height: 0;
		border-left: 26rpx solid transparent;
		border-right: 26rpx solid transparent;
		border-top: 20rpx solid #FAAD14;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
