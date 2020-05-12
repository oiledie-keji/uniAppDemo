<template>
	<view>
		<view class="categoryBG">
			<image src="/static/images/common/shanghai.jpeg" mode="widthFix"></image>
		</view>
		<view class="categoryContainer">
			<category :serverList="serverList"></category>
			<view class="guide">
				<!-- title -->
				<view class="textContanier">
					<text class="textLeft">
						当地指南
						<text class="textFrmae"></text>
					</text>
					<text class="textRight">17~27 ℃</text>
				</view>
				<!-- 内容 -->
				<view class="guideTitle">
					<view class="guideTitleLeft">
						<scroll-view scroll-x="true" class="guideTitleContent">
							<view class="guideTitleContent-item">
								<view>最佳旅行时间</view>
								<view>四季皆宜</view>
							</view>
							<view class="guideTitleContent-item">
								<view>最佳旅行时间</view>
								<view>四季皆宜</view>
							</view>
							<view class="guideTitleContent-item">
								<view>最佳旅行时间</view>
								<view>四季皆宜</view>
							</view>
						</scroll-view>
					</view>
					<view class="guideTitleRight">
						<view>
							更多攻略
						</view>
						<view>
							<!-- <image src="" mode=""></image> -->
						</view>
					</view>
				</view>
				<view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import category from '../../components/w-category/w-category.vue';

	export default {
		components: {
			category
		},
		data() {
			return {
				serverList: [
					{
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
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
.categoryBG image {
	width: 100%;
}
.guide {
	margin-top: 20rpx;
}
.categoryContainer {
	display: block;
	border-top-left-radius: 30rpx;
	border-top-right-radius: 30rpx;
	background-color: #fff;
	position: relative;
	top: -30rpx;
}
.textContanier {
	padding: 0 30rpx;
}
.textLeft {
	font-size: 36rpx;
	font-weight: bold;
	position: relative;
	z-index: 1;
}
.textFrmae {
	display: inline-block;
	width: 100%;
	height: 12rpx;
	background-color: #007AFF;
	position: absolute;
	left: 0;
	bottom: 2rpx;
	z-index: -1;
}
.textRight {
	color: #C0C0C0;
	float: right;
}


.guideTitle > view {
	/* float: left; */
}
.guideTitleLeft {
	display: inline-block;
	width: 80%;
}
.guideTitleRight {
	display: inline-block;
	width: 20%;
}
.guideTitleContent {
	display: flex;
	white-space: nowrap;
}

.guideTitleContent-item {
	flex: 1;
	text-align: center;
	display: inline-block;
	background-color: #0077bb;
	padding: 20rpx;
}
</style>
