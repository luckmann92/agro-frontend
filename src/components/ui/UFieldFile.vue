<template>
  <div :class="['field field-file', { 'field--disabled': disabled, 'field--error': error }]">
		<span
      :id="`label-${id}`"
      :for="id"
      class="field__label"
      v-html="label"
    />
    <label
      :class="'field-file__input'"
      :for="uid"
      @drop.prevent="dropFiles($event.dataTransfer.files)"
      @dragover.prevent="filesDrag = true"
      @dragleave.prevent="filesDrag = false"
    >
      <span class="files__upload">Прикрепить файл</span>
      <input 
        type="file" 
        :id="uid" 
        :accept="accept" 
        :multiple="maxFiles > 1"
        @change="onChange"
      />
    </label>
	</div>
</template>

<script>
import {ref, computed, getCurrentInstance} from "vue";
import useEventListener from "@/hooks/useEventListener";

export default {
  name: 'UFieldFile',
  props: {
    label: {
      type: String,
      required: false,
      default: ''
    },
		choiceFiles: {
      type: Array,
      required: true
    },
    accept: {
      type: String,
      required: false,
      default: 'image/*'
    },
    uploadedFiles: {
      type: Array,
      required: false,
      default: () => [],
    },
    maxFiles: {
      type: Number,
      required: false,
      default: 1
    }
  },
  setup(props, { emit }) {
    const prevDef = e => e.preventDefault()
    // const informer = useNotificationPopup();
    useEventListener(window, 'dragover', prevDef)
    useEventListener(window, 'drop', prevDef)

    const filesDrag = ref(false)

    const upload = (files) => {
      // emit('filesUpload', fileArr);
    }

    const dropFiles = (files) => {
      filesDrag.value = false
      upload(files)
    }
    const onChange = (e) => {
      upload(e.target.files)
    }

    // const classFiles = computed(() => ['files', {'files--not-empty': props.choiceFiles.length > 0 || props.uploadedFiles.length > 0}, {'files--draggable': filesDrag.value}])

    const uid = computed(() => getCurrentInstance().uid)

    const isImage = (extension) => extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'svg'
    const getExtension = (fileName) => fileName.split('.').pop().toLowerCase();

    const deleteImage = (imgId) => {
      emit(
        props.uploadedFiles.findIndex(file => file.ID === imgId) > -1
          ? 'imageDetached'
          : 'deleteImage',
        imgId
      );
    }

    return {
      // classFiles,
      filesDrag,
      dropFiles,
      uid,
      deleteImage,
      onChange,
    }
	}
}
</script>

<style scoped lang="scss">
.field {
  // display: flex;
  // flex-direction: column;

  // &__label {
  //   margin-bottom: 8px;
  //   font-size: 14px;
  //   line-height: 18px;
  //   padding: 0 12px;
  //   color: #6A7686;
  // }
  // &__input {
  //   margin-bottom: 32px;
  //   font-size: 16px;
  //   line-height: 20px;
  //   border: 1px solid #D4D7DC;
  //   border-radius: 8px;
  //   padding: 14px 12px;
  //   width: 328px;

  //   &:focus {
  //     outline: none;
  //   }
  //   &::placeholder {
  //     color: #6A7686;
  //   }
  // }

}
</style>