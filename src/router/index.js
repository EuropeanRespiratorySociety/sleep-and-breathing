import Vue from "vue";
import Router from "vue-router";
import store from "../vuex/store";

/* eslint-disable */
import Home from "@/components/pages/Home";
import Programme from "@/components/pages/Programme";
import Article from "@/components/pages/Article";
import PracticalInformation from "@/components/pages/PracticalInformation";
import Registration from "@/components/pages/Registration";
import OrganisingCommitteePage from "@/components/pages/OrganisingCommitteePage";
import Resources from "@/components/pages/Resources";
import FaqPage from "@/components/pages/FaqPage";


// const Home = () => import('@/components/pages/Home') // eslint-disable-line
// const Programme = () => import('@/components/pages/Programme')
// const Article = () => import('@/components/pages/Article')
// const PracticalInformation = () => import('@/components/pages/PracticalInformation')
// const Registration = () => import('@/components/pages/Registration')
//const HotelAccommodation = () => import('@/components/pages/HotelAccommodation')

/* eslint-enable */

// import store from '../vuex/store'

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [{
      path: "/home",
      redirect: "/"
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/programme",
      name: "programme",
      component: Programme
    },
    {
      path: "/articles/:slug",
      name: "Article",
      component: Article
    },
    {
      path: "/registration",
      name: "registration",
      component: Registration
    },
    {
      path: "/practical-information",
      name: "practical-information",
      component: PracticalInformation
    },
    {
      path: "/programme/organising-committee",
      name: "organising-committee-page",
      component: OrganisingCommitteePage
    },
    {
      path: "/resources",
      name: "resources",
      component: Resources
    },
    {
      path: "/practical-information/faq",
      name: "faq-page",
      component: FaqPage
    }
    // ,
    // {
    //   path: '/hotel-accommodation',
    //   name: 'hotel-accommodation',
    //   component: HotelAccommodation
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});

router.afterEach(() => {
  if (store.state.base.isMobile === true) {
    store.dispatch("base/setDrawer", false, {
      root: true
    });
  }
});

export default router;
