<template>
  <div class="auth">
    <div class="container">
      <div />
      <div class="auth-form">
        <div class="logo">
          <img src="./../assets/logo_large.png" alt="logo">
        </div>
        <form class="form">
          <div class="form__title txt-mdl">Вход</div>
          <div class="form__text txt">Введите номер телефона, <br> чтобы войти в сервис</div>

          <u-field
              :id="'auth-phone'"
              v-model="phone"
              :label="'Номер телефона'"
              :placeholder="'+996 (990) 000 000'"
          />

          <u-button :variant="'dark'" >Войти</u-button>
        </form>
      </div>
      <div class="register-btn">
        <u-button>Зарегестрироваться</u-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const phone = ref('');

    return {
      phone
    }
  }

}
</script>

<style scoped lang="scss">

.container {
  width: 328px;
  min-height: 100vh;
  padding: 40px 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .btn {
    width: 100%;
  }
}
.logo {
  margin-bottom: 24px;
}
.auth-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>