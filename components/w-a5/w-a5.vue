<template>
	<view class="content">
		<image :src="snackInfo.url" mode=""></image>
		<view class="mk"></view>
		<view class="contentPlace">
			<view class="contentTitle">{{snackInfo.title}}</view>
			<view class="contetnText">{{snackInfo.explanation}}</view>
			<view class="contentRecommend">{{snackInfo.recommend}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			snackInfo: {
				type: Object,
				default: {
					url: "/static/images/common/shanghai.jpeg",
					title: '生煎',
					explanation: '生煎是上海的一种地方传统小吃，又叫生煎包或生煎馒头。传统生煎多来自街边小店，大铁锅简直。面皮雪白松软，底部焦香酥脆，出锅前撒满芝麻和香葱，个小味儿香，少有汤汁。后来随着制作工艺的多样化，出现了另一种生煎包，其皮底不焦，汤汁浓郁，肉馅紧实有弹性。',
					recommend: '15家推荐餐厅 >',
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.content {
		position: relative;
		margin: 0 20rpx;
	}

	.content image {
		border-radius: 8rpx;
		width: 100%;
		height: 400rpx;
		padding: 0;
		margin: 0;
	}

	.mk {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(0255, 255, 255, 0));
	}

	.contentPlace {
		position: absolute;
		top: 0;
		left: 0;
		margin-left: 20rpx;
		height: 100%;
	}

	.contentTitle {
		margin-top: 40rpx;
		font-size: 40rpx;
	}

	.contetnText {
		margin-top: 20rpx;
		width: 80%;
		color: #444;
		overflow: hidden;
		word-break: break-all;
		/* break-all(允许在单词内换行。) */
		text-overflow: ellipsis;
		/* 超出部分省略号 */
		display: -webkit-box;
		/** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 3;
		/** 显示的行数 **/
	}

	.contentRecommend {
		position: absolute;
		bottom: 40rpx;
	}
</style>
