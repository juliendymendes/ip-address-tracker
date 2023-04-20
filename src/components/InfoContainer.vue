<template>
	<div class="info-container">
		<div>
			<span class="grey-text legend">IP ADDRESS</span>
			<span class="info-text">{{ ipStore.info.ip }}</span>
		</div>
		<div>
			<span class="grey-text legend">LOCATION</span>
			<span class="info-text">{{ipStore.info.location.city}}, {{ ipStore.info.location.region }} {{ ipStore.info.location.postalCode }}</span>
		</div>
		<div>
			<span class="grey-text legend">TIMEZONE</span>
			<span class="info-text">UTC{{ ipStore.info.location.timezone}}</span>
		</div>
		<div>
			<span class="grey-text legend">ISP</span>
			<span class="info-text">{{ipStore.info.isp}}</span>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from 'vue';
import {useIpAddressStore} from '../stores/ip-address'

const ipStore = useIpAddressStore()

onMounted(async () => {
	await ipStore.getInfoByIp('')
})

</script>

<style scoped lang="scss">

.info-container{
	background-color: #fff;
	border-radius: 10px;
	position: absolute;
	top: 18%;
	left: 15%;
	height: 200px;
	width: 250px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	z-index: 5;

	div{
		display: flex;
		flex-direction: column;
		align-items: center;

		.legend{
			font-size: .7rem;
			text-transform: uppercase;
			letter-spacing: 2px;
			font-weight: 700;
		}

		.info-text{
			font-size: 1.2rem;
		}
	}
}

@media screen and (max-width: 374px) {
	.info-container{		
		top: 25%;
		left: 4%;
	}
}

@media screen and (min-width: 375px) and (max-width: 425px) {
	.info-container{		
		top: 25%;
		left: 11%;
	}
}

@media screen and (min-width: 425px){
	.info-container{		
		top: 25%;
	}
}


@media screen and (min-width: 767px){
	.info-container{		
		top: 27%;
		left: 10%;
		flex-direction: row;
		width: 600px;
		height: fit-content;
		align-items: flex-start;
		justify-content: center;
		gap: .8rem;

		div{
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding: .7rem;
			
			.legend, .info-text{
				border-left: none;
			}
			
			.info-text{
				font-size: 1rem;
				
			}
			
		}
		
	}

	:not(div:first-child){
		border-left: 1px solid hsl(0, 0%, 86%);
	}

}

@media screen and (min-width: 1023px) {
	.info-container{		
		top: 30%;
		left: 15%;
		width: 700px;
	}
}
@media screen and (min-width: 1440px) {
	.info-container{		
		top: 30%;
		left: 25%;
		width: 700px;
		height: 70px;
	}

}


@media screen and (min-width: 2000px) {
	.info-container{		
		top: 17%;
		left: 35%;
		width: 800px;
		height: 90px;
		
		div{
		

			.legend{
				font-size: 1rem;
				
			}

			.info-text{
				font-size: 1.4rem;
			}
		}
	}
}

</style>