import { computed, ref, } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios'
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
// import {jsonToFormData} from "../helpers/jsonHelpers";

export const useProfile = defineStore(
  'profile',
  () => {
    const router = useRouter()
    const profile = ref(useLocalStorage('user', {}));
    const authToken = ref(useLocalStorage('token', null))
    const isLoggedIn = ref(false);
    const loadingProfile = ref(true);
    const phone = ref('')
    const userType = ref('РУАР');

    // Проверка авторизации
    const checkAuth = () => {
      if (authToken.value) {
        setAuthToken(authToken.value)
      }
      if (profile.value.logged && authToken.value) {
        setUser(profile.value)
      }
    }

    const returnUserToAuth = () => {
      profile.value.logged = false
      isLoggedIn.value = false
      router.push({ name: 'auth' })
    }

    // записать auth-token
    const setAuthToken = (token) => {
      authToken.value = token
      axios.defaults.headers['Auth-Token'] = token
    }

    // Удалить auth-token
    const deleteAuthToken = () => {
      authToken.value = null
      delete axios.defaults.headers['Auth-Token']
    }

    // записать тип пользователя
    const setUserType = (uType) => {
      userType.value = uType
    }
    // записать авторизированного пользователя
    const setUser = (data) => {
      profile.value = data
      profile.value.logged = true
      phone.value = profile.value?.fields?.find(field => field.TYPE_ID === 'PHONE')?.VALUE
      isLoggedIn.value = true
    }

    // удалить авторизированного пользователя
    const deleteUser = () => {
      profile.value = {}
      isLoggedIn.value = false
      router.push({ name: 'auth' })
    }

    // Получение профиля юзера
    const fetchProfile = async () => {
      // try {
      //   let response = await axios.get('/contact');
      //   profile.value = response.data.data;
      //   return true;
      // } catch (e) {
      //   console.log(e);
      //   return false;
      // } finally {
      //   loadingProfile.value = false
      // }
    };

    const id = computed(() => profile.value?.ID ?? null);

    // Личная информация пользователя
    const profileInfo = computed(() => ({
      fullName: profile.value?.FULL_NAME,
      phone: profile.value?.fields?.find(field => field.TYPE_ID === 'PHONE')?.VALUE
    }));

    const updateProfile = async (data) => {}

    return {
      id,
      userType,
      profileInfo,
      authToken,
      phone,
      profile,
      isLoggedIn,
      loadingProfile,
      setUserType,
      returnUserToAuth,
      checkAuth,
      setUser,
      deleteUser,
      setAuthToken,
      deleteAuthToken,
      fetchProfile,
      updateProfile,
    }
  },
  {
    presist: true
  }
);