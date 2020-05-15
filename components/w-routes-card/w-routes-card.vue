<template>
	<scroll-view scroll-x="true" class="routes">
		<block v-for="(item, index) in routesCardList" :key="index">
			<view class="routesContent">
				<image :src="item.url" mode="" class="routesBg"></image>
				<view class="routesInfo">
					<view class="routesText">
						<text>{{item.routesText}}</text>
					</view>
					<view class="routesUser">
						<image :src="item.routesUserAvatar" mode="" class="routesUserAvatar"></image>
						<text class="routesUserName">{{item.routesUserName}}</text>
					</view>
				</view>
			</view>
		</block>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			routesCardList: {
				type: Array
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.routes {
		display: flex;
		white-space: nowrap;
	}

	.routesContent {
		flex: 1;
		display: inline-block;
		border-radius: 18rpx;
		width: 258rpx;
		margin: 0 18rpx;
		overflow: hidden;
		box-shadow: 10rpx 10rpx 20rpx #eaeaea;
	}

	.routesContent:first-child {
		margin-left: 32rpx;
	}

	.routesBg {
		width: 258rpx;
		height: 258rpx;
	}

	.routesInfo {
		margin: 0 16rpx 0;
		height: 156rpx;
		position: relative;
	}

	.routesText {
		margin-top: 20rpx;
		width: 100%;
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

	.routesUser {
		position: absolute;
		bottom: 16rpx;
	}
	.routesUserAvatar {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
		vertical-align: middle;
	}

	.routesUserName {
		font-size: 22rpx;
		vertical-align: middle;
		margin-left: 8rpx;
	}

	.routesContent text {
		font-size: 24rpx;
		vertical-align: middle;
		white-space: normal;
	}
</style>
