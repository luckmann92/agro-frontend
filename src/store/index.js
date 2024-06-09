import {ref, computed} from "vue";
import {defineStore} from 'pinia'
import {useBreakpoints} from '@vueuse/core'
import {useProfile} from "./profile";

export const useStore = defineStore('main', () => {
  const breakpoints = useBreakpoints({
    mobile: 520,
    tablet: 768,
    desktop: 769,
  })
  const messagePopupOpen = ref(false)
  const messagePopupContent = ref({
    title: 'Заявка успешно отправлена',
    text: 'Мы расмотрим вашу&nbsp;заявку в&nbsp;течении 3&nbsp;дней и&nbsp;уведомим вас&nbsp;о&nbsp;результате.'
  })
  
  const isMobile = breakpoints.smaller('tablet')
  const isTablet = breakpoints.between('mobile', 'desktop')
  const isDesktop = breakpoints.greater('desktop')

  const profileStore = useProfile();

  const openMessagePopup = (content) => {
    if (content) {
      messagePopupContent.value = content
    } else {
      messagePopupContent.value = {
        title: 'Заявка успешно отправлена',
        text: 'Мы расмотрим вашу&nbsp;заявку в&nbsp;течении 3&nbsp;дней и&nbsp;уведомим вас&nbsp;о&nbsp;результате.'
      }
    }
    messagePopupOpen.value = true
  }

  const closeMessagePopup = () => {
    messagePopupOpen.value = false
  }

  return {
    isMobile,
    isDesktop,
    isTablet,

    messagePopupOpen,
    messagePopupContent,
    openMessagePopup,
    closeMessagePopup
  }
})
