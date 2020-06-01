<template>
	<view class="popDestinationContent">
		<view class="popDestinationLeft">
			<navigator url="/pages/scenicDetail/scenicDetail?title=正果寺">
				<wPopDestionCard :destionCard="popDestinationList[0]" :styles="popDestionLeftStyle" />
			</navigator>
		</view>
		<view class="popDestinationRight">
			<block v-for="(item, index) in popDestinationList" :key="index">
				<view class="popDestinationRight-item" v-if="index != 0">
					<navigator :url="'/pages/scenicDetail/scenicDetail?title='+(item.title)">
						<wPopDestionCard :destionCard="item" />
					</navigator>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import wPopDestionCard from '../w-pop-destion-card/w-pop-destion-card.vue'
	export default {
		components: {
			wPopDestionCard
		},
		props: {
			popDestinationList: {
				type: Array
			}
		},
		data() {
			return {
				popDestionLeftStyle: {
					is_hot: true,
					is_textInfo: true,
					is_detail: true,
					is_price: true
				}
			};
		}
	}
</script>

<style>
	.popDestinationContent {
		height: 416rpx;
		display: flex;
	}

	/* 左边 */
	.popDestinationLeft {
		width: 312rpx;
	}

	/* 右边 */
	.popDestinationRight {
		flex: 1;
		margin-left: 16rpx;
	}

	.popDestinationRight-item {
		width: 100%;
		height: 200rpx;
		margin-bottom: 16rpx;
	}

	.popDestinationRight-item:last-child {
		margin-bottom: 0;
	}
</style>
