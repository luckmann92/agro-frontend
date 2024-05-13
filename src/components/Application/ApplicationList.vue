<template>
  <div class="container">
    <div class="application-list">
      <div class="title">Заявки {{ list?.length }}</div>

      <div class="list">
        <application-item v-for="item in list" :key="item.ID" :itemData="item"/>
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