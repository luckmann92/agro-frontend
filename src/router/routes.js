const UI = () => import(/* webpackChunkName: "ui" */'../pages/UI')
const Index = () => import(/* webpackChunkName: "index-page" */'../pages/Index')
const IndexDetail = () => import(/* webpackChunkName: "competition-detail-page" */'../pages/IndexDetail')
const Auth = () => import(/* webpackChunkName: "auth-page" */'../pages/Auth')
const UserApplicationPage = () => import(/* webpackChunkName: "user-application-page" */'../pages/UserApplicationPage')
const UserCompetitionPage = () => import(/* webpackChunkName: "user-сompetition-page" */'../pages/UserCompetitionPage')
const UserCompetitionDetailPage = () => import(/* webpackChunkName: "user-сompetition-detail-page" */'../pages/UserCompetitionDetailPage')
// const UserCompetitionDetailRaitingPage = () => import(/* webpackChunkName: "user-сompetition-detail-raiting-page" */'../pages/UserCompetitionDetailRaitingPage')
const UserCompetitionNewPage = () => import(/* webpackChunkName: "user-сompetition-new-page" */'../pages/UserCompetitionNewPage')
const UserEstatePage = () => import(/* webpackChunkName: "user-estate-page" */'../pages/UserEstatePage')
const UserEstateNewPage = () => import(/* webpackChunkName: "user-estate-new-page" */'../pages/UserEstateNewPage')

const routes = [
    {
        path: '/ui',
        name: 'UI',
        meta: {
            requiresAuth: true,
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
            layout: 'AuthLayout',
            requiresAuth: false,
            title: 'Личный кабинет | АГРО'
        },
        component: Auth,
    },
    {
        path: '/applications',
        name: 'UserApplicationPage',
        meta: {
            layout: 'DefaultLayout',
            requiresAuth: true,
            title: 'Заявки кандидатов | АГРО'
        },
        component: UserApplicationPage,
    },
    {
        path: '/competition',
        name: 'UserCompetitionPage',
        meta: {
            layout: 'DefaultLayout',
            requiresAuth: true,
            title: 'Конкурсы | АГРО'
        },
        component: UserCompetitionPage,
    },
    {
        path: '/competition/:id',
        name: 'UserCompetitionDetailPage',
        meta: {
            layout: 'DefaultLayout',
            requiresAuth: true,
            title: 'Конкурс | АГРО'
        },
        component: UserCompetitionDetailPage,
    },
    {
        path: '/competition/rating/:id',
        name: 'UserCompetitionDetailRaitingPage',
        meta: {
            layout: 'DefaultLayout',
            requiresAuth: true,
            title: 'Проставить оценки | АГРО',
            edit: true
        },
        component: UserCompetitionDetailPage,
    },
    {
        path: '/competition/new',
        name: 'UserCompetitionNewPage',
        meta: {
            layout: 'DefaultLayout',
            requiresAuth: true,
            title: 'Конкурс | АГРО'
        },
        component: UserCompetitionNewPage,
    },
    {
        path: '/estate',
        name: 'UserEstatePage',
        meta: {
            layout: 'DefaultLayout',
            requiresAuth: true,
            title: 'Участки | АГРО'
        },
        component: UserEstatePage,
    },
    {
        path: '/estate/new',
        name: 'UserEstateNewPage',
        meta: {
            layout: 'DefaultLayout',
            requiresAuth: true,
            title: 'Добавление участка | АГРО'
        },
        component: UserEstateNewPage,
    },
]

export default routes


