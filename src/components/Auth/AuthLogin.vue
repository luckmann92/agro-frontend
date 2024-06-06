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
		const { setUserType, setUser } = profileStore
    const phone = ref(profileStore.phone)
    // const code = ref('')
    // const timer = ref(null)

		const login = () => {
			console.log('phone', phone.value);
			if (phone.value === '+996 (990) 234 234') {
				setUserType('M')
				router.push('/applications')
			} else if (phone.value === '+996 (990) 456 456') {
				setUserType('R')
				router.push('/estate')
			} else if (phone.value === '+996 (990) 678 678') {
				setUserType('K')
				router.push('/k_competition')
			}
			setUser({
				phone: phone.value
			})
		}

		const updatePhone = (val) => {
			// console.log('updatePhone:val', val);
			// console.log('updatePhone:length', val.length);
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