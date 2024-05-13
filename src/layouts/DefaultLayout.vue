<template>
  <header-top />
  <header-bottom v-if="$route.path === '/' || $route.path === '/ui'" />

  <main class="main">
    <router-view/>
  </main>
</template>

<script>
// import { useRoute } from "vue-router";
// import { useStore } from "../../store";
// import { computed, onBeforeMount } from "vue";
import HeaderTop from "@/components/HeaderTop";
import HeaderBottom from "@/components/HeaderBottom";

export default {
  name: "default-layout",
  components: {
    HeaderTop,
    HeaderBottom
  },
  props: {},
  setup() {
    // const route = useRoute()
    // const store = useStore()

    return {
      // store
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 44px 0 60px;
}
</style>
