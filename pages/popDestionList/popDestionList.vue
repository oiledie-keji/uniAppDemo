<template>
	<view>
		<view class="popDestionList">
			<block v-for="(item, index) in popDestinationList" :key="index">
				<view class="popDestionList-item">
					<navigator url="/pages/scenicDetail/scenicDetail">
						<wPopDestionCard :destionCard="item" :styles="index === 0 ? firstStyle: normalStyle" />
					</navigator>
				</view>
			</block>

		</view>
		<view class="bottomText">到底了，逛逛其他景点吧</view>
	</view>
</template>

<script>
	import wPopDestionCard from '../../components/w-pop-destion-card/w-pop-destion-card.vue'
	export default {
		components: {
			wPopDestionCard
		},
		data() {
			return {
				popDestinationList: [{
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/巴厘岛.png',
					title: '巴厘岛',
					price: '1080',
					detail: '在细腻的沙滩上，看着太阳渐渐落下'
				}, {
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/马尔代夫.png',
					title: '马尔代夫',
					price: '1289',
					detail: '蜜月优选，打卡网红水上屋'
				}, {
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/普吉岛.png',
					title: '普吉岛',
					price: '2890',
					detail: '吃生猛海鲜，赏沙滩日落'
				}],
				firstStyle: {
					is_hot: true,
					is_price: true
				},
				normalStyle: {
					is_price: true
				}
			}
		},
		methods: {

		},
		onShow() {

		}
	}
</script>

<style>
	.popDestionList {
		margin: 32rpx 32rpx 0rpx;
	}

	.popDestionList-item {
		width: 686rpx;
		height: 388rpx;
		margin-bottom: 32rpx;
	}

	.bottomText {
		margin: 16rpx 0 32rpx 0;
		text-align: center;
		color: rgba(153, 153, 153, 1);
		font-size: 20rpx;
	}

	.popDestionList-item>>>.textInfo {
		padding: 0 32rpx 16rpx;
	}
</style>
