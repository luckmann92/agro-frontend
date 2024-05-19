<template>
  <div class="container">
    <div class="content">
      <user-competition-list :list="compList" />
    </div>
  </div>
</template>

<script>
import UserCompetitionList from "@/components/Competition/UserCompetitionList";

export default {
  name: 'UserCompetitionDetailPage',
  components: {
    UserCompetitionList
  },
  data() {
    return {
      compList: [
        {
          ID: 234,
          CANDIDATES_COUNTER: '22',
          WINNER: 'Асанов Усен Асанович',
          DATE_FROM: '24.08.24',
          DATE_ANNONCE: '24.10.24',
          DATE_EVENT: '24.11.24',
          PLACE: 'Чуйская',
          NAME: 'Орашаемый'
        },
        {
          ID: 235,
          CANDIDATES_COUNTER: '22',
          WINNER: 'Асанов Усен Асанович',
          DATE_FROM: '24.08.24',
          DATE_ANNONCE: '24.10.24',
          DATE_EVENT: '24.11.24',
          PLACE: 'Чуйская',
          NAME: 'Орашаемый'
        },
        {
          ID: 236,
          CANDIDATES_COUNTER: '22',
          WINNER: 'Асанов Усен Асанович',
          DATE_FROM: '24.08.24',
          DATE_ANNONCE: '24.10.24',
          DATE_EVENT: '24.11.24',
          PLACE: 'Чуйская',
          NAME: 'Орашаемый'
        },
        {
          ID: 237,
          CANDIDATES_COUNTER: '22',
          WINNER: 'Асанов Усен Асанович',
          DATE_FROM: '24.08.24',
          DATE_ANNONCE: '24.10.24',
          DATE_EVENT: '24.11.24',
          PLACE: 'Чуйская',
          NAME: 'Орашаемый'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>