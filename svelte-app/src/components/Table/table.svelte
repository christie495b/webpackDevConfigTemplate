<script>

  import { bannerData, currentState } from '../../lib/store.js'; 
  import { dashRoute } from '../../pages/dashboard/router/store/index.js';

  let stateData = $currentState;

  console.trace($bannerData)
  function handleRowClick(e) {
      
    let bData = JSON.parse(e.target.parentNode.getAttribute('data-value'));
    let {files} = bData;

    stateData = bData;
    currentState.set(stateData);
    
    if(files.length > 0){
      // change current router path

      dashRoute.set('/review');
      // push the path into web browser history API
      window.history.pushState({path: '/review'}, '', window.location.origin + '/review');
    }else{

      // change current router path
      dashRoute.set('/upload');
      // push the path into web browser history API
      window.history.pushState({path: '/upload'}, '', window.location.origin + '/upload');

    }


  }
  
</script>

<div class="table-container mt-3 mb-3 "> 
  <ul class="table-header list-group list-group-horizontal mb-3 bg-primary rounded-lg">
    <li class="list-group-item">Name</li>
    <li class="list-group-item">Dimension</li>
    <li class="list-group-item">Size</li>
    <li class="list-group-item">last Modified</li>
  </ul>

  {#each $bannerData as _, i}
    <ul class="table-header list-group list-group-horizontal rounded-lg border-0" data-value = {JSON.stringify($bannerData[i])} on:click = {handleRowClick}>
      <li class="list-group-item">{$bannerData[i].name}</li>
      <li class="list-group-item">{$bannerData[i].dimension}</li>
      <li class="list-group-item">{$bannerData[i].size}</li>
      <li class="list-group-item">{$bannerData[i].lastModified}</li>
    </ul>
  {/each}
</div>
