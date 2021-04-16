import Home from '@/pages/Home'
import About from '@/pages/About'
import microBasePath from '@/micro-config'

const routes = [
  {
    path: microBasePath + '/',
    redirect: microBasePath + '/home'
  },
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: microBasePath + "/home",
    name: "Home",
    component: Home,
  },
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: microBasePath + "/about",
    name: "About",
    component: About,
  },
];

export default routes