<template>
	<div class="doc-list">
		<template v-for="(doc, index) in docs" :key="doc.ID">
			<transition name="fade-item">
				<div v-if="(!showAll && index < showNum) || showAll" class="doc-item">
					<div class="fb fb--ai-c fb--jc-sb">
						<p class="doc-name">{{doc?.FILE_NAME}}</p>
						<a :href="doc?.FILE_SRC || '#'" target="_blank" class="btn">Читать</a>
					</div>
				</div>
			</transition>
		</template>
	</div>

	<div v-if="docs?.length >= showNum" class="btn-wrap btn-wrap--br-top">
		<button :class="['btn btn--detail', { 'show-detail': showAll }]" @click="toggleShowAll">
			<span class="icon" />
			{{ buttonText }}
		</button>

	</div>
</template>

<script>
import {computed, ref} from "vue";

export default {
	name: 'UDocList',
	props: {
		docs: Array,
		showNum: {
			type: Number, 
			default: 2 
		}
	},
	setup(props) {
    const showAll = ref(false)

    const toggleShowAll = () => {
      showAll.value = !showAll.value
    }

		const buttonText = computed(() => {
			if (showAll.value) {
				return 'Закрыть'
			}
			return props.showNum > 0 ? 'Показать все документы' : 'Показать документы'
		})

    return {
      showAll,
      toggleShowAll,
			buttonText
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-item-enter-active,
.fade-item-leave-active {
  transition: opacity 0.5s ease;
}

.fade-item-enter-from,
.fade-item-leave-to {
  opacity: 0;
}
</style>