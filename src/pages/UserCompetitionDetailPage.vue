<template>
  <div class="container">
    <div class="content-top">
      <u-button @click="$router.back()">Вернуться</u-button>
      <u-button @click="$router.back()" variant="dark">Завершить</u-button>
    </div>
    <div class="content">
      <UserCompetitionDetail :detail="CompetitionDetail" />
    </div>
  </div>
</template>

<script>
import UserCompetitionDetail from '@/components/Competition/UserCompetitionDetail'
import {ref} from "vue"
import { useRoute } from 'vue-router'

export default {
  name: 'UserCompetitionDetailPage',
  components: {
    UserCompetitionDetail
  },
  setup() {
    const route = useRoute()
    const isEdit = route.meta.edit
    const CompetitionDetail = ref({
      ID: 323,
      DATE_FROM: '24.08.24',
      DATE_ANNONCE: '24.10.24',
      DATE_EVENT: '24.11.24',
      PLACE: 'Чуйская',
      NAME: 'Орашаемый',
      LAND: {
        AREA: 1000,
        COORDS: ['10 S 055974', '10 S 055974'],
        CADASTRAL_NUMBER: '47:14:1203001:814',
        REGION: 'Чуйская',
        TYPE: 'Орашаемое',
        AREA: '1 000м2',
        COORDS: '10 S 055974, 4282182',
        USE: '',
        ACTUAL_PLACEMENT_LIST: [
          { YEAR: 2023, VALUE: 'Свекла' },
          { YEAR: 2022, VALUE: 'Свекла' },
          { YEAR: 2021, VALUE: 'Люцерна' },
          { YEAR: 2020, VALUE: 'Люцерна' },
        ]
      },
      WINNER: {
        ID: 56,
        USER_FULL_NAME: 'Асанов Усен Асанович',
        USER_POSITION: 'Семхоз',
        ITEMS: [
          {
            ID: 84,
            TEXT: 'План севооборота на предоставляемые земли',
            RATING: 4,
          },
          {
            ID: 85,
            TEXT: 'Использование на предоставляемых землях новых технологий реализации сельскохозяйственной деятельности (капельное орошение, механизация ведения сельскохозяйственной деятельности и т.д.);',
            RATING: 5,
          },
          {
            ID: 86,
            TEXT: 'Опыт работы в сфере сельского хозяйства с конкретными показателями производимой продукции;',
            RATING: 3,
          },
          {
            ID: 87,
            TEXT: 'Наличие материально технического оснащения, для эффективного использования предоставляемых в пользование земель Государственного фонда;',
            RATING: 5,
          },
          {
            ID: 88,
            TEXT: 'Наличие кадрового обеспечения, позволяющего соблюдению технологий выращивания сельскохозяйственных культур',
            RATING: 4,
          },
        ],
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
      OTHER: [
        {
          ID: 57,
          USER_FULL_NAME: 'Джураев Абдулфато Латифович',
          USER_POSITION: 'Семхоз',
          ITEMS: [
            {
              ID: 84,
              TEXT: 'План севооборота на предоставляемые земли',
              RATING: 3,
            },
            {
              ID: 85,
              TEXT: 'Использование на предоставляемых землях новых технологий реализации сельскохозяйственной деятельности (капельное орошение, механизация ведения сельскохозяйственной деятельности и т.д.);',
              RATING: 5,
            },
            {
              ID: 86,
              TEXT: 'Опыт работы в сфере сельского хозяйства с конкретными показателями производимой продукции;',
              RATING: 1,
            },
            {
              ID: 87,
              TEXT: 'Наличие материально технического оснащения, для эффективного использования предоставляемых в пользование земель Государственного фонда;',
              RATING: 5,
            },
            {
              ID: 88,
              TEXT: 'Наличие кадрового обеспечения, позволяющего соблюдению технологий выращивания сельскохозяйственных культур',
              RATING: 4,
            },
          ],
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
          ID: 58,
          USER_FULL_NAME: 'Джураев Абдулфато Латифович',
          USER_POSITION: 'Семхоз',
          ITEMS: [
            {
              ID: 84,
              TEXT: 'План севооборота на предоставляемые земли',
              RATING: 3,
            },
            {
              ID: 85,
              TEXT: 'Использование на предоставляемых землях новых технологий реализации сельскохозяйственной деятельности (капельное орошение, механизация ведения сельскохозяйственной деятельности и т.д.);',
              RATING: 2,
            },
            {
              ID: 86,
              TEXT: 'Опыт работы в сфере сельского хозяйства с конкретными показателями производимой продукции;',
              RATING: 2,
            },
            {
              ID: 87,
              TEXT: 'Наличие материально технического оснащения, для эффективного использования предоставляемых в пользование земель Государственного фонда;',
              RATING: 3,
            },
            {
              ID: 88,
              TEXT: 'Наличие кадрового обеспечения, позволяющего соблюдению технологий выращивания сельскохозяйственных культур',
              RATING: 4,
            },
          ],
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
        }
      ]
    })

    return {
      isEdit,
      CompetitionDetail,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>