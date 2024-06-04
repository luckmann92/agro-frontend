<template>
	<div class="content-top">
		<div class="title">Мои документы</div>
	</div>

	<div class="content">
		<div class="list">

			<u-field-select
				:options="statusList"
				v-model:value="status"
				label="Статус"
				class=""
			/>
			<u-field-file
				v-for="file in files"
				:key="file.id"
				v-model:value="file.file"
				:label="file.label"
				:choiceFile="file.file"
				:max-files="1"
				@filesUpload="filesUpload($event, file.id)"
			/>
				<!-- :accept="accept" -->
				<!-- @deleteImage="deleteImage($event)" -->

			<u-button 
				href="/competition"
				:variant="'dark'" 
			>Сохранить</u-button>
				<!-- @click.prevent="registration" -->

		</div>
	</div>
</template>

<script>
import { computed, ref } from "vue"

export default {
	name: 'UserDocuments',
	props: {
		statusList: Array
	},
	setup() {
		const status = ref(12)
		const files = ref([
			{ 
				id: 1, 
				label: 'Информацию при наличии используемых земельных участков (кадастровая информация, вид угодий правоустанавливающие и&nbsp;право удостоверяющие документы);',
				file: { name: 'Document.doc', src: '' }
			},
			{ 
				id: 2, 
				label: 'Справка с уполномоченных государственных органов статистики, налоговой службы и&nbsp;социального фонда об отсутствии задолженностей и&nbsp;информацию о&nbsp;не&nbsp;прерывной деятельности за&nbsp;последние три&nbsp;года;',
				file: { name: 'Document.doc', src: '' }
			},
			{ 
				id: 3, 
				label: 'Информацию о материально-технической базе для&nbsp;производства и&nbsp;реализации сельскохозяйственной продукции;',
				file: { name: 'Document.doc', src: '' }
			},
			{ 
				id: 4, 
				label: 'Наличие соответствующего статуса семенного или&nbsp;племенного хозяйства, за&nbsp;исключением сельскохозяйственных кооперативов;',
				file: { name: 'Document.doc', src: '' }
			},
			{ 
				id: 5, 
				label: 'Информацию реализации одного из&nbsp;продуктов продовольственной безопасности;',
				file: { name: 'Document.doc', src: '' }
			},
			{ 
				id: 6, 
				label: 'Информацию о необходимом кадровом обеспечении',
				file: { name: 'Document.doc', src: '' }
			},
			{ 
				id: 7, 
				label: 'Для племенных хозяйств дополнительно: <br> - информацию о&nbsp;племенном учете; <br> - ветеринарную справку о&nbsp;благополучии хозяйства по&nbsp;инфекционным и&nbsp;острозаразным заболеваниям.',
				file: { name: 'Document.doc', src: '' }
			},
			{ 
				id: 8, 
				label: 'Для семеноводческих хозяйств дополнительно: <br> - информацию о&nbsp;фактической структуре посевных площадей с&nbsp;расчетом объема производства и&nbsp;реализации семян по&nbsp;каждой сельскохозяйственной культуре на&nbsp;ближайшие три&nbsp;года, предполагаемых источник',
				file: { name: 'Document.doc', src: '' }
			}
		])

		const filesUpload = (e, id) => {
			files.value.forEach((f) => {
				if (f.id === id) f.name === e.files[0].name
			})
		}

		return {
			status,
			files,
			filesUpload
		}	
	}
}
</script>

<style lang="scss" scoped>

</style>