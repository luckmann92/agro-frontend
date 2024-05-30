<template>
	<div class="auth-login">
		<div />
		<div class="auth-form">
			<div class="logo">
				<img src="./../../assets/img/logo_large.png" alt="logo">
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
			<u-button @click.prevent="$emit('toRegister')">Зарегестрироваться</u-button>
		</div>

	</div>
</template>

<script>
import { ref } from "vue";
import { useProfile } from "@/store/profile";
export default {
	name: 'AuthLogin',
	setup() {  
    const showRegisterForm = ref(false)  
    const profileStore = useProfile()
    const phone = ref(profileStore.phone)
    // const fullName = ref(profileStore.fullName)
    const code = ref('')
    const timer = ref(null)

    return {
      showRegisterForm,
      phone,
      // fullName
    }
  }
}
</script>

<style lang="scss" scoped>

</style>