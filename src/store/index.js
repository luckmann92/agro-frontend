import {ref, computed} from "vue";
import {defineStore} from 'pinia'
import {useBreakpoints} from '@vueuse/core'
// import {useProfile} from "./profile";

export const useStore = defineStore('main', () => {
  const breakpoints = useBreakpoints({
    mobile: 520,
    tablet: 768,
    desktop: 769,
  })

  const isMobile = breakpoints.smaller('tablet')
  const isTablet = breakpoints.between('mobile', 'desktop')
  const isDesktop = breakpoints.greater('desktop')

  // const profileStore = useProfile();


  return {
    isMobile,
    isDesktop,
    isTablet,
  }
})
