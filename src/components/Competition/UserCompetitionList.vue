<template>

  <div v-if="list.length" class="container">
		<div class="content-top">
			<div class="title">Конкурсы</div>
			<u-button v-if="userType === 'РУАР'" :href="'/competition/new'" :variant="'dark'" :icon="'add'">Добавить конкурс</u-button>
		</div>
		<div class="list">
			<UserCompetitionItem 
        v-for="item in list" 
        :key="item.ID" 
        :itemData="item" 
      />
		</div>
	</div>

  <div v-else class="competition-empty empty">
		<div class="competition-logo">
			<img src="./../../assets/img/competition.svg" alt="">
		</div>
		<div class="txt txt--gray">У вас нет участков</div>
		<u-button v-if="userType === 'РУАР'" :href="'/competition/new'" :variant="'dark'" :icon="'add'">Добавить конкурс</u-button>
	</div>

</template>

<script>
import { ref } from "vue"
import { useProfile } from "@/store/profile"
import UserCompetitionItem from './UserCompetitionItem.vue'

export default {
  name: 'UserCompetitionList',
	components: {
		UserCompetitionItem
	},
  props: {
		list: {
			type: Array,
			default: () => []
		}
	},
  setup() {
    const profileStore = useProfile()
    const userType = ref(profileStore.userType)

    return {
      userType
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/styles.scss"/>
<style lang="scss" scoped>
</style>
