import {ref, computed} from "vue"
import {defineStore} from 'pinia'

export const useStore = defineStore('main', () => {
  const isOpen = ref(false)
  const content = ref({
    title: 'Заявка успешно отправлена',
    text: 'Мы расмотрим вашу&nbsp;заявку в&nbsp;течении 3&nbsp;дней и&nbsp;уведомим вас&nbsp;о&nbsp;результате.'
  })

  const open = (cntnt) => {
    if (cntnt?.title || cntnt?.text) {
      content.value = cntnt
    } else {
      content.value = {
        title: 'Заявка успешно отправлена',
        text: 'Мы расмотрим вашу&nbsp;заявку в&nbsp;течении 3&nbsp;дней и&nbsp;уведомим вас&nbsp;о&nbsp;результате.'
      }
    }
    isOpen.value = true
  }

  const close = () => {
    messagePopupOpen.value = false
  }

  return {
    isOpen,
    content,
    open,
    close
  }
})
