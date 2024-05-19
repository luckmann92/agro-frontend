<template>
  <section class="auth-page">
    <!-- <v-logo class="auth-page__logo"/> -->
    <div class="auth-page__container">
      <router-view/>
    </div>
  </section>
</template>

<script>
// import VLogo from "../../components/ui/v-logo/v-logo";
export default {
  name: "auth-layout",
  // components: { VLogo }
}
</script>

<style lang="scss" scoped>

</style>
