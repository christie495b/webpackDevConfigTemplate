<script>
    import { dashRoute } from './store/index.js';
    export let page;
    function redirectTo(event){

      let pathname = event.target.pathname;
      if(event.target.tagName.toLowerCase() !== 'a'){
        
        pathname = event.target.parentNode.pathname; //this is the url where the anchor tag points to.
        // console.info(">>>>>>>>>>>>>>>>>>a pathname",event.target)
      }

      

      // change current router path
      dashRoute.set(pathname);
      // push the path into web browser history API
      window.history.pushState({path: page.path}, '', window.location.origin + page.path);
    }
  </script>
  
 
  
  <a  class={page.className} href={page.path} on:click|preventDefault={redirectTo}><slot>{page.name}</slot></a>