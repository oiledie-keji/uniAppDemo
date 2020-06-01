<template>
	<view class="ticketInfo">
		<view class="ticketType">
			<view>绵山景区门票+索道+自助午餐+酒店住宿</view>
			<text>随时退</text>
		</view>
		<view class="ticketAction">
			<view class="ticketBtn">
				<button type="default">预定</button>
			</view>
			<view class="ticketPrice">
				<view class="price">¥<text>105</text></view>
				<view class="ticketCount">已售3.5万</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	.ticketInfo {
		padding: 32rpx 0;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid rgba(0, 0, 0, 0.04);
	}

	.ticketType {
		width: 50%;
	}

	.ticketType view {
		font-size: 28rpx;
		color: rgba(51, 51, 51, 1);
	}

	.ticketType text {
		border-radius: 10rpx;
		font-size: 20rpx;
		border: 1px solid rgba(187, 187, 187, 1);
		color: rgba(187, 187, 187, 1);
		display: inline-block;
		padding: 4rpx 16rpx;
		margin-top: 6rpx;
	}

	.ticketAction {
		width: 50%;
		display: flex;
		flex-direction: row-reverse;
	}

	.ticketPrice {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.ticketPrice .price {
		font-size: 24rpx;
		font-weight: 600;
		color: rgba(250, 79, 29, 1);
	}

	.ticketPrice .price text {
		font-size: 28rpx;
	}

	.ticketPrice .ticketCount {
		font-size: 20rpx;
		color: rgba(102, 102, 102, 1);
	}

	.ticketBtn {
		margin-left: 16rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.ticketBtn button {
		width: 116rpx;
		height: 44rpx;
		font-size: 28rpx;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 44rpx;
		background-color: rgba(250, 79, 29, 1);
		border-radius: 20rpx;
		border: none;
	}
</style>
