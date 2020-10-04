<script>
    // import { currentState } from '../../lib/store.js';
    export let bannerData;
    // let bannerData = $currentState.files;
  </script>

  <style>
    .review-table .table-body .list-group-item{
      padding: 0.25rem 1.25rem;
      width: 25%;
    }


    .table-body.list-group-horizontal > .list-group-item:last-child{
      border-bottom-right-radius: 0.75rem;
      border-top-right-radius:0.75rem;
    }

    .table-body.list-group-horizontal > .list-group-item:first-child{
      border-bottom-left-radius: 0.75rem;
      border-top-left-radius:0.75rem;
    }

    div.table-containers {
        height: calc(100vh - 48vh);
        overflow-y: hidden;
    }

    .table-header .list-group-item{
      font-weight: 600;
    }

    .no-banners{
      width: 100%;
    }

  </style>
  
  <div class="review-table table-containers mt-3 mb-3 bg-primary rounded-1 p-2">
    <ul class="table-header list-group list-group-horizontal mb-3  bg-light rounded-1">
      <li class="list-group-item">name</li>
      <li class="list-group-item">type</li>
      <li class="list-group-item">dimension</li>
      <li class="list-group-item">size</li>
    </ul>
  
    {#each bannerData as _, i}
      <ul class="table-body list-group list-group-horizontal bg-light rounded-1 mt-4">
        <li class="list-group-item">{bannerData[i].name}</li>
        <li class="list-group-item">{bannerData[i].type}</li>
        <li class="list-group-item">{bannerData[i].dimension}</li>
        <li class="list-group-item">{bannerData[i].size}</li>
      </ul>
      {:else}
      <ul class="table-header list-group list-group-horizontal rounded-lg border-0 dashboard-main-table-data">
        <li class="list-group-item no-banners">
          <h5 class="text-center">There are no banners here.</h5>
        </li>
      </ul>
    {/each}
    <ul class="table-body list-group list-group-horizontal bg-light rounded-1 mt-4">
      <li class="list-group-item">.</li>
      <li class="list-group-item">.</li>
      <li class="list-group-item">.</li>
      <li class="list-group-item">.</li>
    </ul>
  </div>


  