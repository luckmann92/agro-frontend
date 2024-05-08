<template>
  <div class="card">

    <slot />

    <div v-if="$slots.detail" :class="['card__detail', { 'show-detail': showDetail }]">
      <button :class="['btn btn--detail']" @click="toggleShowDetail">
        <span class="icon" />
        Подробнее
      </button>
      <div v-show="showDetail" class="card__detail-content">
        <div class="divider"></div>

        <slot name="detail"/>
      </div>
    </div>
  </div>
</template>

<script>

import {ref} from "vue";

export default {
  name: 'UCard',
  setup() {
    const showDetail = ref(false)

    const toggleShowDetail = () => {
      showDetail.value = !showDetail.value
    }

    return {
      showDetail,
      toggleShowDetail
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/styles.scss"/>
<style scoped lang="scss">

</style>
