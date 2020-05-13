<template>
	<view>
		<block v-for="(item, index) in contentList" :key="index">
			<view class="content">
				<view class="contentLeft">
					<image :src="item.url" mode=""></image>
					<image class="sort" src="/static/images/profile/vip.png" mode=""></image>
					<text class="sortNumber">{{item.rank}}</text>
				</view>
				<view class="contentRight">
					<view class="contentTitle">
						{{item.title}}
					</view>
					<view class="contentComment">
						<text class="score">{{item.score}}</text>
						<text class="line">|</text>
						<text>{{item.comment}}</text>
					</view>
					<view class="describe">
						<text>
							{{item.describe}}
							<text class="describeSpan"></text>
						</text>
					</view>
					<view class="price">
						{{item.price}}
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			contentList: {
				type: Array,
				default: [{
					url: '/static/images/common/shanghai.jpeg',
					rank: 'NO.1',
					title: '上海迪士尼乐园',
					score: '4.6分',
					comment: '14.3W条点评',
					describe: '充满欢乐童真的梦话乐园',
					price: '¥120起'
				}, {
					url: '/static/images/common/shanghai.jpeg',
					rank: 'NO.2',
					title: '上海迪士尼乐园',
					score: '4.6分',
					comment: '14.3W条点评',
					describe: '充满欢乐童真的梦话乐园',
					price: '¥120起'
				}]
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.content {
		display: flex;
		margin-top: 40rpx;
	}

	.contentLeft {
		height: 180rpx;
		width: 180rpx;
		position: relative;
	}

	.contentLeft image {
		width: 100%;
		height: 100%;
		border-radius: 8rpx;
	}

	.contentLeft .sort {
		position: absolute;
		top: 0;
		left: 0;
		width: 64rpx;
		height: 64rpx;
	}

	.sortNumber {
		position: absolute;
		top: 0;
		left: 0;
		color: #fff;
		font-size: 24rpx;
	}

	.contentRight {
		margin-left: 40rpx;
		flex: 1;
		min-width: 0;
		position: relative;
	}

	.contentTitle {
		font-size: 36rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.contentComment,
	.price {
		font-size: 22rpx;
		color: #808080;
	}

	.score {
		font-size: 24rpx;
		color: #000;
	}

	.line {
		margin: 0 10rpx;
	}

	.describe {
		color: #CC9900;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 24rpx;
	}

	.describe>text {
		position: relative;
	}

	.describeSpan {
		position: absolute;
		height: 10rpx;
		background-color: rgba(255, 176, 101, .3);
		width: 100%;
		left: 0;
		bottom: 2rpx;
	}

	.price {
		position: absolute;
		bottom: 0;
	}
</style>
