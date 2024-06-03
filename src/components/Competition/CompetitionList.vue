<template>
  <div class="content-top">
    <div class="title">Конкурсы</div>
  </div>
  <div class="content">
    <div class="list">
      <competition-item v-for="item in list" :key="item.ID" :itemData="item"/>
    </div>
  </div>
</template>

<script>
import CompetitionItem from './CompetitionItem.vue'
export default {
  name: 'CompetitionList',
	components: {
		CompetitionItem
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
.header-bottom {
  background-color: #F2F2F2;
  font-weight: 500;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 0;
  }
}
.competition-list {
  //margin-top: 44px;

  //.title {
  //  margin-bottom: 36px;
  //}


}
</style>
