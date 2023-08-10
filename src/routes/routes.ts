import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element

interface IRoute {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string
}

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));
// const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));


export const routes:IRoute[] = [
  {
    path: 'lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'LazyLayout Dash'
  },
  {
    path: 'no-lazy',
    to: '/no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  },

]