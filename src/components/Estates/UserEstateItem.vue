<template>
	<u-card>
		<template #default>
			<div class="top">
				<div class="fb fb--ai-c fb--g20">
					<input v-if="checkField" type="checkbox" :checked="checkedField" @change="changeField($event, itemData?.ID)">
					<div class="txt-block">
						<p class="txt-sml  txt-gray">Область: {{ itemData?.REGION }}</p>
						<p class="txt-mdl">{{ itemData?.TYPE }}</p>
					</div>
				</div>
				<div v-if="userType === 'R'" class="btn-wrap">
					<a class="btn" href="https://www.google.com/maps" target="_blank">Показать на карте</a>
					<u-button :disabled="true">Редактировать</u-button>
					<u-button :disabled="true">Удалить</u-button>
				</div>
			</div>

			<div class="three-col-block">
				<div class="txt-block">
					<p class="txt-sml txt-gray">Площадь выставляемого участка</p>
					<p>{{ '1 000' }}м&sup2;</p>
				</div>
				<div class="txt-block">
					<p class="txt-sml txt-gray">Координаты</p>
					<p>{{ '10 S 055974, 4282182' }}</p>
				</div>
				<div class="txt-block">
					<p class="txt-sml txt-gray">Кадастровый номер</p>
					<p>{{ '47:14:1203001:814' }}</p>
				</div>
			</div>
		</template>

		<template #detail>
			<div class="txt-block">
				<p class="txt-sml txt-gray">Фактическое размещение культур</p>
				<p>{{ '2023   Свекла' }}</p>
				<p>{{ '2022   Свекла' }}</p>
				<p>{{ '2021   Люцерна' }}</p>
				<p>{{ '2020   Люцерна' }}</p>
			</div>
			<div class="txt-block">
				<p class="txt-sml txt-gray">Целевое использование земель</p>
				<p>{{ 'Для засева культуры свеклы' }}</p>
			</div>
		</template>
	</u-card>
</template>

<script>
import { computed, ref } from "vue"
import { useProfile } from "@/store/profile"
export default {
	name: 'UserEstateitem',
	props: {
		itemData: {
			type: Object,
			default: () => {}
		},
		checkField: {
			type: Boolean,
			default: false
		},
		checkedField: {
			type: Boolean,
			default: false
		}
	},
	setup(props, { emit }) {
    const profileStore = useProfile()
    const userType = ref(profileStore.userType)

		console.log('props', props);

		const changeField = (e, id) => {
			emit('selectEstate', id, e.target.checked)
		}

		return {
			changeField,
			userType
		}
	}
}
</script>

<style lang="scss" scoped>

</style>