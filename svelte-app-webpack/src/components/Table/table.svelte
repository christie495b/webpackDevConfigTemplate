<script>

  import { bannerData, currentState } from '../../lib/store.js'; 
  import { dashRoute } from '../../pages/dashboard/router/store/index.js';
  import './table.scss';
  export let stateData;


  // let stateData = $currentState;


  function handleRowClick(e) {
      
    let bData = JSON.parse(e.target.parentNode.getAttribute('data-value'));
    let {files} = bData;
    // console.trace(bData)
    currentState.set(bData);
    
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

  // console.log(stateData, $bannerData)
  
</script>

<style>

.header .list-group-item{
      font-weight: 600;
    }

    .no-banners{
      width: 100%;
    }
</style>

<div class="table-container mt-3 mb-3 dashboard-main-table"> 
  <ul class="table-header header list-group list-group-horizontal mb-3 bg-primary rounded-lg">
    <li class="list-group-item">name</li>
    <li class="list-group-item">dimension</li>
    <li class="list-group-item">size</li>
    <li class="list-group-item">last modified</li>
  </ul>

  {#each stateData as _, i}
    <ul class="table-header list-group list-group-horizontal rounded-lg border-0 dashboard-main-table-data" data-value = {JSON.stringify(stateData[i])} on:click = {handleRowClick}>
      <li class="list-group-item">{stateData[i].name}</li>
      <li class="list-group-item">{stateData[i].dimension}</li>
      <li class="list-group-item">{stateData[i].size}</li>
      <li class="list-group-item">{stateData[i].lastModified}</li>
    </ul>
    {:else}
    <ul class="table-header list-group list-group-horizontal rounded-lg border-0 dashboard-main-table-data">
      <li class="list-group-item no-banners">
        <h5 class="text-center">There are no banners here.</h5>
      </li>
    </ul>
  {/each}
</div>

