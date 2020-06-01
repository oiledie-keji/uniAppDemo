<template>
	<view>
		<view class="Express">
			<view class="info">
				<view :class="{hide:!iSinfo}">
					vue Uniapp实现多行文本溢出超过指定行数vueUniap实现多行文本溢出超过指定行数vue Uniapp实现多行文本溢出超过指定行数 展开 收起vue Uniapp实现多行文本溢出超过指定行数 展开 收起vue
					Uniapp实现多行文本溢出超过指定行数 展开 收起vue Uniapp实现多行文本溢出超过指定行数 展开 收起vue Uniapp实现多行文本溢出超过指定行数 展开 收起vue Uniapp实现多行文本溢出超过指定行数 展开
					收起vue Uniapp实现多行文本溢出超过指定行数 展开 收起vue Uniapp实现多行文本溢出超过指定行数 展开 收起
				</view>
				<text @tap="showinfo" v-if="!iSinfo">展开</text>
			</view>
			<text @tap="showinfo" v-if="iSinfo" class="hidebtn">收起</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iSinfo: false
			}
		},
		methods: {
			showinfo() {
				this.iSinfo = !this.iSinfo
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}

	.Express {
		display: flex;
		// width: 100%;
		flex-direction: column;
		background-color: #fff;
		padding: 30upx;
		position: relative;

		.info {
			display: flex;
			flex-direction: column;

			view {
				text-align: justify;
				font-size: 14px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(102, 102, 102, 1);
				word-break: break-word; //换行模式
				background-color: #fff;
			}

			text {
				width: 70px;
				font-size: 14px;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%);
				color: #0078FF;
				position: absolute;
				bottom: 30upx;
				right: 30upx;
			}
		}

	}

	.hidebtn {
		display: flex;
		flex: 1;
		justify-content: flex-end;
		color: #0078FF;
		font-size: 14px;
	}

	.hide {
		word-break: break-word; //换行模式
		overflow: hidden;
		text-overflow: ellipsis; //修剪文字
		display: -webkit-box;
		-webkit-line-clamp: 2; //此处为上限行数
		-webkit-box-orient: vertical;
	}
</style>
