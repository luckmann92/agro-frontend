<template>
  <div class="application-item">
    <u-card>
      <div class="top">
        <div class="txt-block">
          <p class="txt-mdl">{{itemData?.USER_FULL_NAME}}</p>
          <p class="txt-sml">{{itemData?.USER_POSITION}}</p>
        </div>
        <div class="btn-wrap">
          <u-button>Принять</u-button>
          <u-button>Отказать</u-button>
        </div>
      </div>

      <u-doc-list :docs="itemData?.DOCS" :showNum="4" />

      <!-- <div class="doc-list">
        <template v-for="(doc, index) in itemData?.DOCS" :key="doc.ID">
          <transition name="fade-item">
            <div v-if="(!showAll && index < 3) || showAll" class="doc-item">
              <div class="fb fb--ai-c fb--jc-sb">
                <p class="doc-name">{{doc?.FILE_NAME}}</p>
                <a :href="doc?.FILE_SRC || '#'" target="_blank" class="btn">Читать</a>
              </div>
            </div>
          </transition>
        </template>
      </div>

      <button :class="['btn btn--detail']" @click="toggleShowAll">
        <span class="icon" />
        {{ showAll ? 'Закрыть' : 'Показать все документы' }}
      </button> -->
    </u-card>
  </div>
</template>

<script>
// import UButton from "../ui/UButton";
import {ref} from "vue";

export default {
  name: 'ApplicationItem',
  components: {
    // UButton
  },
  props: {
    itemData: {
      type: Object,
      required: true,
      default: () => ({
        // ID: 323,
        // DATE_FROM: '24.08.24',
        // DATE_ANNONCE: '24.10.24',
        // DATE_EVENT: '24.11.24',
        // PLACE: 'Чуйская',
        // NAME: 'Орашаемый'
      })
    }
  },
  setup() {
    const showAll = ref(false)

    const toggleShowAll = () => {
      showAll.value = !showAll.value
    }

    return {
      showAll,
      toggleShowAll
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/styles.scss"/>
<style scoped lang="scss">

.fade-item-enter-active,
.fade-item-leave-active {
  transition: opacity 0.5s ease;
}

.fade-item-enter-from,
.fade-item-leave-to {
  opacity: 0;
}
</style>
