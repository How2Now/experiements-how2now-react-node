const appRoutes = [
  {
    path: '/app/dashboard',
    load: () => import(/* webpackChunkName: 'app-dashboard' */ './dashboard'),
  },
  {
    path: '/app/search/:type',
    load: () => import(/* webpackChunkName: 'search' */ './search'),
  },
];

export default appRoutes;
