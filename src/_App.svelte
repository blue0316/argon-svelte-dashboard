<!-- App.svelte -->
<script>
    import {page} from "./store";
    import Sidebar from "./components/sidebar.svelte";
    import Navbar from "./components/navbar.svelte";

    // Admin Layout
    import Home from "./views/home/index.svelte";
    import Product from "./views/product/index.svelte";
    import User from "./views/user/index.svelte";
    // Auth Layout
    import Login from "./layouts/login.svelte";
    import Signup from "./layouts/signup.svelte";
    import NotFound from "./layouts/404.svelte";

    const pages = [
        {id: "Home", component: Home},
        {id: "Login", component: Login},
        {id: "Signup", component: Signup},
        {id: "Product", component: Product},
        {id: "User", component: User},
    ];

    const getComponent = function () {
        try {
            return pages.find((p) => p.id === $page).component;
        } catch (e) {
            return Home;
        }
    }
</script>

{#if $page == "Signup" && $page == "Login"}
    <main>
        <svelte:component this={getComponent()}/>
    </main>
{:else}
    <div class="min-height-300 bg-primary position-absolute w-100"></div>
    <Sidebar/>
    <main class="main-content position-relative border-radius-lg ">
        <Navbar/>
        <svelte:component this={getComponent()}/>
    </main>
{/if}

