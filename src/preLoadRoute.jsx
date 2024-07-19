import { Link, matchPath } from "react-router-dom";
import { routes } from "./mainRoutes";

const preloadRouteComponent = (to, onPreload) => {
  const component = findComponentForRoute(to, routes);
  if (component && component.component && component.component.preload) {
    component.component.preload();

    if (onPreload) {
      return Promise.all(onPreload.map((action) => action()));
    }
  }
};

export const findComponentForRoute = (path, routes) => {
  let found;
  let matchingRoute = routes.find((route) => {

    if (route.subRoutes) {
      found = route.subRoutes.find((r) => {
        return matchPath(path, {
          path: r.path,
          exact: r.exact,
        });
      });
      return found;
    } else {
      return matchPath( {
        path: route.path,
        exact: route.exact,
      },path);
    }
  });

  if (found && matchingRoute.subRoutes) {
    matchingRoute = found;
  }

  console.log(matchingRoute)
  return matchingRoute ? matchingRoute : null;
};

const PreloadLink = ({ to, onPreload, ...rest }) => {
  return (
    <Link
      to={to}
      onMouseEnter={() => preloadRouteComponent(to, onPreload)}
      {...rest}
    />
  );
};
export default PreloadLink;
