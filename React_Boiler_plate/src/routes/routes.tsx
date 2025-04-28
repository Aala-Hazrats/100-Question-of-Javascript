import PublicRoutes from "@/layout/PublicRoutes";

export const routes = {
  path: "/",
  element: <PublicRoutes />,
  children: [{ index: true, element: <div>This is app</div> },{}],
};
