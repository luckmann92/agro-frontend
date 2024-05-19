<template>
  <div class="card">

    <slot />

    <div v-if="$slots.detail" :class="['card__detail']">
      <button :class="['btn btn--detail', { 'show-detail': showDetail }]" @click="toggleShowDetail">
        <span class="icon" />
        Подробнее
      </button>
      <div v-show="showDetail" class="card__detail-content">
        <div class="divider"></div>

        <slot name="detail"/>
      </div>
    </div>

    <div v-if="$slots.list" :class="['card__list']">
      <slot name="list"/>
    </div>

    <div v-if="$slots.docs" :class="['card__docs']">
      <slot name="docs"/>
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
