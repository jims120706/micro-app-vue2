import Home from '@/pages/Home'
import About from '@/pages/About'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: "/about",
    name: "About",
    component: About,
  },
];

export default routes