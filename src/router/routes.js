const UI = () => import(/* webpackChunkName: "ui" */'../pages/UI')
const Index = () => import(/* webpackChunkName: "index-page" */'../pages/Index')
const IndexDetail = () => import(/* webpackChunkName: "competition-detail-page" */'../pages/IndexDetail')
const Auth = () => import(/* webpackChunkName: "auth-page" */'../pages/Auth')
const UserApplicationPage = () => import(/* webpackChunkName: "user-application-page" */'../pages/UserApplicationPage')
const UserCompetitionPage = () => import(/* webpackChunkName: "user-сompetition-page" */'../pages/UserCompetitionPage')
const UserCompetitionDetailPage = () => import(/* webpackChunkName: "user-сompetition-detail-page" */'../pages/UserCompetitionDetailPage')

const routes = [
    {
        path: '/ui',
        name: 'UI',
        meta: {
            isShowNavigation: false,
            layout: 'DefaultLayout',
            name: 'Интерфейс',
            requiresAuth: true,
            sitemap: { ignoreRoute: true },
        },
        component: UI
    },
    {
        path: '/',
        name: 'index',
        meta: {
            isShowNavigation: false,
            layout: 'DefaultLayout',
            title: 'Главная | АГРО',
            pageName: 'Главная',
            requiresAuth: true,
        },
        component: Index
    },
    {
        path: '/:id',
        name: 'CompetitionDetailPage',
        meta: {
            isShowNavigation: false,
            layout: 'DefaultLayout',
            title: 'Конкурсы | АГРО',
            pageName: 'Конкурсы',
            requiresAuth: true,
        },
        component: IndexDetail
    },
    {
        path: '/auth',
        name: 'Auth',
        meta: {
            isShowNavigation: false,
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
            isShowNavigation: false,
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
            isShowNavigation: false,
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
            isShowNavigation: false,
            layout: 'DefaultLayout',
            requiresAuth: true,
            title: 'Конкурс | АГРО'
        },
        component: UserCompetitionDetailPage,
    },
]

export default routes


