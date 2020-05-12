<template>
	<view>
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
	</view>
</template>

<script>
	import category from '../../components/w-category/w-category.vue';
	import wa1 from '../../components/w-a1/w-a1.vue';
	import wa2 from '../../components/w-a2/w-a2.vue';
	import wa3 from '../../components/w-a3/w-a3.vue';
	import wa4 from '../../components/w-a4/w-a4.vue';
	export default {
		components: {
			category,
			wa1,
			wa2,
			wa3,
			wa4
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
	
	.content {
		display: flex;
		justify-content: space-between;
	}
	.contentLeft {
		height: 180rpx;
		width: 180rpx;
		position: relative;
	}
	.contentLeft image {
		width: 100%;
		height: 100%;
		border-radius: 8rpx;
	}
	.contentLeft .sort {
		position: absolute;
		top: 0;
		left: 0;
		width: 64rpx;
		height: 64rpx;
	}
	.sortNumber {
		position: absolute;
		top: 0;
		left: 0;
		color: #fff;
		font-size: 24rpx;
	}
	.contentRight {
		margin-left: 40rpx;
		flex: 1;
		position: relative;
	}
	.contentTitle {
		font-size: 36rpx;
		/* overflow: hidden; */
		/* text-overflow: ellipsis; */
		/* white-space: nowrap; */
	}
	.contentComment ,.price{
		font-size: 22rpx;
		color: #808080;
	}
	.score {
		font-size: 24rpx;
		color: #000;
	}
	.line {
		margin: 0 10rpx;
	}
	.describe {
		color: #CC9900;
		font-size: 24rpx;
	}
	.describe > text {
		position: relative;
	}
	.describeSpan {
		position: absolute;
		height: 10rpx;
		background-color: #CC9966;
		width: 100%;
		left: 0;
		bottom: 2rpx;
	}
	.price {
		position: absolute;
		bottom: 0;
	}
</style>
