<template>
	<view class="scenicContainer">
		<view class="scenicLeft">
			<block v-for="(item, index) in scenicList" :key="index">
				<navigator :url="'/pages/scenicDetail/scenicDetail?title='+(item.title)">
					<view class="sceniceContent" v-if="index % 2 === 1">
						<image :src="item.url" mode="" class="sceniceBg"></image>
						<view class="sceniceInfo">
							<view class="sceniceText">
								<text>{{item.text}}</text>
							</view>
							<view class="sceniceInformation">
								<view class="start">
									<!-- 不可点击状态 -->
									<uni-rate disabled="true" value="3.5" size="12"></uni-rate>
								</view>
								<text>{{item.scoreNum}}</text>
								<text class="sceniceDistance">{{item.distance}}</text>
							</view>
							<view class="sceniceComment">
								<text class="score">¥{{item.score}}</text>
								<text class="comment">{{item.comment}}</text>
							</view>
							<view class="serciveUser">
								<!-- <view class="userAvatar">
									<image :src="item.user.avatar" mode=""></image>
								</view> -->
								<image :src="item.user.avatar" mode="" class="userAvatar"></image>
								<view>
									<text class="userText">{{item.user.text}}</text>
								</view>
							</view>
						</view>
					</view>
				</navigator>
			</block>

		</view>
		<view class="scenicRight">

			<block v-for="(item, index) in scenicList" :key="index">
				<navigator :url="'/pages/scenicDetail/scenicDetail?title='+(item.title)">
					<view class="sceniceContent sceniceContentOdd" v-if="index % 2 === 0">
						<image :src="item.url" mode="" class="sceniceBg"></image>
						<view class="sceniceInfo">
							<view class="sceniceText">
								<text>{{item.text}}</text>
							</view>
							<view class="sceniceInformation">
								<view class="start">
									<!-- 不可点击状态 -->
									<uni-rate disabled="true" value="3.5" size="12"></uni-rate>
								</view>
								<text>{{item.scoreNum}}</text>
								<text class="sceniceDistance">{{item.distance}}</text>
							</view>
							<view class="sceniceComment">
								<text class="score">¥{{item.score}}</text>
								<text class="comment">{{item.comment}}</text>
							</view>
							<view class="serciveUser">
								<!-- <view class="userAvatar">
								<image :src="item.user.avatar" mode=""></image>
							</view> -->
								<image :src="item.user.avatar" mode="" class="userAvatar"></image>
								<view>
									<text class="userText">{{item.user.text}}</text>
								</view>
							</view>
						</view>
					</view>
				</navigator>
			</block>
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default {
		components: {
			uniRate
		},
		props: {
			scenicList: {
				type: Array,
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.scenicContainer {
		width: 100%;
		margin: auto;
		display: flex;
		flex-direction: row;
		height: auto;
	}

	.scenicLeft,
	.scenicRight {
		display: flex;
		flex-flow: column wrap;
		width: 100%;
	}

	.sceniceContent {
		display: inline-block;
		width: 334rpx;
		border-radius: 20rpx;
		overflow: hidden;
		box-shadow: 0 4rpx 16rpx 0rpx rgba(0, 0, 0, 0.1);
		background: rgba(255, 255, 255, 1);
		margin-top: 16rpx;
		margin-right: 16rpx;
	}

	.sceniceContentOdd {
		margin-right: 0;
	}

	.sceniceBg {
		width: 100%;
		height: 336rpx;
	}

	.sceniceInfo {
		margin: 0 16rpx;
		font-size: 28rpx;
		margin-top: 8rpx;
	}

	.sceniceText {
		width: 100%;
		color: rgba(51, 51, 51, 1);
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
		margin-top: 10rpx;
		width: 100%;
		font-size: 24rpx;
	}

	.sceniceInformation .start {
		display: inline-block;
		width: 136rpx;
		vertical-align: middle;
	}

	.sceniceInformation text {
		color: rgba(102, 102, 102, 1);
		vertical-align: middle;
	}

	.sceniceDistance {
		color: rgba(153, 153, 153, 1);
		vertical-align: middle;
		margin-left: 32rpx;
	}

	.sceniceComment {
		margin-top: 8rpx;
	}

	.score {
		color: rgba(248, 67, 67, 1);
	}

	.comment {
		font-size: 24rpx;
		color: rgba(102, 102, 102, 1);
		margin-left: 16rpx;
	}

	.serciveUser {
		margin: 14rpx 0;
		border-top: 1px solid rgba(0, 0, 0, 0.04);
		padding-top: 16rpx;
		/* display: flex; */
		position: relative;
	}

	.userAvatar {
		display: inline-block;
		width: 52rpx;
		height: 52rpx;
		border-radius: 50%;
		overflow: hidden;
		vertical-align: middle;
	}

	.serciveUser view {
		display: inline-block;
		height: 52rpx;
		width: 246rpx;
		font-size: 20rpx;
		color: rgba(102, 102, 102, 1);
		vertical-align: middle;
		margin-left: 4rpx;
	}

	.userText {
		width: 100%;
		vertical-align: middle;
		margin-left: 4rpx;
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
</style>
