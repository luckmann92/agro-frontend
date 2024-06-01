<template>
	<!-- <div :class="['code-field']">
		<template v-for="i in codeLength" :key="i">
      <input 
        type="text"
        class="code-field__input"
        :name="'code' + i" 
        :value="codeArr[i - 1] != null ? codeArr[i - 1] : 0" 
        :disabled="codeArr.length < i - 1"
        :autofocus="i == 1"
        placeholder="0"
        maxlength="1"
        :ref="'code' + i"
        @keydown="type($event, i)"
        @mousemove.prevent.stop
        @keydown.arrow-right.prevent="goto(i + 1)"
        @keydown.arrow-left.prevent="goto(i - 1)"
        @paste.prevent="paste($event)"
      />
    </template>
	</div> -->

  <div class="code-field">
    <input
      type="text"
      :name="`code0`"
      class="code-field__input"
      placeholder="0"
      maxlength="1"
      :autofocus="true"
      v-model="pinValue[0]"
      @input="handleInput(0)"
    >
      <!-- @focus="focusNext(0)"
      @blur="focusPrevious(0)" -->
    <input
      type="text"
      :name="`code1`"
      class="code-field__input"
      placeholder="0"
      maxlength="1"
      v-model="pinValue[1]"
      @input="handleInput(1)"
    >
      <!-- @focus="focusNext(1)"
      @blur="focusPrevious(1)" -->
    <input
      type="text"
      :name="`code2`"
      class="code-field__input"
      placeholder="0"
      maxlength="1"
      v-model="pinValue[2]"
      @input="handleInput(2)"
    >
      <!-- @focus="focusNext(2)"
      @blur="focusPrevious(2)" -->
    <input
      type="text"
      :name="`code3`"
      class="code-field__input"
      placeholder="0"
      maxlength="1"
      v-model="pinValue[3]"
      @input="handleInput(3)"
    >
      <!-- @focus="focusNext(3)"
      @blur="focusPrevious(3)" -->
    <!-- <div class="code-field__dots">
      <span v-for="i in 4" :key="i" :class="['code-field__dot', { 'code-field__dot--filled': pinValue[i - 1] !== '' }]"></span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'UFieldCode',
  data: () => ({
    length: 4,
  }),
  // props: {
	// 	codeLength: {
  //     type: Number,
  //     required: false,
  //     default: () => 4,
  //   }
  // },
  // setup(props, { emit }) {
  //   let codeArr = ref([])

  //   const paste = (e) => {
  //     let pasted = e.clipboardData.getData("text")
  //     pasted = pasted.replace(/\D/g, "")
  //     pasted = pasted.substring(0, props.codeLength)
  //     if (pasted) {
  //       codeArr.value = pasted.split("")
  //       emit('update', codeArr.value.join(""))
  //     }
  //   }
  //   const type = (e, index) => {
  //     console.log('type:index', index)
  //     if (e.ctrlKey && e.key == 'v') {
  //       console.log('ctrl-v')
  //     } else if (e.keyCode == 8) {
  //       e.stopPropagation()
  //       e.preventDefault()
  //       codeArr.value[index - 1] = 0
  //     } else {
  //       let key = e.key.replace(/\D/g, "")
  //       if (key != "") {
  //         console.log(key)
  //         codeArr.value[index - 1] = key
  //       }
  //     }
  //     goto(index + 1)
  //     emit('update', codeArr.value.join(""))
  //   }
  //   const goto = (n) => {
  //     console.log('goto:n', n);
  //     if (!n || n > props.codeLength) {
  //       // n = 1
  //       return
  //     }
  //     let el = document.querySelector(`input[name=code${n}]`)
  //     console.log('el', el.name)
  //     el.focus()
  //   }
  //   // const check = () => {
  //   //   if (codeArr.value.join("") == this.correctPin) {
  //   //     feedback.innerHTML = "Correct!"
  //   //   } else {
  //   //     feedback.innerHTML = "Wrong!"
  //   //   }
  //   // }

  //   return {
  //     codeArr,
  //     paste,
  //     type,
  //     goto
  //   }
	// }
}
</script>
<script setup>
import {ref, computed} from "vue";
const pinValue = ref(['', '', '', '']);

const handleInput = (index) => {
  // Allow only numeric input
  console.log("index", index, typeof index);
  pinValue.value[index] = pinValue.value[index].replace(/[^0-9]/g, '');

  // Automatically focus the next input if the current one is filled
  if (pinValue.value[index].length === 1) {
    focusNext(index);
  }
};

const focusNext = (index) => {
  if (index < 3) {
    document.querySelectorAll('.code-field__input')[index + 1].focus();
  }
};

const focusPrevious = (index) => {
  if (index > 0) {
    document.querySelectorAll('.code-field__input')[index - 1].focus();
  }
};

const isPinValid = computed(() => pinValue.value.every(val => {
  
  console.log('pinValue', pinValue.value);
  console.log('every', val);
  return val !== ''
}));

defineProps({
  pinValid: {
    type: Function,
    default: null
  }
});

defineEmits(['pinValid']);

if (isPinValid.value) {
  console.log('pinValue.value', pinValue.value);
  emit('pinValid', pinValue.value.join(''));
}
</script>

<style scoped lang="scss">

</style>