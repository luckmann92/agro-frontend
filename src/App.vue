<template>
  <component :is="layout"/>
</template>

<script>


// import { computed, onMounted, ref, watch } from "vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import AuthLayout from './layouts/AuthLayout'
import DefaultLayout from './layouts/DefaultLayout'

export default {
  name: 'App',
  components: {
    AuthLayout,
    DefaultLayout,
  },
  setup() {
    const route = useRoute()
    const layout = computed(() => route.meta.layout);

    return {
      layout,
    }
  }
}
</script>

<style>
#app {
}
</style>
<style lang="scss" src="@/assets/styles/styles.scss"/>
