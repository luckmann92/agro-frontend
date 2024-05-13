<template>
  <div class="header">
		<div class="container">
      <div v-if="$route.path === '/'" class="header__logo">
        <img src="./../assets/logo.png" alt="logo">
      </div>
      <router-link v-else to="/" class="header__logo">
        <img src="./../assets/logo.png" alt="logo">
      </router-link>
      <div class="header__nav">
        <router-link to="/ui">UI</router-link>
        <router-link to="/applications">МинСельХоз</router-link>
      </div>
      <div class="header__right">
        <div v-if="$route.path === '/applications'" class="header__user">Кульбаев Марат Макашевич</div>
        <u-button href="/auth" class="header__button">{{$route.path === '/applications' ? 'Выйти' : 'Войти'}}</u-button>
      </div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  props: {},
}
</script>

<style scoped lang="scss">
.header {
  background-color: #FBFAFC;
  border-bottom: 1px solid #D9D9D9;

  .container {
    position: relative;
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 77px;
  }

  &__logo {
    position: relative;
    z-index: 2;
    width: 46px;
    height: 45px;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__nav {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 36px;
    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  &__right {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 24px;
  }
  &__user {
    font-weight: 500;
  }
  &__button {
    height: 100%;
    padding: 28px 24px;
    display: flex;
    align-items: center;
    background-color: #F2F2F2;
    border-radius: 0;
    border: none;
    font-weight: 500;
    color: #546274;
  }
}

</style>
