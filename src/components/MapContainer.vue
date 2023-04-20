<template>
	<div id="map"></div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { onMounted } from 'vue';
import { useIpAddressStore } from '../stores/ip-address';

const ipStore = useIpAddressStore()

let map = null

const buildMap = () => {
	map = L.map('map').setView([ipStore.info.location.lat, ipStore.info.location.lng], 4)
	L.marker([ipStore.info.location.lat, ipStore.info.location.lng]).addTo(map);
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
}


onMounted(() => {
	buildMap()
}) 
</script>

<style scoped lang="scss">
#map { 
	height: 545px; 
	z-index: 1;
}
</style>