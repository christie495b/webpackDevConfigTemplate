<script>
    // import Link from './components/router/Link.svelte';
    import 'bootstrap';
    import './main.scss';
    import Head from './components/header.svelte';
    import Route from './components/router/Route.svelte';
    import Dashboard from './components/pages/dashboard/dashboard.svelte';
    

    // import Link from './components/router/Link.svelte' ;
</script>

<style>
</style>

<!-- Navigation goes here -->
<!-- <Link page={{path: '/', name: 'Home'}} />
<Link page={{path: '/about', name: 'About'}} /> -->
<div class="main-container">
    <!-- <Head /> -->

    <!-- Main container goes here -->
    <Route />
</div>