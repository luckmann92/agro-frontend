<template>
  <div :class="['field', { 'field--disabled': disabled, 'field--error': error }]">
    <span
      :id="`label-${id}`"
      :for="id"
      class="field__label"
    >
      {{ label }}
    </span>
    <div
      :class="['select', {'select--loading': loading}]"
      ref="selectNode"
    >
      <div
        ref="outputNode"
        class="select__output"
        @click="toggleDropdown"
      >
        <span class="select__selected-value">
          {{ outputValue }}
        </span>
        <span :class="['select__arrow', {'select__arrow--up': isOpened}]"/>
      </div>

      <transition name="fade" v-if="!disabled">
        <div class="select__options-container" v-show="isOpened" ref="optionsNode">
          <ul class="select__options-list">
            <li 
              class="select__options-item" 
              v-for="op in options" 
              :key="op.key"
              @click="({target}) => onSelect(op, target)"
            >
              {{ op.value }}
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {ref, computed} from "vue";
import useClickOutside from "@/hooks/useClickOutside";

let lastSelected = null;
let hasCloseListener = false;

const MAX_MENU_HEIGHT = 300;
const AVG_OPTION_HEIGHT = 50;

export default {
  name: 'UFieldSelect',
  props: {
		options: {
      type: Array,
      required: true,
      // validator: (v) => v.every(o => ['key', 'value'].every(k => o.hasOwnProperty(k)))
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: "Text"
    },
    name: {
      type: String,
      required: false,
      default: "Text field"
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
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  setup(props, { emit }) {
    const selectNode = ref(null);
    const outputNode = ref(null);
    const optionsNode = ref(null);

    let isOpened = ref(false);
    useClickOutside(selectNode, () => isOpened.value = false);
    let initialValue = null;
    let selectedOption = props.options.find(opt => opt.key === props.value)
    if (props.value !== null && selectedOption !== null) {
      initialValue = selectedOption;
    }
    let selected = ref(initialValue);

    let outputValue = computed(() => {
      let output = props.placeholder;
      if (selected.value !== null) {
        output = selected.value.value;
      }

      return output;
    });

    const toggleDropdown = () => {
      if (props.disabled) return;

      let element = outputNode.value;
      let opts = optionsNode.value;
      if (!isOpened.value) {
        const menuHeight = Math.min(MAX_MENU_HEIGHT, (props.options.length * AVG_OPTION_HEIGHT));
        const instOffsetWithMenu = element.getBoundingClientRect().bottom + menuHeight;
        if (instOffsetWithMenu >= window.innerHeight) {
          opts.classList.add(`select__options-container--up`);
          opts.classList.remove(`select__options-container--down`);
        } else {
          opts.classList.add(`select__options-container--down`);
          opts.classList.remove(`select__options-container--up`);
        }
      }

      isOpened.value = !isOpened.value;

      if (element.style[0] === '--input-border') {
        element.style.removeProperty('--input-border');
      } else {
        element.style.setProperty('--input-border', '1px solid rgba(66, 173, 245, 0.6)');
      }
    };

    const onSelect = (option, target) => {
      if (toRaw(selected) === option) {
        selected.value = null;
        target.classList.remove('select__options-item--selected');
        return;
      }
      selected.value = option;
      emit('update:value', option.key);
      lastSelected && lastSelected.classList.remove('select__options-item--selected')
      target.classList.add('select__options-item--selected');
      lastSelected = target;
      isOpened.value = false;
    }

    return {
      isOpened, 
      outputValue, 
      selected, 
      toggleDropdown, 
      onSelect, 
      selectNode, 
      outputNode, 
      optionsNode
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