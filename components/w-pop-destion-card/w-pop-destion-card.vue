<template>
	<view class="destionCard">
		<image :src="destionCard.url" mode=""></image>
		<view class="hot">
			<image v-if="styles.is_hot" class="hotIcon" src="http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/首页-热门景点.png" mode=""></image>
			<text class="hotContent">{{destionCard.title}}</text>
		</view>
		<view class="textInfo" :class="styles.is_textInfo ? '' : 'textInfo_normal'">
			<view class="cityText" v-if="is_city.show">{{ is_city.title }}</view>
			<view class="price" v-if="styles.is_price">
				¥<text>{{destionCard.price}}</text>起
			</view>
			<view class="detail" v-if="is_detail" :class="styles.is_detail ? 'detail_special' : '.detail_normal'">
				<text>{{destionCard.detail}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			destionCard: {
				type: Object,
				default: () => ({
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/热门景点-正果寺.png',
					title: '正果寺',
					price: '105',
					detail: '气势恢宏，鉴于崖壁直指蓝天'
				})
			},
			styles: {
				type: Object,
				default: () => ({
					is_hot: false,
					is_price: false,
					is_detail: false
				})
			},
			is_city: {
				type: Object,
				default: () => ({
					title: '',
					show: false
				})
			},
			is_detail: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.destionCard {
		display: inline-block;
		width: 100%;
		height: 100%;
		position: relative;
		border-radius: 20rpx;
		overflow: hidden;
	}

	.destionCard image {
		width: 100%;
		height: 100%;
	}

	/* 右上角 */
	.hot {
		/* height: 48rpx; */
		position: absolute;
		top: 0;
		left: 0;
		padding: 0rpx 20rpx 4rpx 16rpx;
		background: linear-gradient(316deg, #FA541C 0%, #FF9021 100%);
		color: #FFFFFF;
		font-size: 26rpx;
		border-bottom-right-radius: 32rpx;
		font-weight: 500;
	}

	.hot .hotIcon {
		width: 20rpx;
		height: 24rpx;
		vertical-align: middle;
		margin-right: 7.04rpx;
	}

	.hot .hotContent {
		vertical-align: middle;
	}

	/* 下方 */
	.textInfo {
		position: absolute;
		bottom: 0;
		padding: 0 16rpx 16rpx;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 1) 100%);
	}

	.textInfo_normal {
		width: 100%;
		box-sizing: border-box;
	}
	
	/* 城市 */
	.cityText {
		font-size: 32rpx;
		color: #FFFFFF;
		font-weight: 600;
		margin-bottom: 8rpx;
	}

	/* 价钱 */
	.price {
		display: inline-block;
		padding: 4rpx 12rpx;
		background-color: #FADB14;
		font-size: 24rpx;
		border-radius: 10rpx;
		font-weight: 500;
		color: rgba(51, 51, 51, .9);
	}

	.price text {
		font-size: 28rpx;
	}

	/* 文字 */
	.detail {
		color: #fff;
		margin-top: 8rpx;
		font-size: 24rpx;
		overflow: hidden;
	}

	.detail_special {
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

	.detail_normal {
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
