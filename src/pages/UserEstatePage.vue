<template>
	<div class="container">
		<UserEstateList :list="estateList" />
	</div>
</template>

<script>
import { computed, ref } from "vue"
import UserEstateList from '@/components/Estates/UserEstateList.vue'
import { useEstate } from "@/store/estate"

export default {
	name: 'UserEstatePage',
	components: { UserEstateList },
	data: () => {
		return {
			// estateList: []
		}
	},
	setup() {
		const estateStore = useEstate()
		const estateList = ref(estateStore.list)

		return {
			estateList
		}
	}
}
</script>

<style lang="scss" scoped>

</style>