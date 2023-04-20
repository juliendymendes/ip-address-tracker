import { defineStore } from 'pinia'
import { axiosInstance } from '../utils/api/axios'

export const useIpAddressStore = defineStore('ip-address', {
	state: () => ({
		info:{
			ip: '',
			location: {
				region: '',
				city: '',
				lat: 0.0,
				lng: 0.0,
				postalCode: '',
				timezone: ''
			},
			isp: ''
		}
	}),
	actions: {
		async getInfoByIp(ipAddress){
			try{
				const res = await axiosInstance.get(`/country,city?apiKey=${import.meta.env.VITE_IP_GEO_API_KEY}&ipAddress=${ipAddress}`)
				if(res.status === 200){
					this.$state.info = {...res.data}
				}

			}catch(error){
				console.error(error);
			}
		},
		async getInfoByDomain(domain){
			try{
				const res = await axiosInstance.get(`/country,city?apiKey=${import.meta.env.VITE_IP_GEO_API_KEY}&domain=${domain}`)
				if(res.status === 200){
					this.$state.info = {...res.data}
				}

			}catch(error){
				console.error(error);
			}
		},
	},
	getters: {},
})