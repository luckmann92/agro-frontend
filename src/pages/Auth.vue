<template>
  <div class="auth">
    <div class="container">
      <AuthLogin v-if="!showRegisterForm" @toRegister="() => showRegisterForm = true" />
      <AuthRegister v-else @toLogin="() => showRegisterForm = false" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AuthLogin from '@/components/Auth/AuthLogin.vue';
import AuthRegister from '@/components/Auth/AuthRegister.vue';
import { useProfile } from "@/store/profile";

export default {
  name: 'Auth',
  components: {
    AuthLogin,
    AuthRegister
  },
  setup() {  
    const showRegisterForm = ref(true)  
    // const profileStore = useProfile()
    // const phone = ref(profileStore.phone)
    // const fullName = ref(profileStore.fullName)
    // const code = ref('')
    // const timer = ref(null)

    return {
      showRegisterForm,
      // phone,
      // fullName
    }
  }

}
</script>

<style scoped lang="scss">

</style>