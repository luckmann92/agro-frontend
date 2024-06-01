<template>
	<component
    :is="computeComponent"
		:class="['btn', computeVariant, { 'btn--disabled': disabled, 'btn--loading': loading }]" 
    :to="href"
    :href="href"
		:disabled="disabled"
	>
    <span v-if="loading" class="loader" />
    <span v-else-if="icon" :class="['icon', `icon--${icon}`]" />
    <!-- <span v-if="variant === 'wait'" class="loader" /> -->
		<slot />
	</component>
</template>

<script>
import { computed } from "vue";

export default {
  name: 'UButton',
  props: {
    href: {
      type: String,
      required: false
    },
    variant: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
		disabled: {
      type: Boolean,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
	},
	setup(props) {
    const computeComponent = computed(() => {
      return props.href ? 'router-link' : 'button'
    })
    const computeVariant = computed(() => {
      return props.variant ? `btn--${props.variant}` : ''
    })

    return {
      computeComponent,
			computeVariant
    }
  }
}
</script>

<style scoped lang="scss">

</style>
