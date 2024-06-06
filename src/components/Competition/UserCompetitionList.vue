<template>

  <div v-if="list.length" class="container">
		<div class="content-top">
			<div class="title">Конкурсы</div>
			<u-button 
				v-if="userType === 'R'" 
				:href="'/competition/new'" 
				:variant="'dark'" 
				:icon="'add'"
			>Добавить конкурс</u-button>

			<div v-if="userType === 'R'" class="content-tabs-wrap">
				<div class="content-tabs">
					<div :class="['content-tab', {'active': listType === 0}]" @click="() => listType = 0">Объявленные</div>
					<div :class="['content-tab', {'active': listType === 1}]" @click="() => listType = 1">Завершенные</div>
				</div>
			</div>

			<div v-if="userType === 'K'" class="content-tabs-wrap right">
				<div class="content-tabs">
					<div :class="['content-tab', {'active': listTypeK === 0}]" @click="() => listTypeK = 0">Объявленные</div>
					<div :class="['content-tab', {'active': listTypeK === 1}]" @click="() => listTypeK = 1">Учавствую</div>
					<div :class="['content-tab', {'active': listTypeK === 2}]" @click="() => listTypeK = 2">Завершенные</div>
				</div>
			</div>
		</div>
		<div class="list">
			<UserCompetitionItem 
        v-for="item in currentList" 
        :key="item.ID" 
        :itemData="item"
				:docList="userType === 'K' ? docList : []"
      />
		</div>
	</div>

  <div v-else class="competition-empty empty">
		<div class="competition-logo">
			<img src="./../../assets/img/competition.svg" alt="">
		</div>
		<div class="txt txt--gray">У вас нет участков</div>
		<u-button v-if="userType === 'R'" :href="'/competition/new'" :variant="'dark'" :icon="'add'">Добавить конкурс</u-button>
	</div>

</template>

<script>
import { computed, ref } from "vue"
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
  setup(props) {
    const profileStore = useProfile()
    const userType = ref(profileStore.userType)
		const listType = ref(0)
		const listTypeK = ref(0)
		const docList = ref([
			{ 
				id: 11, 
				label: 'Инвестиционный проект по реализации сельскохозяйственной деятельности с графиком вложений и направленности на 3 и более продуктов продовольственной безопасности;',
				file: { name: 'Document.pdf', src: '/docs/Document.pdf' }
			},
			{ 
				id: 12, 
				label: 'План севооборота на предоставляемые земли;',
				file: { name: 'Document.pdf', src: '/docs/Document.pdf' }
			},
			{ 
				id: 13, 
				label: 'Информацию об использовании на предоставляемых землях новых технологий реализации сельскохозяйственной деятельности (капельное орошение, механизация ведения сельскохозяйственной деятельности и т.д.);',
				file: { name: 'Document.pdf', src: '/docs/Document.pdf' }
			}
		])

		const currentList = computed(() => {
			if (userType.value === 'R') {
				return props.list.filter((el) => {
					if (listType.value === 0) {
						return el.STATUS === 'NEW'
					} else {
						return el.STATUS === 'FINISHED'
					}
				})
			} else if (userType.value === 'K') {
				return props.list.filter((el) => {
					// console.log('listType', listTypeK.value);
					if (listTypeK.value === 0) {
						return el.STATUS === 'NEW'
					} else if (listTypeK.value === 2) {
						return el.STATUS === 'FINISHED'
					} else {
						return el.STATUS === 'PARTICIPATE'
					}
				})
			} else {
				return props.list
			}
		})

    return {
      userType,
			listType,
			listTypeK,
			currentList,
			docList
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/styles.scss"/>
<style lang="scss" scoped>
</style>
