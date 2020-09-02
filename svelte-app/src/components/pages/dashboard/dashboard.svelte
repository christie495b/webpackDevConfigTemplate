<script>
    import "./dashboard.scss";
    import Link from '../../router/Link.svelte';
    import Header from './components/header/header.svelte';
    import Sidenav from './components/sidenav/sidenav.svelte';
    
</script>

<Header ></Header>
<div class="container-fluid">
    <main class="row flex-xl-nowrap">
        <aside class="col-md-3 col-xl-2 bd-sidebar bg-primary">
           <Sidenav></Sidenav>
        </aside>
    
        <section class="col-md-9 col-xl-10">
            section
        </section>
    </main>
</div>