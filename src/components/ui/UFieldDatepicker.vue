<template>
	<div :class="['field', { 'field--disabled': disabled, 'field--error': error }]">
		<div
      class="field__label"
      v-html="label"
    />
		<VueDatePicker 
      :model-value="dateValue" 
      :position="'left'"
      :locale="'ru'"
      :format="'dd.MM.yyyy'"
      :enable-time-picker="false"
      @update:model-value="handleDate"
    />
    <slot />
	</div>
</template>

<script>
import {ref, computed} from "vue"
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: 'UFieldDatepicker',
  components: { VueDatePicker },
  props: {
		dateValue: {
      type: String,
      required: false,
      default: null,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    error: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      required: false,
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
    labelYear: {
      type: String,
      required: false,
      default: '',
    },
		maxLength: String,
  },
  emits: [
    'update'
  ],
  setup(props, { emit }) {
    // const dateValue = ref('')

    const handleDate = (val) => {
      // console.log('handleDate:val', val.toLocaleDateString("ru"));
      const date = val ? val.toLocaleDateString("ru") : ''
      emit('update', date)
    }

    return {
      // dateValue,
      handleDate
    }
	}
}
</script>

<style scoped lang="scss">

</style>