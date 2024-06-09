<template>
  <component :is="layout"/>
  <MessagePopup />
</template>

<script>
// import { computed, onMounted, ref, watch } from "vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import AuthLayout from './layouts/AuthLayout'
import DefaultLayout from './layouts/DefaultLayout'
import MessagePopup from '@/components/app/MessagePopup.vue'

export default {
  name: 'App',
  components: {
    AuthLayout,
    DefaultLayout,
    MessagePopup
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
