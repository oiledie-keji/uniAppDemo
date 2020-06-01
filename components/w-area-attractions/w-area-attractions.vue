<template>
	<view class="areaContent">
		<image :src="area.url" mode="" class="areaBg"></image>
		<view class="areaMask"></view>
		<view class="areaInfo">
			<view>
				<view class="areaInfo_zn">{{area.areaInfo_zn}}</view>
				<view class="line"></view>
				<view class="areaInfo_en">
					{{area.areaInfo_en}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			area: {
				type: Object,
				default: () => ({
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/巴厘岛.png',
					areaInfo_zn: '千岛湖',
					areaInfo_en: 'Qiandao Lake'
				})
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.areaContent {
		position: relative;
		border-radius: 20rpx;
		width: 216rpx;
		height: 216rpx;
		overflow: hidden;
	}

	.areaMask, .areaContent image, .areaInfo {
		width: 100%;
		height: 100%;
	}
	.areaMask,
	.areaInfo {
		position: absolute;
		top: 0;
		left: 0;
	}
	.areaMask {
		background:rgba(0,0,0,0.29);
	}
	.areaInfo {
		color: #FFFFFF;
		font-weight: 600;
		font-weight: 600;
		text-align: center;
	}
	.areaInfo > view {
		width: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.areaInfo_zn {
		font-size: 32rpx;
	}
	.line {
		width: 104rpx;
		height: 1px;
		background-color: #FFFFFF;
		margin: 4rpx auto;
	}
	.areaInfo_en {
		font-size: 24rpx;
	}
	
	
	
	
	.routesInfo {
		margin: 0 16rpx 8rpx;
	}

	.routesTitle {
		color: #333333;
		font-size: 28rpx;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.routesUserAvatar {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
		vertical-align: middle;
	}

	.routesText {
		font-size: 24rpx;
		color: #999999;
	}
</style>
