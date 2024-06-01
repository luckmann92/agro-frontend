<template>
  <div class="content-top">
		<div class="title">Добавление участка</div>
	</div>

  <div class="competition-new">
    <div class="list">

      <UserEstateItem 
        v-for="item in estateList" 
        :key="item.ID" 
        checkField="true"
        :checkedField="item.checked"
        @selectEstate="selectEstate"
      />
    </div>

    <div class="list">
      <u-field
				:label="'Дата начала аренды'"
				v-model="competitionNew.DATE_FROM"
			/>
      <u-field
				:label="'Дата объявления конкурсной процедуры'"
				v-model="competitionNew.DATE_ANNONCE"
			/>
      <u-field
				:label="'Дата проведения заседания комиссии'"
				v-model="competitionNew.DATE_EVENT"
			/>

      <u-button :variant="'dark'">Добавить</u-button>
    </div>

  </div>
</template>

<script>
import { useEstate } from "@/store/estate"
import { computed, ref } from "vue"
import UserEstateItem from '@/components/Estates/UserEstateItem.vue'

export default {
  name: "UserCompetitionNew",
  components: { UserEstateItem },
  props: {
    detail: Object
  },
  setup(props) {
    const estateStore = useEstate()
    // const estateList = ref(estateStore.list)
    const competitionNew = ref({
      LAND: '',
      DATE_FROM: '',
      DATE_ANNONCE: '',
      DATE_EVENT: '',
    })

    const selectEstate = (id) => {

    }

    const estateList = computed(() => {
      let arr = estateStore.list.map((el, i) => {
        return { ...el, checked: false }
      })
      return arr
    })

		const add = () => {
			emit('addCompetition', competitionNew.value)
		}

    return {
      estateList,
      competitionNew,
      selectEstate,
      add
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/styles.scss"/>
<style lang="scss" scoped>
.competition-new {
  display: flex;
  gap: 40px;

  .list:first-child {
    width: 800px;
  }
}
</style>