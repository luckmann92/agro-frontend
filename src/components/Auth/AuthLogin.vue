<template>
	<div class="auth-login">
		<div />
		<div class="auth-form">
			<div class="logo">
				<img src="./../../assets/img/logo_large.png" alt="logo">
			</div>
			<div class="form">
				<div class="form__title txt-mdl">Вход</div>
				<div class="form__text txt">Введите номер телефона, <br> чтобы войти в сервис</div>

				<!-- <u-field
					:id="'auth-phone'"
					v-model="phone"
					:label="'Номер телефона'"
					:placeholder="'+996 (990) 000 000'"
				/> -->
					<!-- v-model="phone" -->
				<u-field-phone
					:label="'Номер телефона'"
					:placeholder="'+996 (990) 000 000'"
					@update="updatePhone"
				/>

				<u-button 
					:variant="'dark'" 
					:disabled="!phoneValid"
					@click.prevent="login"
				>Войти</u-button>
			</div>
		</div>
		<div class="register-btn">
			<u-button @click.prevent="$emit('toRegister')">Зарегестрироваться</u-button>
		</div>

	</div>
</template>

<script>
import { computed, ref } from "vue"
import { useRouter } from 'vue-router'
import { useProfile } from "@/store/profile"

export default {
	name: 'AuthLogin',
	setup() {  
		const router = useRouter()
    const showRegisterForm = ref(false)  
    const profileStore = useProfile()
		const { setUserType } = profileStore
    const phone = ref(profileStore.phone)
    // const code = ref('')
    // const timer = ref(null)

		const login = () => {
			setUserType('МСХ')
			router.push('/applications')
		}

		const updatePhone = (val) => {
			console.log('updatePhone:val', val);
			console.log('updatePhone:length', val.length);
			phone.value = val
		}

		const phoneValid = computed(() => {
			return phone.value.length === 18
		})

    return {
      showRegisterForm,
      phone,
			phoneValid,
			updatePhone,
      login,

    }
  }
}
</script>

<style lang="scss" scoped>

</style>