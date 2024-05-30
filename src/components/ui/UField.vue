<template>
	<div :class="['field', { 'field--disabled': disabled, 'field--error': error }]">
		<label
      :id="`label-${id}`"
      :for="id"
      class="field__label"
    >
      {{ label }}
    </label>
		<input 
      :id="id"
      type="text"
			class="field__input" 
			:disabled="disabled"
			:value="modelValue"
			:placeholder="placeholder"
			@input="updateValue"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
		/>
	</div>
</template>

<script>
import {ref, computed} from "vue";

export default {
  name: 'UField',
  props: {
		modelValue: {
      type: [String, Number],
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
		maxLength: String,
  },
  setup(props, { emit }) {
    let focusWithin = ref(false);
    // const getPlaceholder = computed(() => (!slots.default || focusWithin.value) ? props.placeholder : ' ');

    const updateValue = (e) => {
      emit('update:modelValue', e.target.value)
    }

    const componentTag = computed(() => {
      return props.textarea ? 'textarea' : 'input'
    })


    return {
      // getPlaceholder,
      focusWithin,
      componentTag,
      updateValue
    }
	}
}
</script>

<style scoped lang="scss">

</style>