import Home from './views/home/index.svelte';
import User from './views/user/index.svelte';
import Product from './views/product/index.svelte';
import Login from './layouts/login.svelte';

export const routes = {
    "/": Home,
    "/user": User,
    "/product": Product,
    "/login": Login,
    "*": Login
};