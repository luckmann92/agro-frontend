<template>
	<div :class="['field', { 'field--disabled': disabled, 'field--labeled': $slots.default, 'field--error': error }]">
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
.field {
  display: flex;
  flex-direction: column;

  &__label {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 18px;
    padding: 0 12px;
    color: #6A7686;
  }
  &__input {
    margin-bottom: 32px;
    font-size: 16px;
    line-height: 20px;
    border: 1px solid #D4D7DC;
    border-radius: 8px;
    padding: 14px 12px;
    width: 328px;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #6A7686;
    }
  }

}
</style>