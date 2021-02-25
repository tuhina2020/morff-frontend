import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LandingPage from 'containers/LandingPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import DummyPage from 'containers/DummyPage/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';
import ViewProfilePage from 'containers/ViewProfilePage/Loadable';
import ProjectPage from 'containers/ProjectPage/Loadable';
import LitePage from 'containers/LitePage/Loadable';
import PrivacyPage from 'containers/Privacy/Loadable';
import TermsOfUsePage from 'containers/TermsOfUse/Loadable';
import KYCPage from 'containers/KYCPage/Loadable';
import TabsPage from 'containers/TabsPage/Loadable';
const ROUTES = [
  // {
  //   path: '/landing',
  //   component: LandingPage,
  //   header: false,
  //   footer: false,
  //   auth: false,
  //   key: 'landing',
  // },
  {
    path: '/termsofuse',
    component: TermsOfUsePage,
    header: true,
    footer: false,
    auth: false,
    key: 'termsofuse',
  },
  {
    path: '/privacy',
    component: PrivacyPage,
    header: true,
    footer: false,
    auth: false,
    key: 'privacy',
  },
  {
    path: '/kycpage',
    component: KYCPage,
    header: true,
    footer: false,
    auth: false,
    key: 'kycpage',
  },
  {
    path: '/tabs',
    component: TabsPage,
    header: true,
    footer: false,
    auth: false,
    key: 'tabs',
  },
  {
    path: '/login',
    component: LoginPage,
    header: false,
    footer: false,
    auth: false,
    key: 'login',
  },
  {
    path: '/dashboard',
    component: DummyPage,
    header: false,
    footer: false,
    auth: true,
    key: 'dashboard',
  },
  {
    path: '/profile/:transientId/view',
    component: ViewProfilePage,
    header: false,
    footer: false,
    auth: false,
    nav: true,
    key: 'viewprofile',
  },
  {
    path: '/profile/:tabId',
    component: ProfilePage,
    header: false,
    footer: false,
    auth: true,
    nav: true,
    key: 'profile',
  },
  {
    path: '/projects',
    component: ProjectPage,
    header: false,
    footer: false,
    auth: true,
    nav: true,
    key: 'project',
  },
  // {
  //   path: '/',
  //   component: LandingPage,
  //   exact: true,
  //   header: true,
  //   footer: true,
  //   auth: false,
  //   key: 'home',
  // },
  {
    path: '/notfound',
    component: NotFoundPage,
    header: true,
    footer: true,
    auth: false,
    key: 'notfound',
  },
  {
    path: '/',
    component: LitePage,
    header: true,
    footer: true,
    auth: false,
    key: 'lite',
  },
];

export default ROUTES;
