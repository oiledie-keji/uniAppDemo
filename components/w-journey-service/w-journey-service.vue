<template>
	<view class="serviceContainer">
		<block v-for="(item, index) in serviceList" :key="index">
			<view class="navigatorUrl">
				<view class="service-item" :style="{ boxShadow: '0rpx 4rpx 12rpx 0rpx ' + item.colorStyle }" @tap="navigatorToUrl(item.navUrl, item.title)">
					<image :src="item.url" mode="widthFix"></image>
				</view>
			</view>
			<!-- <navigator :url="item.navUrl" class="navigatorUrl"> -->

			<!-- </navigator> -->
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			serviceList: {
				type: Array
			}
		},
		data() {
			return {

			};
		},
		methods: {
			navigatorToUrl(parm1, parm2) {
				if (parm2 != '救援') {
					if (parm2 == '补给') {
						uni.navigateToMiniProgram({
						  appId: 'wxc46a4e6bd7f7f5fd',
						  // path: 'pages/index/index?id=123',
						  // extraData: {
						  //   'data1': 'test'
						  // },
						  success(res) {
						    // 打开成功
						  }
						})
					} else {
						uni.showToast({
							title: '正在添加素材～',
							icon: 'none'
						})
					}
					
					return
				}
				uni.navigateTo({
					url: parm1 + '?title=' + parm2
				})
			}
		}
	}
</script>

<style>
	.serviceContainer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.service-item {
		flex: 100%;
		display: inline-block;
		width: 334rpx;
		height: 188rpx;
		border-radius: 10rpx;
	}

	.navigatorUrl {
		margin-top: 32rpx;
		width: 334rpx;
		height: 188rpx;
	}

	.service-item image {
		width: 100%;
		height: 100%;
	}
</style>
