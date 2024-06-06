<template>
  <application-list :list="appList" />
</template>

<script>
import ApplicationList from '@/components/Application/ApplicationList'

export default {
  name: 'UserApplicationPage',
  components: {
    ApplicationList
  },
  data() {
    return {
      appList: [
        {
          ID: 56,
          USER_FULL_NAME: 'Асанов Усен Асанович',
          USER_POSITION: 'Семхоз',
          DOCS: [
            {
              ID: 34,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Удостоверяющих личность заявителя',
            },
            {
              ID: 35,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Информацию при наличии используемых земельных участков',
            },
            {
              ID: 36,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Справка об отсутствии задолженностей',
            },
            {
              ID: 37,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Информацию о материально-технической базе',
            },
            {
              ID: 38,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Наличие соответствующего статуса семенного или  племенного хозяйства',
            },
            {
              ID: 39,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Информацию реализации одного из продуктов продовольственной безопасности;',
            },
            {
              ID: 40,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Информацию о необходимом кадровом обеспечении',
            },
            {
              ID: 41,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Для племенных хозяйств дополнительно',
            },
            {
              ID: 42,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Для семеноводческих хозяйств дополнительно',
            }
          ]
        },
        {
          ID: 57,
          USER_FULL_NAME: 'Асанов Усен Асанович',
          USER_POSITION: 'Семхоз',
          DOCS: [
            {
              ID: 43,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Удостоверяющих личность заявителя',
            },
            {
              ID: 44,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Информацию при наличии используемых земельных участков',
            },
            {
              ID: 45,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Справка об отсутствии задолженностей',
            },
            {
              ID: 46,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Информацию о материально-технической базе',
            },
            {
              ID: 47,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Наличие соответствующего статуса семенного или  племенного хозяйства',
            },
            {
              ID: 48,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Информацию реализации одного из продуктов продовольственной безопасности;',
            },
            {
              ID: 49,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Информацию о необходимом кадровом обеспечении',
            },
            {
              ID: 50,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Для племенных хозяйств дополнительно',
            },
            {
              ID: 51,
              FILE_SRC: '/docs/Document.pdf',
              FILE_NAME: 'Для семеноводческих хозяйств дополнительно',
            }
          ]
        },
      ]
    }
  },

}
</script>

<style lang="scss" scoped>

</style>