<script>
    import { curRoute } from './store/index.js';
    export let page;
    function redirectTo(event){

      let pathname = event.target.pathname;
      if(event.target.tagName.toLowerCase() !== 'a'){
        pathname = event.target.parentNode.pathname; //this is the url where the anchor tag points to.
      }

      // change current router path
      curRoute.set(pathname);
      // push the path into web browser history API
      window.history.pushState({path: page.path}, '', window.location.origin + page.path);
    }
  </script>
  
 
  
  <a  href={page.path} on:click|preventDefault={redirectTo}><slot>{page.name}</slot></a>