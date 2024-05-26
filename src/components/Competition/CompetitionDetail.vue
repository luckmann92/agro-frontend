<template>
  <div class="competition-detail">
    <div class="three-col-block mb-20">
      <div class="txt-block">
        <p class="txt-sml">Дата начала аренды</p>
        <p>{{ '24.08.24' }}</p>
      </div>
      <div class="txt-block">
        <p class="txt-sml">Дата объявления</p>
        <p>{{ '24.10.24' }}</p>
      </div>
      <div class="txt-block">
        <p class="txt-sml">Дата проведения</p>
        <p>{{ '24.11.24' }}</p>
      </div>
    </div>

    <u-card>

      <template #default>
        <div class="top">
          <div class="txt-block">
            <p class="txt-sml">Область: {{ 'Чуйская' }}</p>
            <p class="txt-mdl">{{ 'Орашаемый' }}</p>
          </div>
          <div class="btn-wrap">
            <u-button >Показать на карте</u-button>
          </div>
        </div>

        <div class="bottom">
          <div class="txt-block">
            <p class="txt-sml">Границы выставляемого участка</p>
            <p>{{ '1 000' }}м&sup2;</p>
          </div>
          <div class="txt-block">
            <p class="txt-sml">Координаты</p>
            <p>{{ '10 S 055974, 4282182' }}</p>
          </div>
          <div class="txt-block">
            <p class="txt-sml">Кадастровый номер</p>
            <p>{{ '47:14:1203001:814' }}</p>
          </div>
        </div>
      </template>

      <template #detail>
        <div class="txt-block">
          <p class="txt-sml">Фактическое размещение культур</p>
          <p>{{ '2023   Свекла' }}</p>
          <p>{{ '2022   Свекла' }}</p>
          <p>{{ '2021   Люцерна' }}</p>
          <p>{{ '2020   Люцерна' }}</p>
        </div>
        <div class="txt-block">
          <p class="txt-sml">Целевое использование земель</p>
          <p>{{ 'Для засева культуры свеклы' }}</p>
        </div>
      </template>
    </u-card>

  </div>
</template>

<script>

export default {
  name: "CompetitionDetail",
  components: {  }

}
</script>

<style lang="scss" src="@/assets/styles/styles.scss"/>
<style lang="scss" scoped>

</style>