<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :indicator-color="swiperColor.indicatorColor"
	 :indicator-active-color="swiperColor.indicatorColorActive" class="swiper">
		<block v-for="(item, index) in swiperList" :key="index">
			<swiper-item>
				<image :src="item.url" mode=""></image>
			</swiper-item>
		</block>
	</swiper>
</template>

<script>
	export default {
		props: {
			swiperList: {
				type: Array
			},
			swiperColor: {
				type: Object
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.swiper,
	.swiper image {
		width: 100%;
		height: 100%;
	}

	.swiper {
		border-radius: 14rpx;
		overflow: hidden;
	}
</style>
