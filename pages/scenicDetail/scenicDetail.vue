<template>
	<view class="content">
		<!-- 透明导航栏 -->
		<nav-bar ref="navBar" :scrollTop="scrollTop" transparentFixedFontColor="#FFF" type="transparentFixed">
			<view class="transparent_fixed_preview" slot="transparentFixedRight"></view>
			<view class="preview" slot="right"></view>
		</nav-bar>
		<view class="detalImg">
			<image :src="list[current].i1" mode=""></image>
		</view>
		<view class="scenicDetail">
			<view class="commonStyle">
				<view>
					<wTitle :title="'绵山风景名胜区'" :textMore="false" />
					<view class="labelBox">
						<block v-for="(item, index) in labelList" :key="index">
							<view class="labelStyle" :class="item.labelStyle">{{ item.title }}</view>
						</block>
					</view>
				</view>
				<view class="img0Contanier">
					<image :src="list[current].i2" mode=""></image>
				</view>
				<view class="scenicTicket">
					<wTitle 
						:title="'景区门票'" 
						:point="'平均一分钟出票，全天通用，刷身份证入园'"
						:borderStyle="true"
						:textMore="false"
					/>
					<block v-for="(item, index) in 5" :key="index">
						<view class="ticketInfo">
							<wTicketInfo />
						</view>
					</block>
				</view>
				<view class="scenicTicket">
					<wTitle
						:title="'门票套餐'" 
						:point="'平均一分钟出票，全天通用，刷身份证入园'"
						:borderStyle="true"
						:textMore="false"
					/>
					<block v-for="(item, index) in 2" :key="index">
						<view class="ticketInfo">
							<wTicketInfo />
						</view>
					</block>
				</view>

				<view class="img3Contanier">
					<image :src="ilist.i5" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from "@/components/zhouWei-navBar/index"
	import wRoutesCard from '@/components/w-routes-card/w-routes-card.vue'
	import wTitle from '@/components/w-title/w-title.vue'
	import wTicketInfo from '@/components/w-ticket-info/w-ticket-info.vue'
	export default {
		components: {
			navBar,
			wRoutesCard,
			wTitle,
			wTicketInfo
		},
		data() {
			return {
				scrollTop: 0,
				current: 0,
				title: '绵山4日游',
				ilist: {
					i3: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/门票.png',
					i4: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/门票套餐.png',
					i5: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/用户评价.png'
				},
				list: [{
					i1: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/水涛沟秋景备份.png',
					i2: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/介绍.png',
				}, {
					// 正果寺
					i1: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/22.png',
					i2: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/介绍.png',
				}, {
					// 明王殿
					i1: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/33.png',
					i2: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/iPhone 8备份 6.png',
				}, {
					// 大罗宫
					i1: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/水涛沟秋景备份 2.png',
					i2: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/iPhone 8备份 5.png',
				}, {
					i1: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/栖贤谷.png',
					i2: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/介绍.png',
				}, {
					i1: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/山西绵山.png',
					i2: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/介绍.png',
				}, {
					i1: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/洪崖大峡谷.png',
					i2: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/介绍.png',
				}, {
					i1: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/介公岭.png',
					i2: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/介绍.png',
				}, {
					i1: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/洪崖大峡谷.png',
					i2: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/介绍.png',
				}],
				labelList: [{
					title: '5A景区',
					labelStyle: 'labelStyle1'
				}, {
					title: '16米秦代古柏',
					labelStyle: 'labelStyle2'
				}, {
					title: '包骨真身佛像',
					labelStyle: 'labelStyle2'
				}]
			}
		},
		onLoad(options) {
			console.log(111, options)
			// this.title = options.title;
			if (options.title == '正果寺') {
				this.current = 1
			} else if (options.title == '明王殿') {
				this.current = 2
			} else if (options.title == '大罗宫') {
				this.current = 3
			} else if (options.title == '栖贤谷') {
				this.current = 4
			} else if (options.title == '山西绵山') {
				this.current = 5
			} else if (options.title == '洪崖大峡谷') {
				this.current = 6
			} else if (options.title == '介公岭') {
				this.current = 7
			}
		},
		methods: {

		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style>
	.content {
		position: relative;
	}

	.scenicDetail {
		position: absolute;
		top: 710rpx;
		border-radius: 40rpx 40rpx 0rpx 0rpx;
		width: 750rpx;
		background: rgba(255, 255, 255, 1);
	}

	.commonStyle {
		margin: 0 32rpx;
		margin-top: 48rpx;
	}

	.detalImg image {
		width: 750rpx;
		height: 750rpx;
	}
	
	.img0Contanier image {
		width: 686rpx;
		height: 448rpx;
	}

	.img1Contanier,
	.img2Contanier {
		width: 100%;
		height: 100%;
		border-radius: 20rpx;
		overflow: hidden;
		box-shadow: 0px 4rpx 16rpx 0px rgba(0, 0, 0, 0.1);
		margin-top: 32rpx;
	}

	.img1Contanier,
	.img1Contanier image {
		width: 686rpx;
		height: 848rpx;
	}

	.img2Contanier,
	.img2Contanier image {
		width: 686rpx;
		height: 458rpx;
	}

	.img3Contanier {
		margin-top: 32rpx;
	}

	.img3Contanier image {
		width: 686rpx;
		height: 870rpx;
	}

	.labelBox {
		margin-top: 16rpx;
	}
	.labelStyle {
		font-size: 24rpx;
		font-weight: 500;
		border-radius: 12rpx;
		margin-right: 16rpx;
		padding: 4rpx 16rpx 2rpx;
	}
	.labelStyle1 {
		display: inline-block;
		color: #FFFFFF;
		background-color: rgba(23, 180, 180, 1);
	}
	
	.labelStyle2 {
		display: inline-block;
		color: rgba(23, 180, 180, 1);
		background-color: rgba(23, 180, 180, 0.2);
	}
	
	.scenicTicket {
		margin-top: 32rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0rpx 4rpx 16rpx 0rpx rgba(0, 0, 0, 0.05);
		border-radius: 20rpx;
		padding: 0 32rpx;
	}

	.ticketInfo >>>.ticketInf:last-child {
		border-bottom: none;
	}
</style>
