<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 750rpx; height: 1204rpx" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					// iconPath: '../../../static/location.png'
				}]
			}
		},
		methods: {

		},
		onLoad() {
			uni.getLocation({
			    type: 'wgs84',
			    success: res => {
					this.latitude = res.latitude
					this.longitude = res.longitude
					this.covers[0].latitude = res.latitude
					this.covers[0].longitude = res.longitude
			        console.log('当前位置的经度：' + res.longitude);
			        console.log('当前位置的纬度：' + res.latitude);
			    }
			});
		}
	}
</script>

<style>

</style>
