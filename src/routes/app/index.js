const appRoutes = [
  {
    path: '/app/dashboard',
    load: () => import(/* webpackChunkName: 'app-dashboard' */ './dashboard'),
  },
];

export default appRoutes;
