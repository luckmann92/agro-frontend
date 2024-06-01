<template>
	<div v-if="list.length">
		<div class="content-top">
			<div class="title">Участки</div>
			<u-button :href="'/estate/new'" :variant="'dark'" :icon="'add'">Добавить участок</u-button>
		</div>
		<div class="list">
			<UserEstateitem 
				v-for="item in list" 
				:key="item.ID" 
			/>
		</div>
	</div>
	<div v-else class="empty">
		<div class="estates-logo">
			<img src="./../../assets/img/estate.svg" alt="">
		</div>
		<div class="txt txt--gray">У вас нет участков</div>
		<u-button :href="'/estate/new'" :variant="'dark'" :icon="'add'">Добавить участок</u-button>
	</div>
</template>

<script>
import UserEstateitem from '@/components/Estates/UserEstateItem.vue'

export default {
	name: 'UserEstateList',
	components: { UserEstateitem },
	props: {
		list: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style lang="scss" scoped>

</style>