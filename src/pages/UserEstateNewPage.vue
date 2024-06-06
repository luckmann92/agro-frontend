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
			{ key: 18, value: 'Баткенская' },
			{ key: 19, value: 'Джалал-Абадская' },
			{ key: 20, value: 'Иссык-Кульская' },
			{ key: 21, value: 'Ошская' },
			{ key: 22, value: 'Таласская' },
			{ key: 23, value: 'Чуйская' }
		])
		const estateTypeList = ref([
			{ key: 43, value: 'Семенноводческое хозяйство' },
			{ key: 44, value: 'Племенное хозяйство' },
			{ key: 45, value: 'Сельскохозяйственный кооператив' },
			{ key: 46, value: 'Экономически приоритетный субъект сельского хозяйства' }
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