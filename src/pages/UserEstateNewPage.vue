<template>
	<div class="container">
		<UserEstateNew 
			:regionList="regionList"
			:estateTypeList="estateTypeList"
			@addEstate="addEstate"
		/>
	</div>
</template>

<script>
import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import UserEstateNew from '@/components/Estates/UserEstateNew.vue'

export default {
	name: 'UserEstateNewPage',
	components: { UserEstateNew },
	setup() {
    const router = useRouter()
		const newEstate = ref({
			// REGION: null,
			// TYPE: null,
			// AREA: null,
			// COORDS: '',
			// CADASTRAL_NUMBER: '',
			// USE: '',
			// ACTUAL_PLACEMENT_LIST: [
			// 	{ YEAR: currentYear, VALUE: ''}
			// ]
		})

		const regionList = ref([
			{ key: 23, value: 'Чуйская' },
			{ key: 24, value: 'Не Чуйская' }
		])
		const estateTypeList = ref([
			{ key: 45, value: 'Орашаемое' },
			{ key: 46, value: 'Богарное' }
		])

		const addEstate = (estateData) => {
			// router.push
			console.log("estateData", estateData)
			newEstate.value = estateData
		}

		return {
			newEstate,
			regionList,
			estateTypeList,
			addEstate
		}
	}
}
</script>

<style lang="scss" scoped>

</style>