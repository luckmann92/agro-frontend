<template>
  <div class="container">
    <div class="content-top">
      <u-button @click="$router.back()">Вернуться</u-button>
      <!-- <u-button v-if="isEdit" @click="$router.back()" variant="dark">Завершить</u-button> -->
    </div>
    <div class="content">
      <UserCompetitionDetail :detail="CompetitionDetail" :applay="true" :docList="docList"  />
    </div>
  </div>
</template>

<script>
import UserCompetitionDetail from '@/components/Competition/UserCompetitionDetail'
import {ref} from "vue"
import { useRoute } from 'vue-router'

export default {
  name: 'UserCompetitionApplayPage',
  components: {
    UserCompetitionDetail
  },
  setup() {
    const route = useRoute()
    const isEdit = route.meta.edit
    const CompetitionDetail = ref({
      ID: 323,
      DATE_FROM: '24.08.24',
      DATE_ANNONCE: '24.10.24',
      DATE_EVENT: '24.11.24',
      PLACE: 'Чуйская',
      NAME: 'Орашаемый',
      LAND: {
        AREA: 1000,
        COORDS: ['10 S 055974', '10 S 055974'],
        CADASTRAL_NUMBER: '47:14:1203001:814',
        REGION: 'Чуйская',
        TYPE: 'Орашаемое',
        AREA: '1 000м2',
        COORDS: '10 S 055974, 4282182',
        USE: '',
        ACTUAL_PLACEMENT_LIST: [
          { YEAR: 2023, VALUE: 'Свекла' },
          { YEAR: 2022, VALUE: 'Свекла' },
          { YEAR: 2021, VALUE: 'Люцерна' },
          { YEAR: 2020, VALUE: 'Люцерна' },
        ]
      }
    })
    
		const docList = ref([
			{ 
				id: 11, 
				label: 'Инвестиционный проект по реализации сельскохозяйственной деятельности с графиком вложений и направленности на 3 и более продуктов продовольственной безопасности;',
				file: { name: '', src: '' }
			},
			{ 
				id: 12, 
				label: 'План севооборота на предоставляемые земли;',
				file: { name: '', src: '' }
			},
			{ 
				id: 13, 
				label: 'Информацию об использовании на предоставляемых землях новых технологий реализации сельскохозяйственной деятельности (капельное орошение, механизация ведения сельскохозяйственной деятельности и т.д.);',
				file: { name: '', src: '' }
			}
		])

    return {
      isEdit,
      CompetitionDetail,
      docList
    }
  }
}
</script>

<style lang="scss" scoped>

</style>