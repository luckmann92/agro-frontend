<template>
	<div :class="['field', { 'field--disabled': disabled, 'field--error': error }]">
		<div
      class="field__label"
      v-html="label"
    />
		<MaskInput 
      v-model="phone" 
      mask="+996 (###) ### ###"
      class="field__input"
      :placeholder="placeholder"
      @update:model-value="handlePhone"
    />
      <!-- :formatChars="{
        '0': '[0-9]',
        'a': '[A-Za-z]',
        '*': '[A-Za-z0-9]'
      }" -->
    <slot />
	</div>
</template>

<script>
import {ref, computed} from "vue"
import { MaskInput } from 'vue-3-mask';

export default {
  name: 'UFieldPhone',
  components: { MaskInput },
  props: {
		// value: {
    //   type: String,
    //   required: false,
    //   default: null,
    // },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    error: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
  },
  emits: [
    'update'
  ],
  setup(props, { emit }) {
    const phone = ref('')

    const handlePhone = (val) => {
      console.log('handlePhone:val', val)
      emit('update', val)
    }

    return {
      phone,
      handlePhone
    }
	}
}
</script>

<style scoped lang="scss">

</style>