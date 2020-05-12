<template>
	<view class="profileHeader">
		<view class="avatar">
			<image src="/static/images/profile/avatar.png"></image>
		</view>
		<view class="login-info">
			<view class="login">登陆/注册</view>
			<view class="phone">
				<image src="/static/images/profile/phone.png"></image>
				暂无绑定手机号
			</view>
		</view>
		<view class="arrow">
			<image src="/static/images/common/arrow-right.png"></image>
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
.profileHeader {
  background-color: #ff5777;
  display: flex;
  height: 170rpx;
  padding: 12rpx 30rpx;
  color: #fff;
}
/* 头像 */
.avatar {
  vertical-align: middle;
}
.avatar image {
  /* width: 100%; */
  width: 140rpx;
  height: 140rpx;
  border-radius: 50%;
  background-color: #f2f2f2;
}
/* 登陆/注册 */
.login-info {
  vertical-align: middle;
  margin-left: 30rpx;
}
.login {
  font-size: 36rpx;
  margin-top: 18rpx;
}
.phone {
  font-size: 28rpx;
  margin-top: 10rpx;
}
.phone image {
  width: 30rpx;
  height: 30rpx;
  vertical-align: middle;
  position: relative;
  bottom: 4rpx;
}
/* 箭头 */
.arrow {
  position: absolute;
  right: 30rpx;
  margin-top: 30rpx;
}
.arrow image {
  width: 60rpx;
  height: 60rpx;
}
</style>
