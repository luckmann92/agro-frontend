<template>
  <div class="container container--full">
    <div class="fb fb--jc-sb">
      <u-button @click="$router.back()">Вернуться</u-button>
    </div>
    <div class="content">
      <UserCompetitionNew 
        @addCompetition="addCompetition"
      />
    </div>
  </div>
</template>

<script>
import UserCompetitionNew from '@/components/Competition/UserCompetitionNew'
import {ref} from "vue";

export default {
  name: 'UserCompetitionNewPage',
  components: {
    UserCompetitionNew
  },
  setup() {
    const newCompetition = ref({
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

    const addCompetition = (newData) => {
			// router.push
			console.log("newData", newData)
			newCompetition.value = newData
		}
    return {
      addCompetition
    }
  }
}
</script>

<style lang="scss" scoped>

</style>