<template>
  <div class="content-top">
		<div class="title">Добавление участка</div>
	</div>

  <div class="competition-new">
    <div class="list">

      <UserEstateItem 
        v-for="(item, index) in estateList" 
        :key="item.ID" 
        :itemData="item"
        :checkField="true"
        :checkedField="checkedList[index].checked"
        @selectEstate="selectEstate"
      />
    </div>

    <div class="form">
      <u-field-datepicker
				:label="'Дата начала аренды'"
        :dateValue="competitionNew.DATE_FROM"
        @update="updateDateFrom"
			/>
      <u-field-datepicker
				:label="'Дата объявления конкурсной процедуры'"
        :dateValue="competitionNew.DATE_ANNONCE"
        @update="updateDateAnnonce"
			/>
      <u-field-datepicker
				:label="'Дата проведения заседания комиссии'"
        :dateValue="competitionNew.DATE_EVENT"
        @update="updateDateEvent"
			/>
				<!-- :dateValue="competitionNew.DATE_FROM" -->
      <!-- <u-field
				:label="'Дата объявления конкурсной процедуры'"
				v-model="competitionNew.DATE_ANNONCE"
			/>
      <u-field
				:label="'Дата проведения заседания комиссии'"
				v-model="competitionNew.DATE_EVENT"
			/> -->

      <u-button 
        :variant="'dark'"
        :disabled="addBtnDisabled"
        @click="addNew"
      >Добавить</u-button>
    </div>

  </div>
</template>

<script>
import { computed, ref, onMounted, onBeforeMount } from "vue"
import { useEstate } from "@/store/estate"
import UserEstateItem from '@/components/Estates/UserEstateItem.vue'

export default {
  name: "UserCompetitionNew",
  components: { UserEstateItem },
  props: {
    detail: Object
  },
  emits: [
    'add'
  ],
  setup(props, { emit }) {
    const estateStore = useEstate()
    const estateList = ref(estateStore.list)
    const competitionNew = ref({
      LAND: null,
      DATE_FROM: '',
      DATE_ANNONCE: '',
      DATE_EVENT: '',
    })
    const selected = ref(null)
    const checkedList = ref([])

    onBeforeMount(() => {
      const arr = []
      estateStore.list.forEach((el, i) => {
        arr.push({ ID: el.ID, checked: false })
      })
      checkedList.value = arr
      // console.log('checkedList', checkedList.value);
    })

    const selectEstate = (id, checked) => {
      // console.log('selectEstate:id', id);
      // console.log('selectEstate:checked', checked);
      checkedList.value.forEach((el, i) => {
        el.checked = el.ID === id ? checked : false
      })
      selected.value = checked ? estateStore.list.find(el => el.ID === id) : null
      // console.log('selectEstate:selected', selected.value);
    }

    const addBtnDisabled = computed(() => {
      // console.log('DATE_FROM', competitionNew.value.DATE_FROM)
      // console.log('DATE_ANNONCE', competitionNew.value.DATE_ANNONCE)
      // console.log('DATE_EVENT', competitionNew.value.DATE_EVENT)
      return (competitionNew.value.DATE_FROM === '' || competitionNew.value.DATE_ANNONCE === '' || competitionNew.value.DATE_EVENT === '' || !selected.value)
    })

		const updateDateFrom = (val) => {
      // console.log('updateDateFrom', val);
      competitionNew.value.DATE_FROM = val
		}
		const updateDateAnnonce = (val) => {
      // console.log('updateDateAnnonce', val);
      competitionNew.value.DATE_ANNONCE = val
		}
		const updateDateEvent = (val) => {
      // console.log('updateDateEvent', val);
      competitionNew.value.DATE_EVENT = val
		}

		const addNew = () => {
      competitionNew.value.LAND = selected.value
      console.log('addNew', competitionNew.value);
			emit('add', competitionNew.value)
		}

    return {
      estateList,
      checkedList,
      competitionNew,
      addBtnDisabled,
      selectEstate,
      updateDateFrom,
      updateDateAnnonce,
      updateDateEvent,
      addNew
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/styles.scss"/>
<style lang="scss" scoped>
.competition-new {
  display: flex;
  gap: 40px;

  .list {
    width: 800px;
  }
  .form {
    width: 360px;
  }
}
</style>