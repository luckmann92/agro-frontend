import { computed, ref, } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios'
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
// import {jsonToFormData} from "../helpers/jsonHelpers";

export const useCompetition = defineStore(
  'competition',
  () => {
    const router = useRouter()
    const listEmpty = ref([])
    const list = ref([
      {
				ID: 323,
				STATUS: "NEW",
				CANDIDATES_COUNTER: 22,
				DATE_FROM: '24.08.24',
				DATE_ANNONCE: '24.10.24',
				DATE_EVENT: '24.11.24',
				LAND: {
					ID: 234,
					REGION: 'Чуйская',
					TYPE: 'Орашаемый',
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
			},
			{
				ID: 324,
				STATUS: "NEW",
				CANDIDATES_COUNTER: 14,
				DATE_FROM: '24.08.24',
				DATE_ANNONCE: '24.10.24',
				DATE_EVENT: '24.11.24',
				LAND: {
					ID: 235,
					AREA: 1500,
					COORDS: ['10 S 055974', '10 S 055974'],
					CADASTRAL_NUMBER: '47:14:1203001:814',
					REGION: 'Чуйская 2',
					TYPE: 'Богарное',
					AREA: '1 000м2',
					COORDS: '10 S 055974, 4282182',
					USE: 'Для засева культуры свеклы',
					ACTUAL_PLACEMENT_LIST: [
						{ YEAR: 2023, VALUE: 'Свекла' },
						{ YEAR: 2022, VALUE: 'Свекла' },
						{ YEAR: 2021, VALUE: 'Люцерна' },
						{ YEAR: 2020, VALUE: 'Люцерна' },
					]
				}
			},
			{
				ID: 325,
				STATUS: "FINISHED",
				CANDIDATES_COUNTER: 11,
				WINNER: 'Асанов Усен Асанович',
				DATE_FROM: '24.08.24',
				DATE_ANNONCE: '24.10.24',
				DATE_EVENT: '24.11.24',
				LAND: {
					ID: 235,
					AREA: 1500,
					COORDS: ['10 S 055974', '10 S 055974'],
					CADASTRAL_NUMBER: '47:14:1203001:814',
					REGION: 'Чуйская 2',
					TYPE: 'Богарное',
					AREA: '1 000м2',
					COORDS: '10 S 055974, 4282182',
					USE: 'Для засева культуры свеклы',
					ACTUAL_PLACEMENT_LIST: [
						{ YEAR: 2023, VALUE: 'Свекла' },
						{ YEAR: 2022, VALUE: 'Свекла' },
						{ YEAR: 2021, VALUE: 'Люцерна' },
						{ YEAR: 2020, VALUE: 'Люцерна' },
					]
				}
			},
			{
				ID: 326,
				STATUS: "FINISHED",
				CANDIDATES_COUNTER: 22,
				DATE_FROM: '24.08.24',
				DATE_ANNONCE: '24.10.24',
				DATE_EVENT: '24.11.24',
				LAND: {
					ID: 235,
					AREA: 1500,
					COORDS: ['10 S 055974', '10 S 055974'],
					CADASTRAL_NUMBER: '47:14:1203001:814',
					REGION: 'Чуйская 2',
					TYPE: 'Богарное',
					AREA: '1 000м2',
					COORDS: '10 S 055974, 4282182',
					USE: 'Для засева культуры свеклы',
					ACTUAL_PLACEMENT_LIST: [
						{ YEAR: 2023, VALUE: 'Свекла' },
						{ YEAR: 2022, VALUE: 'Свекла' },
						{ YEAR: 2021, VALUE: 'Люцерна' },
						{ YEAR: 2020, VALUE: 'Люцерна' },
					]
				}
			}
    ])

    // добавить конкурс
    const addCompetition = (data) => {
			console.log('addCompetition', data);
			list.value.push({
				ID: list.value.length + 323,
				STATUS: "NEW",
				...data
			})
			router.push(`/competition`)
    }

    // удалить конкурс
    const deleteCompetition = (id) => {
      authToken.value = null
      list.value.filter((el) => el.ID !== id)
    }

    // получить список конкурсов
    const fetchCompetitionList = async () => {
      // try {
      //   let response = await axios.get('/contact');
      //   profile.value = response.data.data;
      //   return true;
      // } catch (e) {
      //   console.log(e);
      //   return false;
      // } finally {
      //   loadingProfile.value = false
      // }
    };

    return {
      list,
      addCompetition,
      deleteCompetition,
      fetchCompetitionList,
    }
  },
  {
    presist: true
  }
);