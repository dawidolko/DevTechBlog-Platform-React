const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/post/:id"],
    exact: true,
    component: "Post",
  },
  {
    path: ["/privacy"],
    exact: true,
    component: "Privacy",
  },
  {
    path: ["/guidelines"],
    exact: true,
    component: "Guidelines",
  },
];

export default routes;
