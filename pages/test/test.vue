<template>
	<view>
		<!-- <wa5></wa5> -->
		<view class="categoryBG">
			<image src="/static/images/common/shanghai.jpeg" mode="widthFix"></image>
		</view>
		<view class="categoryContainer">
			<category></category>
			<view class="guide">
				<!-- title -->
				<wa1></wa1>
				<!-- 内容 -->
				<wa3></wa3>
				<wa2></wa2>
			</view>
		</view>
		<wa4></wa4>
		<wa5></wa5>
	</view>
</template>

<script>
	import category from '../../components/w-category/w-category.vue';
	import wa1 from '../../components/w-a1/w-a1.vue';
	import wa2 from '../../components/w-a2/w-a2.vue';
	import wa3 from '../../components/w-a3/w-a3.vue';
	import wa4 from '../../components/w-a4/w-a4.vue';
	import wa5 from '../../components/w-a5/w-a5.vue';
	export default {
		components: {
			category,
			wa1,
			wa2,
			wa3,
			wa4,
			wa5,
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.categoryBG image {
		width: 100%;
	}

	.guide {
		margin-top: 20rpx;
	}
</style>
