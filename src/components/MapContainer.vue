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
	let icon = L.icon({
		iconUrl: 'location.svg',

		iconSize:     [38, 95],
		shadowSize:   [50, 64], 
		iconAnchor:   [22, 94], 
		shadowAnchor: [4, 62],  
		popupAnchor:  [-3, -76] 
	});
	map = L.map('map').setView([ipStore.info.location.lat, ipStore.info.location.lng], 4)
	L.marker([ipStore.info.location.lat, ipStore.info.location.lng], {icon: icon}).addTo(map);
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