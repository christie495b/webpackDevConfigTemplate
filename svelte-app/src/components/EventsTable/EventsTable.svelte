  <script>
    export let eventsData;
  
  </script>

  <style>
     .events-table .list-group-item{
      padding: 0.25rem 1.25rem;
      /* width: 50%; */
    }


    .table-body.list-group-horizontal > .list-group-item:last-child{
      border-bottom-right-radius: 0.75rem;
      border-top-right-radius:0.75rem;
    }
    
    .table-body.list-group-horizontal > .list-group-item:first-child{
      border-bottom-left-radius: 0.75rem;
      border-top-left-radius:0.75rem;
    }

    .list-group-horizontal{
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: space-evenly;
    }

    .list-group-horizontal > .list-group-item{
      flex-grow: 1;
      width: 25%;
    }

    .list-group-horizontal > .list-group-item:last-child{
      flex-grow: 3;
      width: 50%;
    }

    div.table-containers {
        height: calc(100vh - 50vh);
        overflow-y: hidden;
    }

    .events-table{
     margin-top: 6.5rem !important;
    }

    .table-header .list-group-item{
      font-weight: 600;
    }

    .no-banners{
      width: 100%;
    }

    
  </style>
  
  <div class="events-table table-containers mt-3 mb-3 p-2 bg-primary rounded-1">
    <ul class="table-header list-group list-group-horizontal mb-3  rounded-1 bg-light ">
      <li class="list-group-item">name</li>
      <li class="list-group-item">destination</li>
    </ul>
  
    {#each eventsData as _, i}
      <ul class="table-body list-group list-group-horizontal rounded-1 bg-light  mt-4 border-0">
        <li class="list-group-item">{eventsData[i].exitId}</li>
        <li class="list-group-item">{eventsData[i].url}</li>
      </ul>
      {:else}
      <ul class="table-header list-group list-group-horizontal rounded-lg border-0 dashboard-main-table-data">
        <li class="list-group-item no-banners">
          <h5 class="text-center">There are no banners here.</h5>
        </li>
      </ul>
    {/each}

    <ul class="table-body list-group list-group-horizontal rounded-1 bg-primary mt-4 border-0">
      <li class="list-group-item">.</li>
      <li class="list-group-item">.</li>
    </ul>
  </div>
  