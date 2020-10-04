<script>
    import { onDestroy } from 'svelte';
    import { dashRoute } from './store';
    import router from './routes.js';
    
    let component;

   

    const unsubscribe = dashRoute.subscribe(value => {

      // console.error(">>>>>>>>>>>>>>value",value,">>>>>>>>>>>>>>router",router);

      component = router.filter(r => r.path === value)[0].component;
    })
    onDestroy(unsubscribe);

    
    
  </script>
  
  <style>
  </style>
  
  <svelte:component this={component}  on:message  />

