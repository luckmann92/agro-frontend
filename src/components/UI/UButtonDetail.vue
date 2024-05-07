<template>
  <button :class="['btn btn--detail']" >
    <span class="icon" />
    <slot />
  </button>
</template>

<script>

export default {
  name: 'UButtonDetail',
  props: {
		isShow: {
      type: Boolean,
      required: false,
    },
	}
}
</script>

<style scoped lang="scss">

</style>
