<template>
	<div class="auth-login">
		<div />
		<div class="auth-form">
			<div class="logo">
				<img src="./../../assets/img/logo_large.png" alt="logo">
			</div>
			<form class="form">
				<div class="form__title txt-mdl">Регистрация</div>
				<div class="form__text txt">Введите номер телефона и&nbsp;ФИО, <br> чтобы зарегестрироваться в&nbsp;сервисе</div>

				<u-field
					:id="'auth-phone'"
					v-model="fullName"
					:label="'ФИО'"
					:placeholder="'Джураев Абдулфато Латифович'"
				/>
				<u-field
					:id="'auth-phone'"
					v-model="phone"
					:label="'Номер телефона'"
					:placeholder="'+996 (990) 000 000'"
				/>

				<u-button :variant="'dark'">Зарегестрироваться</u-button>
			</form>
		</div>
		<div class="register-btn">
			<u-button @click="$emit('toLogin')">Войти</u-button>
		</div>

	</div>
</template>

<script>
import { computed, watch, ref } from "vue";
import { useProfile } from "@/store/profile";
export default {
	name: 'AuthRegister',
	setup() {  
    const showRegisterForm = ref(false)  
    const profileStore = useProfile()
    const phone = ref(profileStore.phone)
    const fullName = ref(profileStore.fullName)
    const code = ref('')
    const timer = ref(null)
    const currentTime = ref(60)

		const startTimer = () => {
      timer.value = setInterval(() => {
        currentTime.value--
      }, 1000)
    }

    const stopTimer = () => {
      clearInterval(timer.value)
      timer.value = null
      currentTime.value = 60
    }

		const verification = (recaptchaToken) => {
      axios.post('/authorization', {
        PHONE: numPhone.value,
        'g-recaptcha-response': recaptchaToken
      }).then(res => {
        if (res.status === 200) {
          showCode.value = true
          if (process.env.NODE_ENV === 'development') {
            alert(res.data.data.code)
          }
          startTimer()
        }
      })
    }

		const timeLeft = computed(() => {
      let str = 'Запросить повторно код подтверждения'
      if (timer.value) {
        str += ` через ${currentTime.value} сек.`
      }
      return str
    })

		watch(currentTime, (time) => {
      if (time === 0) {
        stopTimer()
        onCaptchaExpired()
      }
    })

    return {
      showRegisterForm,
      phone,
      fullName,

			timer,
			timeLeft
    }
  }
}
</script>

<style lang="scss" scoped>

</style>