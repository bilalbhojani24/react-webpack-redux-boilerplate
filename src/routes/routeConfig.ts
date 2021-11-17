import loadable from '@loadable/component';
const FirstComponent = loadable(() => import('../pages/first'));
const SecondComponent = loadable(() => import('../pages/second'));

const createRoute = (path: string, component: any, exact: boolean) => ({ path, component, exact });

export const routes = [
    createRoute('/first', FirstComponent, true),
    createRoute('/second', SecondComponent, true),
    createRoute('/three', SecondComponent, true),
];
