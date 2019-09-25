import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "./views/Home.vue";
import dashboard from "./views/Dashboard.vue";
import profile from './views/Profile.vue';
import basictable from './views/BasicTable.vue'
import icons from './views/Icons.vue';
import Google from './views/GoogleMap.vue';
import blankpage from './views/BlankPage.vue';
import error from './views/Error404.vue';
// import Modal from "./components/Modal.vue";
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      // name: "Dashboard",
      component: dashboard
    },
    {
      path: "/profile",
      // name: "profile",
      component: profile
    },
    {
      path: "/basic",
      // name: "basic",
      component: basictable
    },
    {
      path: "/icons",
      // name: "icons",
      component: icons
    },
    {
      path: "/google",
      // name: "Google",
      component: Google
    },
    {
      path: "/blankpage",
      // name: "bankpage",
      component: blankpage
    },
    {
      path: "/error",
      // name: "error",
      component: error
    }
    // {
    //   path: "/modal",
    //   component: Modal
    // }
  ]
})