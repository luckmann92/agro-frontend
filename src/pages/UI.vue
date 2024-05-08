<template>
  <div class="container ui-container">

    <div class="auth-form">
      <form class="form">
        <div class="form__title txt-mdl">Вход</div>
        <div class="form__text txt">Введите номер телефона, <br> чтобы войти в сервис</div>

        <u-field
            :id="'auth-phone'"
            v-model="phone"
            :label="'Номер телефона'"
        />
        <u-button :variant="'dark'" >Войти</u-button>
      </form>
    </div>

    <div class="btn-wrap">
      <u-button>Стандартная</u-button>
      <u-button :disabled="true">Неактивная</u-button>
      <u-button :variant="'dark'">Тёмная</u-button>
      <u-button :variant="'wait'" title="Ожидание">Ожидание</u-button>
      <u-button>Стандартная</u-button>
    </div>
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

<style lang="scss" scoped>
.ui-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 80px;

}
</style>