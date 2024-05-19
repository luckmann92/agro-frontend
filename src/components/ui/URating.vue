<template>
  <div class="rating">
    <label
      v-for="rating in ratings"
      :key="rating"
      :class="[
        'rating__item', 
        {
          'is-selected': ((value >= rating) && value != null), 
          'is-disabled': !isEdit && value != rating}
      ]"
      @click="setRating(rating)"
      @mouseover="starOver(rating)"
      @mouseout="starOut"
    >
      <input
        class="rating__checkbox"
        type="radio"
        :name="name"
        :value="rating"
        :disabled="!isEdit"
      />
        <!-- v-model="value" -->
        <!-- @change="$emit('update:modelValue', $event.target.value)" -->
      {{ rating }}
    </label>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'URating',
  props: {
    modelValue: [String, Number],
    value: [String, Number, null],
    name: String,
    id: String,
    isEdit: Boolean,
    required: Boolean
  },
  setup(props, {emit}) {
    const temp_value = ref(null)
    const ratings = [1, 2, 3, 4, 5]

    const starOver = (index) => {
      if (props.isEdit) {
        props.temp_value = props.value;
        return props.value = index;
      }
    }

    const starOut = () => {
      if (props.isEdit) {
        return props.value = props.temp_value;
      }
    }

    const setRating = (val) => {
      console.log('val', val);
      if (props.isEdit) {
        // emit('update:modelValue', val)
        props.temp_value = val;
        return props.value = val;
      }
    }

    return {
      temp_value,
      ratings,
      starOver,
      starOut,
      setRating
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/styles.scss"/>
<style lang="scss" scoped>

</style>