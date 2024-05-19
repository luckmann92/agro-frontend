<template>
  <div class="competition-detail">

    <div class="competition-detail__info">
      <div class="block-title mb-16">{{ candidatesTitle }}</div>
      <div class="three-col-block mb-20 txt-gray">
        <div class="txt-block">
          <p class="txt-sml">Дата начала аренды</p>
          <p>{{ '24.08.24' }}</p>
        </div>
        <div class="txt-block">
          <p class="txt-sml">Дата объявления</p>
          <p>{{ '24.10.24' }}</p>
        </div>
        <div class="txt-block">
          <p class="txt-sml">Дата проведения</p>
          <p>{{ '24.11.24' }}</p>
        </div>
      </div>

      <u-card>
        <template v-slot:default>
          <div class="top">
            <div class="txt-block">
              <p class="txt-sml  txt-gray">Область: {{ 'Чуйская' }}</p>
              <p class="txt-mdl">{{ 'Орашаемый' }}</p>
            </div>
            <div class="btn-wrap">
              <u-button >Показать на карте</u-button>
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

        <template v-slot:detail>
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
    </div>

    <div class="competition-detail__winner">
      <div class="block-title">Победитель</div>
      <u-card>
        <div class="fb fb--jc-sb fb--ai-c">
          <div class="txt-mdl">{{ detail?.WINNER?.USER_FULL_NAME }}</div>
          <div class="txt txt-gray">{{ detail?.WINNER?.USER_POSITION }}</div>
        </div>

        <template v-slot:list>
          <div v-for="item in detail?.WINNER?.ITEMS" :key="item?.ID" class="rating-row">
            <div class="rating-row__text" v-html="item?.TEXT" />
            <u-rating :value="item?.RATING" :isEdit="false" />
          </div>
        </template>

        <template v-slot:docs>
          <u-doc-list :docs="detail?.WINNER?.DOCS" :showNum="0" />
        </template>

      </u-card>
    </div>

    <div class="competition-detail__others">
      <div class="block-title">Остальные кандидаты: {{ detail?.OTHER?.length }}</div>
      <u-card v-for="candidat in detail?.OTHER" :key="candidat?.ID">
        <div class="fb fb--jc-sb fb--ai-c">
          <div class="txt-mdl">{{ candidat?.USER_FULL_NAME }}</div>
          <div class="txt txt-gray">{{ candidat?.USER_POSITION }}</div>
        </div>

        <template v-slot:list>
          <div v-for="item in candidat?.ITEMS" :key="item?.ID" class="rating-row">
            <div class="rating-row__text" v-html="item?.TEXT" />
            <u-rating :value="item?.RATING" :isEdit="false" />
          </div>
        </template>

        <template v-slot:docs>
          <u-doc-list :docs="candidat?.DOCS" :showNum="0" />
        </template>
      </u-card>
    </div>

  </div>
</template>

<script>
import {computed} from "vue";
import { declOfNum } from '@/utils'
// import URatingRow from '@/common/URatingRow.vue'

export default {
  name: "UserCompetitionDetail",
  components: {  },
  props: {
    detail: Object
  },
  setup(props) {
    const candidatesTitle = computed(() => {
      let number = props.detail?.WINNER && props.detail?.OTHER?.length ? props.detail.OTHER.length + 1 : 0
      return number ? `${number} ${declOfNum(number, ['кандидат', 'кандидата', 'кандидатов'])}` : 'Нет кандидатов'
    })

    console.log('detail', props.detail.ITEMS);

    return {
      candidatesTitle,
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/styles.scss"/>
<style lang="scss" scoped>
.competition-detail {

  //&__titles {
  //  display: flex;
  //  margin-bottom: 20px;
  //
  //  &>div {
  //    width: 30%;
  //  }
  //}
}
</style>