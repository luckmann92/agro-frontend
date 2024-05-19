<template>
  <div class="container">
    <div class="competition-list">
      <div class="title">Конкурсы</div>


      <div class="list">
        <user-competition-item v-for="item in list" :key="item.ID" :itemData="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import UserCompetitionItem from './UserCompetitionItem.vue'
export default {
  name: 'UserCompetitionList',
	components: {
		UserCompetitionItem
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
