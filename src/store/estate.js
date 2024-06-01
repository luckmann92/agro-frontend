import { computed, ref, } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios'
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
// import {jsonToFormData} from "../helpers/jsonHelpers";

export const useEstate = defineStore(
  'estate',
  () => {
    const router = useRouter()
    const list = ref([
      {
        ID: 234,
        AREA: 1000,
        COORDS: ['10 S 055974', '10 S 055974'],
        CADASTRAL_NUMBER: '47:14:1203001:814',
        REGION: 'Чуйская',
        TYPE: 'Орашаемое',
        AREA: '1 000м2',
        COORDS: '10 S 055974, 4282182',
        USE: 'Для засева культуры свеклы',
        ACTUAL_PLACEMENT_LIST: [
          { YEAR: 2023, VALUE: 'Свекла' },
          { YEAR: 2022, VALUE: 'Свекла' },
          { YEAR: 2021, VALUE: 'Люцерна' },
          { YEAR: 2020, VALUE: 'Люцерна' },
        ]
      },
      {
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
    ])

    // добавить участок
    const addEstate = (token) => {
      authToken.value = token
    }

    // удалить участок
    const deleteEstate = (id) => {
      authToken.value = null
      list.value.filter((el) => el.ID !== id)
    }

    // получить список участков
    const fetchEstatesList = async () => {
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
      addEstate,
      deleteEstate,
      fetchEstatesList,
    }
  },
  {
    presist: true
  }
);