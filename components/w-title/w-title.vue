<template>
	<view class="textContanier">
		<view class="textContanierLeft" :class="borderStyle ? 'ticketHeader' : ''">
			<view :class="borderStyle ? 'ticketHeaderTitle' : ''">{{ title }}</view>
			<view class="ticketHeaderPoint">{{ point }}</view>
		</view>
		<view class="textContanierRight" v-if="textMore">
			<navigator :url="navUrl" class="navigatorBox">
				<view class="textBox">
					<view class="textRight">{{ text }}</view>
					<image src="http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/首页备份.png" mode="" class="arrowRight" />
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '请填写标题'
			},
			borderStyle: {
				type: Boolean,
				default: false
			},
			point: {
				type: String
			},
			textMore: {
				type: Boolean,
				default: true
			},
			text: {
				type: String,
				default: '更多'
			},
			navUrl: {
				type: String,
				default: '#'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.textContanier {
		display: flex;
		flex-direction: row;
	}

	/* 左边 */
	.textContanierLeft {
		width: 70%;
		font-size: 36rpx;
		font-weight: 500;
		color: #333333;
	}

	.ticketHeader {
		padding: 16rpx 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.04);
	}

	.ticketHeaderTitle {
		color: rgba(0, 0, 0, 1);
	}

	.ticketHeaderPoint {
		font-size: 20rpx;
		color: rgba(102, 102, 102, 1);
	}

	/* 右边 */
	.textContanierRight {
		width: 30%;
		display: flex;
		flex-direction: row-reverse;
	}
	
	.navigatorBox {
		display: flex;
		
		flex-direction: column;
		justify-content: center;
	}
	.textContanierRight .textBox {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.textRight {
		line-height: 44rpx;
		font-size: 24rpx;
		color: #BBBBBB;
	}

	.arrowRight {
		width: 44rpx;
		height: 44rpx;
	}
</style>
