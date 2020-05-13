<template>
	<view class="popDestinationContent">
		<view class="popDestinationLeft">
			<image :src="popDestinationList[0].url" mode=""></image>
			<view class="hot">
				<image class="hotIcon" src="/static/images/profile/vip.png" mode=""></image>
				<text>{{popDestinationList[0].title}}</text>
			</view>
			<view class="textInfo">
				<view class="price" v-if="popDestinationList[0].price !=''">
					¥<text>{{popDestinationList[0].price}}</text>起
				</view>
				<view class="detail">
					<text>{{popDestinationList[0].detail}}</text>
				</view>
			</view>
		</view>
		<view class="popDestinationRight">
			<block v-for="(item, index) in popDestinationList" :key="index">
				<view class="popDestinationRight-item" v-if="index != 0">
					<image :src="item.url" mode=""></image>
					<view class="hot">
						<text>{{item.title}}</text>
					</view>
					<view class="textInfo">
						<view class="detail">
							<text>{{item.detail}}</text>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			popDestinationList: {
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
	.popDestinationContent {
		height: 416rpx;
		display: flex;
	}

	/* 左边 */
	.popDestinationLeft {
		width: 312rpx;
		position: relative;
	}

	.popDestinationLeft image {
		width: 100%;
		height: 100%;
		border-radius: 18rpx;
		border-top-left-radius: 0;
	}

	/* 右边 */
	.popDestinationRight {
		flex: 1;
		margin-left: 16rpx;
	}

	.popDestinationRight-item {
		position: relative;
		border-radius: 16rpx;
		overflow: hidden;
		height: 200rpx;
		margin-bottom: 16rpx;
	}

	.popDestinationRight-item:last-child {
		margin-bottom: 0;
	}

	.popDestinationRight image {
		width: 100%;
		height: 200rpx;
	}

	/* 右上角 */
	.hot {
		position: absolute;
		top: 0;
		left: 0;
		padding: 10rpx 20rpx 10rpx 10rpx;
		background: linear-gradient(to right, rgba(253, 157, 36, 1), rgba(250, 92, 29, 1));
		color: #fff;
		font-size: 26rpx;
		border-bottom-right-radius: 28rpx;
	}

	.hot .hotIcon {
		width: 20rpx;
		height: 26rpx;
	}

	/* 下方 */
	.textInfo {
		position: absolute;
		bottom: 0;
		padding: 0 32rpx 20rpx 16rpx;
	}

	.popDestinationRight .textInfo {
		width: 100%;
	}

	/* 价钱 */
	.price {
		display: inline-block;
		padding: 10rpx;
		background-color: #fed700;
		font-size: 22rpx;
		border-radius: 8rpx;
	}

	.price text {
		font-size: 26rpx;
	}

	/* 文字 */
	.detail {
		color: #fff;
		margin-top: 20rpx;
		font-size: 24rpx;
		overflow: hidden;
	}

	.popDestinationLeft .detail {
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

	.popDestinationRight .detail {
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
