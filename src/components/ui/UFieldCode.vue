<template>
	<div :class="['code-field']">
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
	</div>
</template>

<script>
import {ref, computed} from "vue";

export default {
  name: 'UFieldCode',
  data: () => ({
    length: 4,
  }),
  props: {
		modelValue: {
      type: [String, Number],
      required: false,
      default: '',
    },
		codeLength: {
      type: Number,
      required: false,
      default: () => 4,
    }
  },
  setup(props, { emit }) {
    let codeArr = ref([])

    const paste = (e) => {
      let pasted = e.clipboardData.getData("text")
      pasted = pasted.replace(/\D/g, "")
      pasted = pasted.substring(0, props.codeLength)
      if (pasted) {
        codeArr.value = pasted.split("")
        emit('update', codeArr.value.join(""))
      }
    }
    const type = (e, index) => {
      console.log('type:index', index)
      if (e.ctrlKey && e.key == 'v') {
        console.log('ctrl-v')
      } else if (e.keyCode == 8) {
        e.stopPropagation()
        e.preventDefault()
        codeArr.value[index - 1] = 0
      } else {
        let key = e.key.replace(/\D/g, "")
        if (key != "") {
          console.log(key)
          codeArr.value[index - 1] = key
        }
      }
      goto(index + 1)
      emit('update', codeArr.value.join(""))
    }
    const goto = (n) => {
      console.log('goto:n', n);
      if (!n || n > props.codeLength) {
        // n = 1
        return
      }
      let el = document.querySelector(`input[name=code${n}]`)
      console.log('el', el.name)
      el.focus()
    }
    // const check = () => {
    //   if (codeArr.value.join("") == this.correctPin) {
    //     feedback.innerHTML = "Correct!"
    //   } else {
    //     feedback.innerHTML = "Wrong!"
    //   }
    // }

    return {
      codeArr,
      paste,
      type,
      goto
    }
	}
}
</script>

<style scoped lang="scss">

</style>