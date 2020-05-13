<template>
	<view>
		<view class="routesContent">
			<image src="/static/images/common/shanghai.jpeg" mode="" class="routesBg"></image>
			<view>
				<text>三亚5日右边特色景点</text>
				<view>
					<image src="/static/images/common/shanghai.jpeg" mode="" class="routesUser"></image>
					<text class="routesName">虫虫虫</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	.routesContent {
		border-radius: 18rpx;
		width: 200rpx;
	}

	.routesBg {
		width: 200rpx;
		height: 200rpx;
	}

	.routesUser {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
	}

	.routesName {}

	.routesContent text {
		display: inline-block;
		width: 100%;
	}
</style>
