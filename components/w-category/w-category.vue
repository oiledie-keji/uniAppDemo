<template>
	<scroll-view scroll-x="true" class="categoryContainer">
		<block v-for="(item, index) in serverList" :key="index">
			<view class="category-item" @tap="navigatorToUrl(item.navigatorUrl, item.title)">
				<!-- <navigator :url="item.navigatorUrl"> -->
				<image :src="item.url"></image>
				<view>
					<text>{{item.title}}</text>
				</view>
				<!-- </navigator> -->
			</view>
		</block>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			serverList: {
				type: Array,
				default: [{
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: "/static/images/profile/message.png",
					title: "宣传推广"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "旅游路线"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "景区介绍"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "门票预定"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "车辆租凭"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "中途补给"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "车辆维修"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "酒店住宿"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "餐厅美食"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: '/static/images/profile/message.png',
					title: "应急救援"
				}, ]
			}
		},
		data() {
			return {

			};
		},
		methods: {
			navigatorToUrl(parm1, parm2) {
				uni.navigateTo({
					url: parm1 + '?name=' + parm2
				})
			}
		}
	}
</script>

<style>
	.categoryContainer {
		display: flex;
		white-space: nowrap;
	}

	.category-item {
		flex: 1;
		text-align: center;
		display: inline-block;
		margin-right: 40rpx;
		margin-top: 20rpx;
	}

	.category-item:last-child {
		margin-right: 0rpx;
	}

	.category-item image {
		width: 128rpx;
		height: 128rpx;
	}
</style>
