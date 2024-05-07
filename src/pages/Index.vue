<template>
  <competition-list :list="compList" />
</template>

<script>
import CompetitionList from "@/components/Competition/CompetitionList";
// import {useRoute} from "vue-router";
// import {computed} from "vue";

export default {
  name: 'Index',
  components: {
    CompetitionList,
  },
  data() {
    return {
      compList: [
        {
          ID: 323,
          DATE_FROM: '24.08.24',
          DATE_ANNONCE: '24.10.24',
          DATE_EVENT: '24.11.24',
          PLACE: 'Чуйская',
          NAME: 'Орашаемый'
        },
        {
          ID: 324,
          DATE_FROM: '24.08.24',
          DATE_ANNONCE: '24.10.24',
          DATE_EVENT: '24.11.24',
          PLACE: 'Чуйская',
          NAME: 'Орашаемый'
        }
      ]
    }
  },
  setup() {
    // const route = useRoute()

    return {}
  },
}
</script>

<style scoped>

</style>