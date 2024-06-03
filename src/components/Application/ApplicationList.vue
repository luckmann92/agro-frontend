<template>
  <div class="container">
    <div class="application-list">
      <div class="content-top">
        <div class="title">Заявки {{ list?.length }}</div>
      </div>

      <div class="content">
        <div class="list">
          <ApplicationItem v-for="item in list" :key="item.ID" :itemData="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationItem from "@/components/Application/ApplicationItem";

export default {
  name: 'ApplicationList',
  components: {
    ApplicationItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style lang="scss" src="@/assets/styles/styles.scss"/>
<style lang="scss" scoped>

</style>