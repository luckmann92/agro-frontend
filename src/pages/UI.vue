<template>
  <div class="container">

    <form class="form">
      <div class="form__title txt-mdl">Вход</div>
      <div class="form__text txt">Введите номер телефона, <br> чтобы войти в сервис</div>

      <u-field
          :id="'auth-phone'"
          v-model="phone"
          :label="'Номер телефона'"
      />
    </form>
  </div>
</template>

<script>
// import {useRoute} from "vue-router";
// import {computed} from "vue";

import {ref} from "vue";

export default {
  name: 'IndexPage',
  components: {
  },
  setup() {
    const phone = ref('');

    return {
      phone
    }
  }
}
</script>

<style scoped>

</style>