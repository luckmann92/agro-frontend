<template>
	<div class="content-top">
		<div class="title">Добавление участка</div>
	</div>
	<div class="estate-new">
		<div>
			<!-- <u-field-select
				label="Область"
				:options="regionList"
				v-model="estateData.region"
			/> -->

			<u-field-radio
				label="Тип поля"
				:options="estateTypeList"
				v-model="estateData.type"
			/>

			<u-field
				:label="'Границы выставляемого участка'"
				:id="'auth-phone'"
				v-model="estateData.area"
			/>

			<u-field
				:label="'Координаты'"
				:id="'auth-phone'"
				v-model="estateData.coords"
			>
				<u-button>Найти по карте</u-button>
			</u-field>
			
			<u-field
				:label="'Кадастровый номер'"
				:id="'auth-phone'"
				v-model="estateData.area"
			/>
			<u-field
				:label="'Целевое использование земель'"
				:id="'auth-phone'"
				v-model="estateData.area"
			/>

			<template v-for="item in estateData.actualPlasementList" :key="item.year">
				<u-field
					:label="'Фактическое размещение культур'"
					:labelYear="item.year"
					:id="'auth-phone'"
					v-model="item.value"
					:placeholder="'1 000м2'"
				>
					<u-button>Добавить 2022</u-button>
				</u-field>
			</template>

			<u-button 
				class="estate-new__btn" 
				:variant="'dark'"
				@click="add"
			>Добавить</u-button>
		</div>
	</div>
</template>

<script>
import {ref, computed} from "vue"

export default {
components: {  },
	name: 'UserEstateNew',
	props: {
		regionList: Array,
		estateTypeList: Array
	},
	setup(props, { emit }) {
		const now = new Date()
		const currentYear = now.getFullYear()
		const estateData = ref({
			region: null,
			type: null,
			area: null,
			coords: '',
			cadastralNumber: '',
			use: '',
			actualPlasementList: [
				{ year: currentYear, value: ''}
			]
		})

		const add = () => {
			emit('addEstate', estateData.value)
		}

		return {
			estateData,
			add
		}
	}
}
</script>

<style lang="scss" scoped>
.estate-new {
	width: 592px;
	margin: 0 auto;

	&__btn {
		width: 100%;
	}
}
</style>