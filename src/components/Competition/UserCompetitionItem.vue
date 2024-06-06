<template>
	<!-- <div class="competition-item"> -->
    <u-card>
      <template v-if="userType === 'R'">
        <div v-if="itemData?.STATUS === 'FINISHED'" class="top">
          <div class="txt-block">
            <p class="txt txt-gray">{{ candidatesTitle }}</p>
            <p v-if="itemData?.WINNER" class="txt"><b>Победитель: </b>{{ itemData?.WINNER }}</p>
          </div>
          <div class="btn-wrap">
            <u-button v-if="itemData?.WINNER" :href="`/competition/${itemData?.ID}`">Подробнее</u-button>
            <u-button v-else :href="`/competition/rating/${itemData?.ID}`">Проставить оценки</u-button>
          </div>
        </div>

        <div v-else class="top">
          <div class="txt-block">
            <p class="txt txt-gray">{{ candidatesTitle }}</p>
          </div>
          <div class="btn-wrap">
            <u-button :href="`/competition/${itemData?.ID}`">Подробнее</u-button>
            <u-button v-if="userType === 'R'">Редактировать</u-button>
            <u-button v-if="userType === 'R'">Удалить</u-button>
          </div>
        </div>
      </template>

      <div class="top">
        <div class="three-col-block txt-gray">
          <div class="txt-block">
            <p class="txt-sml">Дата начала аренды</p>
            <p>{{itemData?.DATE_FROM}}</p>
          </div>
          <div class="txt-block">
            <p class="txt-sml">Дата объявления</p>
            <p>{{itemData?.DATE_ANNONCE}}</p>
          </div>
          <div class="txt-block">
            <p class="txt-sml">Дата проведения</p>
            <p>{{itemData?.DATE_EVENT}}</p>
          </div>
        </div>
        <div v-if="userType === 'K' && itemData?.STATUS === 'NEW'" class="btn-wrap">
          <u-button :href="`/application-new`" :disabled="true">Подать заявку</u-button>
        </div>
      </div>

      <div class="divider"></div>

      <div class="bottom">
        <div class="txt-block">
          <p class="txt-sml txt-gray">Область: {{itemData?.LAND.REGION}}</p>
          <p class="txt-mdl">{{itemData?.LAND.TYPE}}</p>
        </div>
        <div v-if="userType === 'K'" class="btn-wrap">
          <a class="btn" href="https://www.google.com/maps" target="_blank">Показать на карте</a>
          <u-button :href="`/competition/${itemData?.ID}`">Подробнее</u-button>
        </div>
        <div v-if="userType === 'R'" class="btn-wrap">
          <u-button :href="`/estate/${itemData?.LAND?.ID}`">Перейти к земле</u-button>
        </div>
      </div>

    </u-card>
	<!-- </div> -->
</template>

<script>
import { computed, ref } from "vue"
import { useProfile } from "@/store/profile"
import { declOfNum } from '@/utils'

export default {
  name: 'UserCompetitionItem',
  components: {},
  props: {
		itemData: {
			type: Object,
      required: true,
			default: () => ({
				// ID: 323,
				// DATE_FROM: '24.08.24',
				// DATE_ANNONCE: '24.10.24',
				// DATE_EVENT: '24.11.24',
				// PLACE: 'Чуйская',
				// NAME: 'Орашаемый'
			})
		},
    docList: {
      type: Array,
      default: () => []
    }
	},
  setup(props) {
    const profileStore = useProfile()
    const userType = ref(profileStore.userType)

    const candidatesTitle = computed(() => {
      return `${props.itemData.CANDIDATES_COUNTER} ${declOfNum(props.itemData.CANDIDATES_COUNTER, ['кандидат', 'кандидата', 'кандидатов'])}`
    })

    return {
      userType,
      candidatesTitle,
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/styles.scss"/>
<style scoped lang="scss">

</style>
