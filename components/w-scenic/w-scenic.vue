<template>
	<view>
		<block v-for="(item, index) in scenicList" :key="index">
			<view class="sceniceContent">
				<image :src="item.url" mode="" class="sceniceBg"></image>
				<view class="sceniceInfo">
					<view class="sceniceText">
						<text>{{item.text}}</text>
					</view>
					
					<view class="sceniceInformation">
						<text>{{item.scoreNum}}</text>
						<text class="sceniceDistance">{{item.distance}}</text>
					</view>
					<view class="sceniceComment">
						<text class="score">¥{{item.score}}</text>
						<text class="comment">{{item.comment}}</text>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			scenicList: {
				type: Array,
				default: [{
					url: '/static/images/common/shanghai.jpeg',
					// text: '杭州',
					text: '杭州西湖纯玩一日游西湖游船门票雷峰塔甚至还有断桥雪',
					scoreNum: '5.0',
					distance: '12.4km',
					score: '60',
					comment: '7076条点评'
				}]
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.sceniceContent {
		width: 334rpx;
		border-radius: 16rpx;
		overflow: hidden;
		box-shadow: 10rpx 10rpx 20rpx rgba(0, 0, 0, 0.3);
	}

	.sceniceBg {
		width: 100%;
		height: 336rpx;
	}
	.sceniceInfo {
		height: 200rpx;
		margin: 0 16rpx;
		position: relative;
	}
	.sceniceText {
		margin-top: 20rpx;
		width: 100%;
		font-size: 28rpx;
		color: #2d2d2d;
		overflow: hidden;
		word-break: break-all;
		/* break-all(允许在单词内换行。) */
		text-overflow: ellipsis;
		/* 超出部分省略号 */
		display: -webkit-box;
		/** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 2;
		/** 显示的行数 **/
	}
	.sceniceInformation {
		position: absolute;
		bottom: 66rpx;
		width: 100%;
	}
	.sceniceInformation text {
		font-size: 24rpx;
		color: #777777;
	}
	.sceniceDistance {
		font-size: 20rpx;
		position: absolute;
		right: 0;
		color: #a2a2a2;
		vertical-align: middle;
	}
	.sceniceComment {
		position: absolute;
		bottom: 24rpx;
	}
	.score {
		font-size: 28rpx;
		margin-right: 34rpx;
		color: #ff0021;
	}
	.comment {
		font-size: 20rpx;
		color: #ababab;
	}
</style>
