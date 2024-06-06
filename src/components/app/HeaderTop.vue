<template>
  <div class="header">
		<div class="container">
      <div v-if="$route.path === '/'" class="header__logo">
        <img src="./../../assets/img/logo.png" alt="logo">
      </div>
      <router-link v-else to="/" class="header__logo">
        <img src="./../../assets/img/logo.png" alt="logo">
      </router-link>

      <div class="header__nav">
        <template v-if="userType === 'M'">
          <router-link to="/candidates">Кандидаты</router-link>
          <router-link to="/applications">Заявки кандидатов</router-link>
          <router-link to="/competition">Конкурсы</router-link>
        </template>
        <template v-else-if="userType === 'K'">
          <router-link to="/k_competition">Конкурсы</router-link>
          <router-link to="/documents">Мои документы</router-link>
        </template>
        <template v-else-if="userType === 'R'">
          <router-link to="/estate">Участки</router-link>
          <router-link to="/r_competition">Конкурсы</router-link>
        </template>
        <template v-else>
          <!-- <router-link to="/ui">UI</router-link>
          <router-link to="/applications">МинСельХоз</router-link> -->
        </template>
      </div>

      <div class="header__right">
        <div v-if="$route.path != '/'" class="header__user">Кульбаев Марат Макашевич</div>
        <u-button :href="$route.path != '/' ? '/' : '/auth'" class="header__button">{{$route.path === '/' ? 'Войти' : 'Выйти'}}</u-button>
      </div>
		</div>
    <div v-if="showUserType" class="user-tabs">
      <div 
        :class="['tab', {'active': userType === 'M'}]" 
        @click="changeUserType('M')"
      >МСХ</div>
      <div 
        :class="['tab', {'active': userType === 'K'}]" 
        @click="changeUserType('K')"
      >Кандидат</div>
      <div 
        :class="['tab', {'active': userType === 'R'}]" 
        @click="changeUserType('R')"
      >РУАР</div>
    </div>
  </div>
</template>

<script>
import { useProfile } from "@/store/profile"
import { computed, ref, onBeforeMount } from "vue"
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'HeaderTop',
  props: {},
  setup() {
    const route = useRoute()
    const router = useRouter()
    const profileStore = useProfile()
    const userType = ref(profileStore.userType)
    const { setUserType } = profileStore

    onBeforeMount(() => {
      if (route.path == '/applications' || route.path == '/competition') {
        setUserType('M')
      } else if (route.path == '/k_competition' || route.path == '/documents') {
        setUserType('K')
      } else if (route.path == '/estate' || route.path == '/r_competition') {
        setUserType('R')
      }

      console.log('route.path', route.path);
      console.log('userType', userType.value);
    })

    const showUserType = computed(() => {
      return (route.path === '/applications' 
        || route.path === '/k_competition' 
        || route.path === '/estate')
    })

    const changeUserType = (t) => {
      console.log('t', t);
      setUserType(t)
      switch (t) {
        case 'M':
          router.push({ path: '/applications' })
          break
        case 'K':
          router.push({ path: '/k_competition' })
          break
        case 'R':
          router.push({ path: '/estate' })
          break
        default:
          router.push({ path: '/' })
      }
    }

    return {
      route,
      userType,
      showUserType,
      changeUserType
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
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
    color: #828282;
    white-space: nowrap;
    a {
      color: inherit;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: color 300ms, border 300ms;

      &:hover {
        color: #000;
        border-bottom-color: inherit;
        text-decoration: none;
      }

      &.router-link-active {
        color: #000;
        pointer-events: none;
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
.user-tabs {
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  align-items: center;
	background-color: #F2F2F2;
	border: 2px solid #F2F2F2;
	border-radius: 8px;

  .tab {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-decoration: none;
    background-color: transparent;
    border-radius: 8px;
    padding: 6px 8px;
    transition: background-color 300ms;
    cursor: pointer;
    pointer-events: none;

    &.active {
      background-color: #E0E0E0;
    }
  }
}
</style>
