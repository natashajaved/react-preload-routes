import { lazy } from "react";

export const public_path = `${process.env.PUBLIC_URL}/`

export const HomeRoute = public_path
export const AboutRoute =  public_path + 'about'
export const ContactRoute =  public_path + 'contact'

const ReactLazyPreload = (importStatement) => {
    const Component = lazy(importStatement);
    Component.preload = importStatement;
    return Component;
};

const Home = ReactLazyPreload(() => import("./home"));
const About = ReactLazyPreload(() => import("./about"));
const Contact = ReactLazyPreload(() => import("./contact"));

export const routes = [
    {
        path: HomeRoute, component: Home, exact: true
    },
    {
        path: AboutRoute, component: About, exact: true
    },
    {
        path: ContactRoute, component: Contact, exact: true
    },
]