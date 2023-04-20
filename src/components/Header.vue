<template>
	<header>
		<h1 class="">IP Address Tracker</h1>
		<div class="search-container">
			<input type="text" placeholder="Search for any IP Address or domain" v-model="input">
			<button type="button" @click="$emit('new-location', input)">
				<img src="/icon-arrow.svg" alt="">
			</button>
		</div>
	</header>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')

</script>

<style scoped lang="scss">
header {
	background-image: url('/pattern-bg-desktop.png');
	background-repeat: no-repeat;
	background-size: cover;
	height: 300px;
	max-height: 380px;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		color: #fff;
		font-size: 1.5rem;
		margin-top: 1.8rem;
		margin-bottom: 1.5rem;
		font-weight: 500;
	}

	.search-container {
		display: flex;
		width: 350px;

		input {
			padding: .8rem;
			width: 80%;
			border-top-left-radius: 10px;
			border-bottom-left-radius: 10px;
			border: none;
			outline: none;
			font-family: 'Rubik', sans-serif;
			font-weight: 500;
		}

		button {
			background-color: hsl(0, 0%, 17%);
			border: none;
			border-top-right-radius: 10px;
			border-bottom-right-radius: 10px;
			padding: 1rem 1.3rem;
		}

	}

}

@media screen and (max-width: 376px) {
	header {
		.search-container {
			width: 300px;
		}
	}
}

@media screen and (min-width: 767px) {
	header {
		height: 250px;

		h1 {
			font-size: 1.8rem;
		}

		.search-container {
			width: 500px;
		}

	}
}

@media screen and (min-width: 2000px) {
	header{
		h1 {
			font-size: 2.1rem;
		}
	
		.search-container {
			input{
				font-size: 1.3rem;
			}
		}

	}

}


</style>