<template>
	<div class="auth-login">
		<div />
		<div class="auth-form">
			<div class="logo">
				<img src="./../../assets/img/logo_large.png" alt="logo">
			</div>
			<template v-if="registerStep === 1">
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

						<!-- :disabled="!v$.fullName.$error && !v$.phone.$error" -->
					<u-button 
						:variant="'dark'" 
						:disabled="fullName?.length < 1 || phone?.length < 12"
						@click.prevent="getCode" 
					>Зарегестрироваться</u-button>
				</form>
			</template>

			<template v-else-if="registerStep === 2">
				<form class="form">
					<div class="form__title txt-mdl">Введите SMS-код</div>
					<div class="form__text txt txt-gray">{{ phone }}</div>

						<!-- :id="'auth-code'" -->
						<!-- v-model="code" -->
					<u-field-code
						@pinValid="validCode"
					/>

					<u-button :variant="'dark'" @click.prevent="verificationCode">Отправить</u-button>

					<div v-if="currentTime > 0" class="form__text txt-sml txt-gray">
						{{ timerText }}
					</div>
					<div v-else class="form__text txt-sml txt-gray" @click.prevent="auth">
						{{ timerText }}
					</div>
				</form>
			</template>

			<template v-else>
				<form class="form">
					<div class="form__title txt-mdl">Регистрация кандидата</div>

					<u-field-select
						:options="regionList"
						v-model:value="region"
						label="Область"
						class=""
					/>
					<u-field-select
						:options="statusList"
						v-model:value="status"
						label="Статус"
						class=""
					/>
					<u-field-file
						v-for="file in files"
						:key="file.id"
						v-model:value="file.file"
						:label="file.label"
            :choiceFiles="[]"
            :accept="accept"
            :max-files="1"
					/>
            <!-- @deleteImage="deleteImage($event)"
            @filesUpload="filesUpload($event)" -->

					<u-button :variant="'dark'" @click.prevent="verificationCode">Отправить</u-button>

					<div v-if="currentTime > 0" class="form__text txt-sml txt-gray" v-html="timerText" />
					<div v-else class="form__text txt-sml txt-gray" @click.prevent="getCode">
						{{ timerText }}
					</div>
				</form>
			</template>

		</div>
		<div class="register-btn">
			<u-button v-if="registerStep === 1" @click="$emit('toLogin')">Войти</u-button>
			<u-button v-else @click="() => registerStep = 1">Вернуться ко входу</u-button>
		</div>

	</div>
</template>

<script>
import { computed, watch, ref } from "vue"
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'
import axios from "axios";
import { useProfile } from "@/store/profile"

export default {
	name: 'AuthRegister',
	setup() {  
    const showRegisterForm = ref(false)
    const profileStore = useProfile()
    const fullName = ref(profileStore.profileInfo.fullName)
    const phone = ref(profileStore.profileInfo.phone)
    const registerStep = ref(1)
    const code = ref('')
    const codeError = ref(false)
    const timer = ref(null)
    const currentTime = ref(60)

		const region = ref(23)
		const regionList = ref([
			{ key: 23, value: 'Чуйская' },
			{ key: 24, value: 'Не Чуйская' }
		])
		const status = ref(43)
		const statusList = ref([
			{ key: 43, value: 'Семхоз' },
			{ key: 44, value: 'Не семхоз' }
		])
		
    const accept = 'image/jpeg, image/jpg, image/png, application/pdf';
		const files = ref([
			{ 
				id: 1, 
				label: 'Информацию при наличии используемых земельных участков (кадастровая информация, вид угодий правоустанавливающие и&nbsp;право удостоверяющие документы);',
				file: null
			},
			{ 
				id: 2, 
				label: 'Справка с уполномоченных государственных органов статистики, налоговой службы и&nbsp;социального фонда об отсутствии задолженностей и&nbsp;информацию о&nbsp;не&nbsp;прерывной деятельности за&nbsp;последние три&nbsp;года;',
				file: null
			},
			{ 
				id: 3, 
				label: 'Информацию о материально-технической базе для&nbsp;производства и&nbsp;реализации сельскохозяйственной продукции;',
				file: null
			},
			{ 
				id: 4, 
				label: 'Наличие соответствующего статуса семенного или&nbsp;племенного хозяйства, за&nbsp;исключением сельскохозяйственных кооперативов;',
				file: null
			},
			{ 
				id: 5, 
				label: 'Информацию реализации одного из&nbsp;продуктов продовольственной безопасности;',
				file: null
			},
			{ 
				id: 6, 
				label: 'Информацию о необходимом кадровом обеспечении',
				file: null
			},
			{ 
				id: 7, 
				label: 'Для племенных хозяйств дополнительно: <br> - информацию о&nbsp;племенном учете; <br> - ветеринарную справку о&nbsp;благополучии хозяйства по&nbsp;инфекционным и&nbsp;острозаразным заболеваниям.',
				file: null
			},
			{ 
				id: 8, 
				label: 'Для семеноводческих хозяйств дополнительно: <br> - информацию о&nbsp;фактической структуре посевных площадей с&nbsp;расчетом объема производства и&nbsp;реализации семян по&nbsp;каждой сельскохозяйственной культуре на&nbsp;ближайшие три&nbsp;года, предполагаемых источник',
				file: null
			}
		])

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

		const rules = {
      fullName: { required },
      phone: { required, minLength: minLength(12), }
    }

    const v$ = useVuelidate(rules, {
			fullName, phone
		})

    // const validateRegister = async () => {
    //   const isFormCorrect = await v$.value.$validate()
    //   if (!isFormCorrect) return
      
    // }

		const getCode = (recaptchaToken) => {
			registerStep.value = 2
			startTimer()
      // axios.post('/auth', {
      //   PHONE: numPhone.value,
      //   'g-recaptcha-response': recaptchaToken
      // }).then(res => {
      //   if (res.status === 200) {
      //     registerStep.value = 2
      //     if (process.env.NODE_ENV === 'development') {
      //       alert(res.data.data.code)
      //     }
      //     startTimer()
      //   }
      // })
    }

		const updateCode = (val) => {
			code.value = val
			codeError.value = false
		}

		const validCode = (val) => {
			console.log('Valid PIN:', val);
			code.value = val
			// Do something with the valid pin code
		};

		const verificationCode = () => {
			console.log('code', code.value);
      if (code.value.length < 4) {
        codeError.value = true
        return
      }
			if (code.value === 1234) {
				registerStep.value = 2
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
      let str = 'Запросить повторно код подтверждения '
      if (timer.value) {
        str += `<br/> через ${currentTime.value} сек.`
      }
      return str
    })

		watch(currentTime, (time) => {
      if (time === 0) {
        stopTimer()
      }
    })

    return {
      showRegisterForm,
      fullName,
      phone,
			registerStep,
			code,
			v$,

			timer,
			timerText,
			currentTime,

			getCode,
			validCode,
			verificationCode,

			region,
			regionList,
			status,
			statusList,
			accept,
			files
    }
  }
}
</script>

<style lang="scss" scoped>

</style>