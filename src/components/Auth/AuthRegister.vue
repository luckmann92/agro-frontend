<template>
	<div class="auth-login">
		<div />
		<div class="auth-form">
			<div class="logo">
				<img src="./../../assets/img/logo_large.png" alt="logo">
			</div>
			<template v-if="!showCode">
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

					<u-button :variant="'dark'" @click="auth">Зарегестрироваться</u-button>
				</form>
			</template>
			<template v-else>
				<form class="form">
					<div class="form__title txt-mdl">Введите SMS-код</div>
					<div class="form__text txt txt-gray">{{ phone }}</div>

					<u-code-field
						:id="'auth-code'"
						v-model="code"
						@update="updateCode"
					/>

					<u-button :variant="'dark'" @click="verification">Отправить</u-button>

					<div class="form__text txt-sml txt-gray">{{ timerText }}</div>
				</form>
			</template>

		</div>
		<div class="register-btn">
			<u-button v-if="!showCode" @click="$emit('toLogin')">Войти</u-button>
			<u-button v-else @click="() => showCode = !showCode">Вернуться ко входу</u-button>
		</div>

	</div>
</template>

<script>
import { computed, watch, ref } from "vue";
import axios from "axios";
import { useProfile } from "@/store/profile";
export default {
	name: 'AuthRegister',
	setup() {  
    const showRegisterForm = ref(false)  
    const profileStore = useProfile()
    const fullName = ref(profileStore.fullName)
    const phone = ref(profileStore.phone)
    const showCode = ref(true)
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

		const auth = (recaptchaToken) => {
			startTimer()
      // axios.post('/auth', {
      //   PHONE: numPhone.value,
      //   'g-recaptcha-response': recaptchaToken
      // }).then(res => {
      //   if (res.status === 200) {
      //     showCode.value = true
      //     if (process.env.NODE_ENV === 'development') {
      //       alert(res.data.data.code)
      //     }
      //     startTimer()
      //   }
      // })
    }

		const updateCode = (val) => {
			code.value = val
		}

		const verification = () => {
			console.log('code', code.value);
      if (code.value.length < 4) {
        codeError.value = true
        return
      }
      // axios.post('/auth', {
      //   phone: numPhone.value,
      //   code: Number(code.value)
      // })
      //   .then(res => {
			// 		console.log('auth:res', res);
      //   })
    }

		const timerText = computed(() => {
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
      fullName,
      phone,
			showCode,
			code,

			timer,
			timerText,

			auth,
			updateCode,
			verification,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>