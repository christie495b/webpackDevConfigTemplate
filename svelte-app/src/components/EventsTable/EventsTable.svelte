<script>
    import { currentState } from '../../lib/store.js';
    let event = $currentState.events;
    console.log(event)
  
  </script>
  
  <div class="table-containers mt-3 mb-3">
    <ul class="table-header list-group list-group-horizontal mb-3 bg-primary rounded-lg">
      <li class="list-group-item">EventName</li>
      <li class="list-group-item">Destination</li>
    </ul>
  
    {#each event as _, i}
      <ul class="table-header list-group list-group-horizontal rounded-lg border-0">
        <li class="list-group-item">{event[i].exitId}</li>
        <li class="list-group-item">{event[i].url}</li>
      </ul>
    {/each}

    <ul class="table-header list-group list-group-horizontal rounded-lg border-0">
      <li class="list-group-item">.</li>
      <li class="list-group-item">.</li>
    </ul>
  </div>
  