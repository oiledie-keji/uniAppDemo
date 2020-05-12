<template>
	<view class="profile">
		<!-- 头部 -->
		<wprofileheader></wprofileheader>
		<!-- 信息 -->
		<wprofileinfo :profileInfo="profileInfo"></wprofileinfo>
		<!-- 列表信息 -->
		<wprofilelistinfo :listInfo="listInfo"></wprofilelistinfo>
		<wprofilelistinfo :listInfo="listInfo1"></wprofilelistinfo>
	</view>
</template>

<script>
	import wprofileheader from '../../components/w-profile-header/w-profile-header.vue';
	import wprofileinfo from '../../components/w-profile-info/w-profile-info.vue';
	import wprofilelistinfo from '../../components/w-profile-list-info/w-profile-list-info.vue';
	export default {
		components: {
			wprofileheader,
			wprofileinfo,
			wprofilelistinfo
		},
		data() {
			return {
				profileInfo: [{
						count: 0.00,
						unit: '元',
						title: '我的余额'
					},
					{
						count: 0,
						unit: '个',
						title: '我的优惠'
					},
					{
						count: 0,
						unit: '分',
						title: '我的积分'
					},
				],
				listInfo: [{
						url: '/static/images/profile/message.png',
						title: '实名认证'
					}
				],
				listInfo1: [{
						url: '/static/images/profile/cart.png',
						title: '优惠券'
					},
					{
						url: '/static/images/profile/app.png',
						title: '我的特权'
					},
					{
						url: '/static/images/profile/pointer.png',
						title: '签到'
					},
					{
						url: '/static/images/profile/vip.png',
						title: '旅行足迹'
					},
					{
						url: '/static/images/profile/vip.png',
						title: '我的收藏'
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.profile {
		height: 100%;
		background-color: #f8f8f8;
	}
</style>
