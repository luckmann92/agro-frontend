<template>
	<div class="auth-login">
		<div />
		<div class="auth-form">
			<div class="logo">
				<img src="./../../assets/img/logo_large.png" alt="logo">
			</div>

			<template v-if="registerStep === 1">
				<div class="form">
					<div class="form__title txt-mdl">Регистрация</div>
					<div class="form__text txt">Введите номер телефона и&nbsp;ФИО, <br> чтобы зарегистрироваться в&nbsp;сервисе</div>

          <div v-if="error?.length > 0" class="form__text form__error txt">{{ error }}</div>

					<u-field
						:id="'auth-phone'"
						v-model="fullName"
						:label="'ФИО'"
            :placeholder="'Джураев Абдулфато Латифович'"
          />

					<u-field-phone
						:label="'Номер телефона'"
						:placeholder="'+996 (990) 000 000'"
						@update="updatePhone"
					/>

					<u-button
						:variant="'dark'"
            :disabled="fullName?.length < 1 || phone?.length < 18 || v$.fullName.$error || v$.phone.$error"
						@click.prevent="getCode"
            :loading="step1BtnLoading"
					>Зарегистрироваться</u-button>
				</div>
			</template>

			<template v-else-if="registerStep === 2">
				<div class="form">
					<div class="form__title txt-mdl">Введите SMS-код</div>
					<div class="form__text txt txt-gray">{{ phone }}</div>

          <div v-if="error?.length > 0" class="form__text form__error txt">{{ error }}</div>

						<!-- :id="'auth-code'" -->
						<!-- v-model="code" -->
					<u-field-code
						@pinValid="validCode"
					/>

					<u-button 
						:variant="'dark'" 
						:disabled="code.length < 4"
						@click.prevent="verificationCode"
					>Отправить</u-button>

					<div v-if="currentTime > 0" class="form__text txt-sml txt-gray">
						{{ timerText }}
					</div>
					<a v-else class="form__text txt-sml txt-gray txt-link" href="#" @click.prevent="getNewCode">
						{{ timerText }}
					</a>
				</div>
			</template>

			<template v-else-if="registerStep === 3">
				<div class="register-form">
					<div class="form__title txt-mdl">Регистрация кандидата</div>

          <div v-if="error?.length > 0" class="form__text form__error txt">{{ error }}</div>

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
            :max-files="1"
					/>
            <!-- :accept="accept" -->
            <!-- @deleteImage="deleteImage($event)"
            @filesUpload="filesUpload($event)" -->

					<u-button 
						:variant="'dark'" 
						@click.prevent="registration"
					>Зарегистрироваться</u-button>

				</div>
			</template>

			<div class="auth-btn">
				<u-button v-if="registerStep === 1" @click="$emit('toLogin')">Войти</u-button>
				<u-button v-else @click="() => {
					registerStep = 1
					$emit('toLogin')
				}">Вернуться ко входу</u-button>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, watch, ref } from "vue"
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'
import axios from "axios"
import { useProfile } from "@/store/profile"

export default {
	name: 'AuthRegister',
	setup() {  
		const router = useRouter()
    const showRegisterForm = ref(false)
    const profileStore = useProfile()
		const { setUserType, setAuthToken, setUser } = profileStore
    const fullName = ref(profileStore.profileInfo.fullName)
    const phone = ref(profileStore.profileInfo.phone)
    const registerStep = ref(1)
    const step1BtnLoading = ref(false)
    const error = ref('')
    const code = ref('')
    const codeError = ref(false)
    const timer = ref(null)
    const currentTime = ref(60)

		const region = ref(0)
    const regionList = ref([
      { key: 0, value: 'Не выбрано' }
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

		const updatePhone = (val) => {
			phone.value = val
			error.value = ''
		}

		const phoneValid = computed(() => {
			return phone.value.length === 18
		})

		const startTimer = () => {
      currentTime.value = 60
      timer.value = setInterval(() => {
        currentTime.value--
      }, 1000)
    }

    const stopTimer = () => {
      clearInterval(timer.value)
      timer.value = null
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
      step1BtnLoading.value = true
      axios.post('/auth/registration', {
        name: fullName.value,
        phone: phone.value.replace(/\D/g, ''),
        'g-recaptcha-response': recaptchaToken
      }).then(response => {
        step1BtnLoading.value = false
        if (response.status === 200) {
          registerStep.value = 2
          startTimer()
        }
      }).catch(axios => {
        step1BtnLoading.value = false
        if (axios.response?.status === 400) {
          error.value = axios.response.data.message
        } else {
          error.value = 'Ошибка'
        }
      })
    }

		const updateCode = (val) => {
			code.value = val
			codeError.value = false
		}

		const validCode = (val) => {
      error.value = ''
			code.value = val
		};

		const verificationCode = () => {
      axios.post('/auth/checkSmsCode', {
        phone: phone.value.replace(/\D/g, ''),
        code: Number(code.value)
      }).then(response => {
        if (response.status === 200) {
          registerStep.value = 3
          setUserType('K')
          setAuthToken(response.data.access_token)
          setUser(response.data.user)
          error.value = ''
        }
      }).catch(axios => {
        if (axios.response?.status === 400) {
          error.value = axios.response.data.message
        } else {
          error.value = 'Ошибка'
        }
      })
    }

    const getNewCode = () => {
      axios.post('/auth/resendSmsCode', {}).then(response => {
        if (response.status === 200) {
          error.value = 'Код отправлен повторно'
          stopTimer()
          startTimer()
        }
      }).catch(axios => {
        if (axios.response.status === 400) {
          error.value = axios.response.data.message
        } else {
          error.value = 'Ошибка'
        }
      })
    }

		const registration = () => {
      axios.post('/user/update', {
        region: region.value,
        status: status.value,
        files: files.value
      }).then(response => {
        if (response.status === 200) {
          //router.push('/k_competition')
        }
        console.log('auth:res', response);
      }).catch(axios => {
        if (axios.response?.status === 400) {
          error.value = axios.response.data.message
        } else {
          error.value = 'Ошибка'
        }
      })
    }

		const timerText = computed(() => {
      let str = 'Запросить повторно код подтверждения '
      if (timer.value) {
        str += ` через ${currentTime.value} сек.`
      }
      return str
    })

		watch(currentTime, (time) => {
      if (time === 0) {
        stopTimer()
      }
    })

    const getRegionList = () => {
      axios.get('/region').then(response => {
        console.log('getRegionList:res', response);

        if (response.status === 200) {
          response.data.forEach((item) => {
            regionList.value.push({key: item.id, value: item.name})
          })

          console.log('getRegionList:regions', regionList.value)
        }
      }).catch(axios => {
        console.log('getRegionList:err', axios.response?.status, axios.response?.data.message)
      })
    }

    watch(registerStep, (step) => {
      if (step === 3) {
        getRegionList()
      }
    })

    return {
      showRegisterForm,
      fullName,
      phone,
			registerStep,
      step1BtnLoading,
			error,
			code,
			v$,

			timer,
			timerText,
			currentTime,

			phoneValid,
			updatePhone,
			
			getCode,
			validCode,
			verificationCode,
      getNewCode,

			registration,

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