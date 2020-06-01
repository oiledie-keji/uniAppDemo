<template>
	<view class="baseView" id="baseView">
		<page1 :style="{'display':curPage == 'page1' ?'block':'none'}"></page1>
		<page2 :style="{'display':curPage == 'page2' ?'block':'none'}"></page2>
		<page3 :style="{'display':curPage == 'page3' ?'block':'none'}"></page3>
		<page4 :style="{'display':curPage == 'page4' ?'block':'none'}"></page4>
		<adTabbar>
			<adTabbarItem text="首页" dataCur="page1" class="maxWidth" @click="navClick" :textColor="curPage=='page1'? selectedColor:color"
			 :icon="'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/' + [curPage=='page1'?'首页-选中':'首页-未选择'] + '.png'"></adTabbarItem>
			<adTabbarItem text="酒店" dataCur="page2" class="maxWidth" @click="navClick" :textColor="curPage=='page2'? selectedColor:color"
			 :icon="'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/' + [curPage=='page2'?'酒店-选中':'酒店-未选中'] + '.png'"></adTabbarItem>
			<!--自定义中间View，可以注释掉就是正常4个Tab菜单-->
			<view class="maxWidth middleItem" @click="middleClick">
				<view class="buttonView">
					<image :src="'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/' + [curPage=='page5'?'攻略-选中':'攻略-未选中'] + '.png'" mode=""></image>
				</view>
				<text>攻略</text>
			</view>
			<adTabbarItem text="特产" dataCur="page3" class="maxWidth" @click="navClick" :textColor="curPage=='page3'? selectedColor:color"
			 :icon="'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/' + [curPage=='page3'?'商店-选中':'商店-未选中'] + '.png'"></adTabbarItem>
			<adTabbarItem text="我的" dataCur="page4" class="maxWidth" @click="navClick" :textColor="curPage=='page4'? selectedColor:color"
			 :icon="'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/' + [curPage=='page4'?'我的-未选中':'我的-未选中'] + '.png'"></adTabbarItem>
		</adTabbar>
	</view>
</template>

<script>
	import AppConfig from '@/common/appConfig.js';
	import adTabbar from '@/components/andy-ADTabbar/andy-ADTabbar.vue'
	import adTabbarItem from '@/components/andy-ADTabbar/andy-ADTabbarItem.vue'
	export default {
		components: {
			adTabbar,
			adTabbarItem
		},
		data() {
			return {
				curPage: 'page1',
				color: "#818181",
				selectedColor: "#333333",
				tabHeight: AppConfig.TabbarHeight
			};
		},
		methods: {
			// 导航栏切换
			navClick: function(e) {
				let title
				switch (e.currentTarget.dataset.cur) {
					case 'page1':
						title = '首页'
						break;
					case 'page2':
						title = '酒店'
						break;
					case 'page3':
						title = '特产'
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
						return
						break;
					case 'page4':
						title = '个人中心'
						break;
						debugger
						break;
				}
				uni.setNavigationBarTitle({
					title
				})
				this.curPage = e.currentTarget.dataset.cur
			},
			// 中间按钮点击
			middleClick: function(e) {
				console.log(1111, e)
				uni.navigateTo({
					url: '/pages/secondIndex/secondIndex',
					animationType: 'slide-in-bottom',
					animationDuration: 200
				});
			},
		},
		created() {
			uni.setNavigationBarTitle({
				title: '首页'
			})
		}
	}
</script>

<style>
	.maxWidth {
		width: 150rpx;
	}

	.middleItem {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 22rpx;
		color: #818181;
	}

	.buttonView {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50rpx;
		/* margin-top: -60rpx; */
		margin-top: -30rpx;
		background-color: #FFFFFF;
		/* margin-bottom: 34rpx; */
		margin-bottom: 0;

		line-height: 100rpx;
		text-align: center;
		font-size: 50rpx;
		overflow: hidden;
	}

	.buttonView image {
		width: 80rpx;
		height: 80rpx;
	}
</style>
