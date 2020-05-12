<template>
	<view>
		<text>{{name}} 详情页</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: "",
			}
		},
		methods: {
			
		},
		onLoad(options) {
			console.log(111, options)
			this.name = options.name;
		}
	}
</script>

<style>

</style>
