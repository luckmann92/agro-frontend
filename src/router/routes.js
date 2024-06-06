const UI = () => import(/* webpackChunkName: "ui" */'../pages/UI')
const Index = () => import(/* webpackChunkName: "index-page" */'../pages/Index')
const IndexDetail = () => import(/* webpackChunkName: "competition-detail-page" */'../pages/IndexDetail')
const Auth = () => import(/* webpackChunkName: "auth-page" */'../pages/Auth')
const UserApplicationPage = () => import(/* webpackChunkName: "user-application-page" */'../pages/UserApplicationPage')
const UserCompetitionPage = () => import(/* webpackChunkName: "user-сompetition-page" */'../pages/UserCompetitionPage')
const UserCompetitionDetailPage = () => import(/* webpackChunkName: "user-сompetition-detail-page" */'../pages/UserCompetitionDetailPage')
const UserCompetitionNewPage = () => import(/* webpackChunkName: "user-сompetition-new-page" */'../pages/UserCompetitionNewPage')
const UserCompetitionApplayPage = () => import(/* webpackChunkName: "user-сompetition-applay-page" */'../pages/UserCompetitionApplayPage')
const UserDocumentsPage = () => import(/* webpackChunkName: "user-documents-page" */'../pages/UserDocumentsPage')
const UserEstatePage = () => import(/* webpackChunkName: "user-estate-page" */'../pages/UserEstatePage')
const UserEstateNewPage = () => import(/* webpackChunkName: "user-estate-new-page" */'../pages/UserEstateNewPage')

const routes = [
    {
        path: '/ui',
        name: 'UI',
        meta: {
            requiresAuth: false,
            layout: 'DefaultLayout',
            sitemap: { ignoreRoute: true },
        },
        component: UI
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            requiresAuth: false,
            layout: 'DefaultLayout',
            title: 'Главная | АГРО',
        },
        component: Index
    },
    {
        path: '/:id',
        name: 'CompetitionDetailPage',
        meta: {
            requiresAuth: false,
            layout: 'DefaultLayout',
            title: 'Конкурсы | АГРО',
        },
        component: IndexDetail
    },
    {
        path: '/auth',
        name: 'Auth',
        meta: {
            requiresAuth: false,
            layout: 'AuthLayout',
            title: 'Личный кабинет | АГРО'
        },
        component: Auth,
    },
    {
        path: '/applications',
        name: 'UserApplicationPage',
        meta: {
            requiresAuth: true,
            layout: 'DefaultLayout',
            title: 'Заявки кандидатов | АГРО'
        },
        component: UserApplicationPage,
    },
    {
        path: '/candidates',
        name: 'UserCandidatesPage',
        meta: {
            requiresAuth: true,
            layout: 'DefaultLayout',
            title: 'Кандидаты | АГРО'
        },
        component: UserApplicationPage,
    },
    {
        path: '/competition',
        name: 'UserCompetitionPage',
        meta: {
            requiresAuth: true,
            layout: 'DefaultLayout',
            title: 'Конкурсы | АГРО'
        },
        component: UserCompetitionPage,
    },
    {
        path: '/k_competition',
        name: 'UserKCompetitionPage',
        meta: {
            requiresAuth: true,
            layout: 'DefaultLayout',
            title: 'Конкурсы | АГРО'
        },
        component: UserCompetitionPage,
    },
    {
        path: '/r_competition',
        name: 'UserRCompetitionPage',
        meta: {
            requiresAuth: true,
            layout: 'DefaultLayout',
            title: 'Конкурсы | АГРО'
        },
        component: UserCompetitionPage,
    },
    {
        path: '/competition/:id',
        name: 'UserCompetitionDetailPage',
        meta: {
            requiresAuth: true,
            layout: 'DefaultLayout',
            title: 'Конкурс | АГРО'
        },
        component: UserCompetitionDetailPage,
    },
    {
        path: '/competition/rating/:id',
        name: 'UserCompetitionDetailRaitingPage',
        meta: {
            requiresAuth: true,
            layout: 'DefaultLayout',
            title: 'Проставить оценки | АГРО',
            edit: true
        },
        component: UserCompetitionDetailPage,
    },
    {
        path: '/k_competition/applay-for/:id',
        name: 'UserCompetitionApplayPage',
        meta: {
            requiresAuth: true,
            layout: 'DefaultLayout',
            title: 'Подать заявку | АГРО',
            edit: true
        },
        component: UserCompetitionApplayPage,
    },
    {
        path: '/competition/new',
        name: 'UserCompetitionNewPage',
        meta: {
            requiresAuth: true,
            layout: 'DefaultLayout',
            title: 'Конкурс | АГРО'
        },
        component: UserCompetitionNewPage,
    },
    {
        path: '/documents',
        name: 'UserDocumentsPage',
        meta: {
            requiresAuth: true,
            layout: 'DefaultLayout',
            title: 'Мои документы | АГРО'
        },
        component: UserDocumentsPage,
    },
    {
        path: '/estate',
        name: 'UserEstatePage',
        meta: {
            requiresAuth: true,
            layout: 'DefaultLayout',
            title: 'Участки | АГРО'
        },
        component: UserEstatePage,
    },
    {
        path: '/estate/new',
        name: 'UserEstateNewPage',
        meta: {
            requiresAuth: true,
            layout: 'DefaultLayout',
            title: 'Добавление участка | АГРО'
        },
        component: UserEstateNewPage,
    },
]

export default routes


