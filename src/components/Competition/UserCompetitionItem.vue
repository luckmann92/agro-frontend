<template>
	<div class="competition-item">
    <u-card>
      <div class="top">
        <div class="txt-block">
          <p class="txt txt-gray">{{ candidatesTitle }}</p>
          <p class="txt"><b>Победитель: </b>{{ itemData?.WINNER }}</p>
        </div>
        <u-button :href="`/competition/${itemData?.ID}`">Подробнее</u-button>
      </div>
      <div class="">
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
      </div>
      <div class="divider"></div>
      <div class="bottom">
        <div class="txt-block">
          <p class="txt-sml txt-gray">Область: {{itemData?.PLACE}}</p>
          <p class="txt-mdl">{{itemData?.NAME}}</p>
        </div>
      </div>
    </u-card>
	</div>
</template>

<script>
import { computed } from "vue"
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
		}
	},
  setup(props) {
    const candidatesTitle = computed(() => {
      return `${props.itemData.CANDIDATES_COUNTER} ${declOfNum(props.itemData.CANDIDATES_COUNTER, ['кандидат', 'кандидата', 'кандидатов'])}`
    })

    return {
      candidatesTitle,
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/styles.scss"/>
<style scoped lang="scss">

</style>
