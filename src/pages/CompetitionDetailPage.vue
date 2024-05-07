<template>
  <div class="container">
    <div class="btn-wrap flex-block flex-block--jc-sb">
      <u-button @click="$router.back()">Вернуться</u-button>
      <u-button :disabled="true">Подать заявку</u-button>
    </div>
    <div class="content">
      <competition-detail></competition-detail>
    </div>
  </div>
</template>

<script>
import CompetitionDetail from '@/components/Competition/CompetitionDetail'

export default {
  name: 'CompetitionDetailPage',
  components: {
    CompetitionDetail
  }
}
</script>

<style lang="scss" scoped>

</style>