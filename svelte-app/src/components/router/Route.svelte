<script>
    import { onDestroy } from 'svelte';
    import { curRoute } from './store';
    import router from './routes.js';
    let component;

    console.trace("route.svelte",$curRoute, curRoute);

    const unsubscribe = curRoute.subscribe(value => {
      component = router.filter(r => r.path === value)[0].component;
    })
    onDestroy(unsubscribe);


    console.trace(component);
  </script>
  
  <style>
  </style>
  
  <svelte:component this={component} />