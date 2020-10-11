import Vue from "vue";
import Router from "vue-router";
import Portada from "../views/Portada.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Portada",
      component: Portada ,
    },
    {
      path: "/sobremi",
      name: "SobreMi",
      component:() => import(/* webpackChunkName: "sobremi" */ "../views/SobreMi.vue")
    },
    {
      path: "/contacto",
      name: "Contacto",
      component:() => import(/* webpackChunkName: "contacto" */ "../views/Contacto.vue")
    },
    {
      path: "/post/:id",
      name: "Post",
      component:() => import(/* webpackChunkName: "post" */ "../views/Post.vue")
    },
    {
      path: "*",
      name: "NotFound",
      component:() => import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue")
    },
  ],
});
