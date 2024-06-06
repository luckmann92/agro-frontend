<template>
	<div class="container">
		<UserDocuments 
			:statusList="statusList"
		/>
	</div>
</template>

<script>
import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import UserDocuments from '@/components/Documents/UserDocuments.vue'

export default {
	name: 'UserDocumentsPage',
	components: { UserDocuments },
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

		// const regionList = ref([
		// 	{ key: 23, value: 'Чуйская' },
		// 	{ key: 24, value: 'Не Чуйская' }
		// ])
		const statusList = ref([
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
			statusList,
			addEstate
		}
	}
}
</script>

<style lang="scss" scoped>

</style>