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

      <UserEstateitem :itemData="detail?.LAND" />
    </div>

    <div v-if="applay" class="list applay-docs">
      <u-field-file
				v-for="file in docList"
				:key="file.id"
				v-model:value="file.file"
				:label="file.label"
				:choiceFile="file.file"
				:max-files="1"
				@filesUpload="filesUpload($event, file.id)"
			/>

			<u-button 
				href="/k_competition"
				:variant="'dark'" 
			>Подать заявку</u-button>
    </div>

    <template v-else-if="detail?.WINNER?.USER_FULL_NAME">
      <div class="competition-detail__winner">
        <div class="block-title">Победитель</div>
        <u-card>
          <div class="fb fb--jc-sb fb--ai-c">
            <div class="txt-mdl">{{ detail?.WINNER?.USER_FULL_NAME }}</div>
            <div class="txt txt-gray">{{ detail?.WINNER?.USER_POSITION }}</div>
          </div>

          <template #list>
            <div v-for="item in detail?.WINNER?.ITEMS" :key="item?.ID" class="rating-row">
              <div class="rating-row__text" v-html="item?.TEXT" />
              <u-rating 
                :ratingValue="item?.RATING" 
                :isEdit="isEdit" 
                @update="(val) => item.RATING = val"
              />
            </div>
          </template>

          <template #docs>
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

          <template #list>
            <div v-for="item in candidat?.ITEMS" :key="item?.ID" class="rating-row">
              <div class="rating-row__text" v-html="item?.TEXT" />
              <u-rating 
                :ratingValue="item?.RATING" 
                :isEdit="isEdit" 
                @update="(val) => item.RATING = val"
              />
            </div>
          </template>

          <template #docs>
            <u-doc-list :docs="candidat?.DOCS" :showNum="0" />
          </template>
        </u-card>
      </div>
    </template>

  </div>
</template>

<script>
import { computed } from "vue"
import { useRoute } from 'vue-router'
import { declOfNum } from '@/utils'
import UserEstateitem from '@/components/Estates/UserEstateItem.vue'

export default {
  name: "UserCompetitionDetail",
  components: { UserEstateitem },
  props: {
    detail: Object,
    applay: Boolean,
    docList: Array
  },
  setup(props) {
    const route = useRoute()
    const isEdit = route.meta.edit
    const candidatesTitle = computed(() => {
      let number = props.detail?.WINNER && props.detail?.OTHER?.length ? props.detail.OTHER.length + 1 : 0
      return number ? `${number} ${declOfNum(number, ['кандидат', 'кандидата', 'кандидатов'])}` : 'Нет кандидатов'
    })

    // console.log('detail', props.detail.ITEMS);

    const filesUpload = (e, id) => {
			files.value.forEach((f) => {
				if (f.id === id) f.name === e.files[0].name
			})
		}

    return {
      isEdit,
      candidatesTitle,
      filesUpload
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/styles.scss"/>
<style lang="scss" scoped>
// .competition-detail {

  //&__titles {
  //  display: flex;
  //  margin-bottom: 20px;
  //
  //  &>div {
  //    width: 30%;
  //  }
  //}
// }
// .applay-docs {

// }
</style>