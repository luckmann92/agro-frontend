<template>
	<u-card>
		<template #default>
			<div class="top">
				<div class="fb fb--ai-c fb--g20">
					<input v-if="checkField" type="checkbox" :checked="checkedField" @change="changeField">
					<div class="txt-block">
						<p class="txt-sml  txt-gray">Область: {{ 'Чуйская' }}</p>
						<p class="txt-mdl">{{ 'Орашаемый' }}</p>
					</div>
				</div>
				<div class="btn-wrap">
					<u-button >Показать на карте</u-button>
					<!-- <u-button >Редактировать</u-button> -->
					<!-- <u-button >Удалить</u-button> -->
				</div>
			</div>

			<div class="three-col-block">
				<div class="txt-block">
					<p class="txt-sml txt-gray">Границы выставляемого участка</p>
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
				<p class="txt-sml">Фактическое размещение культур</p>
				<p>{{ '2023   Свекла' }}</p>
				<p>{{ '2022   Свекла' }}</p>
				<p>{{ '2021   Люцерна' }}</p>
				<p>{{ '2020   Люцерна' }}</p>
			</div>
			<div class="txt-block">
				<p class="txt-sml">Целевое использование земель</p>
				<p>{{ 'Для засева культуры свеклы' }}</p>
			</div>
		</template>
	</u-card>
</template>

<script>
	export default {
		name: 'UserEstateitem',
		props: {
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

			const changeField = (e) => {
				emit('selectEstate', e.target.checked)
			}

			return {
				changeField
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>