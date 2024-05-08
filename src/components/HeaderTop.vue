<template>
  <div class="header">
		<div class="container">
      <div class="header__logo">
        <img src="./../assets/logo.png" alt="logo">
      </div>
      <div class="header__nav">
        <router-link to="/ui">UI</router-link>
      </div>
      <div class="header__right">
        <u-button href="/auth" class="header__button">Войти</u-button>
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
