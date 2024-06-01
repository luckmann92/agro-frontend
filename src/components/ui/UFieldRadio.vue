<template>
  <div :class="['field', { 'field--disabled': disabled, 'field--error': error }]">
    <span
      :id="`label-${id}`"
      :for="id"
      class="field__label"
    >
      {{ label }}
    </span>
    <div class="radio-list">
      <div class="radio-item" v-for="option in options" :key="option.key">
        <label>
          <input 
            type="radio" 
            :value="option.key" 
            v-model="radioValue" 
          />
          {{ option.value }}
        </label>
      </div>
    </div>

  </div>
</template>

<script>
import {ref, computed} from "vue";

export default {
  name: 'UFieldRadio',
  props: {
		options: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    name: {
      type: String,
      required: false,
      default: ""
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    value: {
      type: [Number, String],
      required: false,
      default: '',
    }
  },
  setup(props, { emit }) {
    let radioValue = ref(null);
    // const getPlaceholder = computed(() => (!slots.default || focusWithin.value) ? props.placeholder : ' ');

    const updateValue = (e) => {
      emit('update:modelValue', e.target.value)
    }

    const componentTag = computed(() => {
      return props.textarea ? 'textarea' : 'input'
    })


    return {
      // getPlaceholder,
      radioValue,
      updateValue
    }
  },
}
</script>

<style scoped lang="scss">
.select {
  width: 100%;
  position: relative;

  &__output {
    padding: 8px 17px;
    display: flex;
    flex-direction: column;
    // background: var(--white);
    // border: var(--input-border);
    // border-radius: var(--input-border-radius);
    // transition: background-color var(--transition-time), border var(--transition-time);
    cursor: pointer;

    &:hover {
      // background: var(--input-hover-background);
      // border: var(--input-border-hover);
    }
  }

  &--disabled &__output {
    // background: var(--text-field);
    border: 1px solid rgba(150, 189, 215, 0.1);
    cursor: default;
  }

  &--loading {
    // @include loader;
    border-radius: 10px;
    overflow: hidden;
  }

  &__name {
    // @include font(10px, 12px);
    // color: var(--input-label);
  }

  &--disabled &__name {
    // color: var(--input-disabled-label);
  }

  &__selected-value {
    // @include font(16px, 19px);
    // color: var(--focus-text);
  }

  // &__arrow {
  //   position: absolute;
  //   top: 50%;
  //   right: 15px;
  //   transform: translateY(-50%);
  // }

  // &__options-container {
  //   position: absolute;
  //   left: 5px;
  //   right: 5px;

  //   // background: var(--white);
  //   box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.09);
  //   // border-radius: var(--input-border-radius);
  //   z-index: 1000;
  //   overflow: hidden;

  //   &--up {
  //     bottom: calc(100% + 15px);
  //     top: auto;
  //   }
  //   &--down {
  //     top: calc(100% + 10px);
  //     bottom: auto;
  //   }

  // }

  // &__options-list {
  //   list-style-type: none;
  //   padding: 0;
  //   margin: 0;
  //   display: flex;
  //   flex-direction: column;
  //   max-height: 300px;
  //   overflow: auto;
  // }

  // &__options-item {
  //   padding: 20px 17px;
  //   // transition: background-color var(--transition-time);
  //   cursor: pointer;

  //   &:hover, &--selected {
  //     // background-color: var(--light-grey-4);
  //   }
  // }
}

.fade {
  &-enter-active,
  &-leave-active {
    // transition: opacity var(--transition-time);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>