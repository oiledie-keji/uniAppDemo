<template>
	<scroll-view scroll-x="true">
		<view class="categoryContainer">
			<block v-for="(item, index) in categoryList" :key="index">
				<view class="category-item" @tap="navigatorToUrl(item.navigatorUrl, item.title)">
					<image :src="item.url"></image>
					<view>
						<text>{{item.title}}</text>
					</view>
				</view>
			</block>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			categoryList: {
				type: Array,
				default: [{
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: "http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/images/profile/message.png",
					title: "宣传推广"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/images/profile/message.png',
					title: "旅游路线"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/images/profile/message.png',
					title: "景区介绍"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/images/profile/message.png',
					title: "门票预定"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/images/profile/message.png',
					title: "车辆租凭"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/images/profile/message.png',
					title: "中途补给"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/images/profile/message.png',
					title: "车辆维修"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/images/profile/message.png',
					title: "酒店住宿"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/images/profile/message.png',
					title: "餐厅美食"
				}, {
					navigatorUrl: '/pages/secondIndex/secondIndex',
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/images/profile/message.png',
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
				console.log(parm2)
				if (parm2 == '门票' || parm2 == '美食') {
					uni.showToast({
					    title: '正在添加素材～',
						icon: 'none'
					})
					return
				}
				uni.navigateTo({
					url: parm1 + '?name=' + parm2
				})
			}
		}
	}
</script>

<style>
	.categoryContainer {
		/* width: 100%; */
		/* margin: auto; */
		display: flex;
		flex-direction: row;
		/* height: auto; */
	}

	.category-item {
		display: flex;
		flex-flow: column wrap;
		width: 104rpx;
		text-align: center;
		margin: 0 34rpx;
		color: #666666;
	}

	.category-item:first-child {
		margin-left: 68rpx;
	}

	.category-item image {
		width: 104rpx;
		height: 104rpx;
	}

	.category-item text {
		margin-top: 4rpx;
		font-size: 28rpx;
	}
</style>
