<template>
	<uni-swiper-dot :info="swiperList" :current="current" :mode="mode" :dots-styles="swiperStyle">
		<swiper class="swiper-box" @change="change" autoplay interval="3000" circular>
			<swiper-item v-for="(item, index) in swiperList" :key="index">
				<image :src="item.url" mode=""></image>
			</swiper-item>
		</swiper>
	</uni-swiper-dot>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	export default {
		components: {
			uniSwiperDot
		},
		props: {
			swiperList: {
				type: Array
			},
			swiperStyle: {
				type: Object
			}
		},
		data() {
			return {
				current: 0,
				mode: 'round'
			};
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		}
	}
</script>

<style>
	.swiper-box image {
		width: 100%;
		height: 100%;
	}

	.swiper-box {
		border-radius: 20rpx;
		overflow: hidden;
	}
</style>
