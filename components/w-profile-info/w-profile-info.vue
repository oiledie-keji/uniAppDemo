<template>
	<view class="profileInfo">
		<block v-for="(item, index) in profileInfo" :key="index">
			<view class="info-item">
				<view>
					<text class="count">{{item.count}}</text>
					<text>{{item.unit}}</text>
				</view>
				<view>{{item.title}}</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			profileInfo: {
				type: Array
			}
		},
		data() {
			return {

			};
		},
		methods: {

		}
	}
</script>

<style>
	.profileInfo {
		display: flex;
		font-size: 28rpx;
		justify-content: space-between;
	}

	.info-item {
		flex: 1;
		text-align: center;
		padding: 50rpx 0;
		background: #fff;
		border-right: 1rpx solid #f8f8f8;
	}

	.count {
		color: #ff5f3e;
		font-size: 40rpx;
		font-weight: 700;
		line-height: 1.5;
	}
</style>
