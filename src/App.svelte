<script>
    import Router, { link } from "svelte-spa-router";
    import { routes } from "./routes.js";
    import Sidebar from "./components/sidebar.svelte";
    import Navbar from "./components/navbar.svelte";

</script>

<div class="min-height-300 bg-primary position-absolute w-100"></div>
<Sidebar/>
<main class="main-content position-relative border-radius-lg ">
    <Navbar/>
    <Router {routes}/>
</main>