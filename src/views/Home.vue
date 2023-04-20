<template>
	<Header @new-location="(input) => handleNewLocation(input)"/>
	<main>
		<InfoContainer/>

		<MapContainer v-if="isMapVisible"/>
	</main>
</template>

<script setup>
import Header from '../components/Header.vue';
import InfoContainer from '../components/InfoContainer.vue';
import MapContainer from '../components/MapContainer.vue'
import { onMounted, ref } from 'vue'
import { useIpAddressStore } from '../stores/ip-address';
const ipStore = useIpAddressStore()
const isMapVisible = ref(false)

const handleNewLocation = async (value) => {
	const ipRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.)){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	isMapVisible.value = false
	if(ipRegex.test(value)){
		await ipStore.getInfoByIp(value)
		console.log('ip');
	}else{
		await ipStore.getInfoByDomain(value)
	}
	isMapVisible.value = true
}
onMounted(async () => {
	await ipStore.getInfoByIp('')
	isMapVisible.value = true
})
</script>

<style scoped lang="scss">

</style>