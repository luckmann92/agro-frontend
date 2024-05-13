const UI = () => import(/* webpackChunkName: "ui" */'../pages/UI')
const Index = () => import(/* webpackChunkName: "index-page" */'../pages/Index')
const CompetitionDetailPage = () => import(/* webpackChunkName: "competition-detail-page" */'../pages/CompetitionDetailPage')
const Auth = () => import(/* webpackChunkName: "auth-page" */'../pages/Auth')
const ApplicationPage = () => import(/* webpackChunkName: "application-page" */'../pages/ApplicationPage')

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
        path: '/competition/:id',
        name: 'CompetitionDetailPage',
        meta: {
            isShowNavigation: false,
            layout: 'DefaultLayout',
            title: 'Конкурсы | АГРО',
            pageName: 'Конкурсы',
            requiresAuth: true,
        },
        component: CompetitionDetailPage
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
        name: 'ApplicationPage',
        meta: {
            isShowNavigation: false,
            layout: 'DefaultLayout',
            requiresAuth: true,
            title: 'Заявки кандидатов | АГРО'
        },
        component: ApplicationPage,
    },
]

export default routes


