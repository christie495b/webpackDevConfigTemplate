<script>
    import { currentState } from '../../lib/store.js';
    let file = $currentState.files;
  </script>
  
  <div class="table-containers mt-3 mb-3">
    <ul class="table-header list-group list-group-horizontal mb-3  bg-primary rounded-lg">
      <li class="list-group-item">FileName</li>
      <li class="list-group-item">Type</li>
      <li class="list-group-item">Dimension</li>
      <li class="list-group-item">File Size</li>
    </ul>
  
    {#each file as _, i}
      <ul class="table-header list-group list-group-horizontal rounded-lg border-0">
        <li class="list-group-item">{file[i].name}</li>
        <li class="list-group-item">{file[i].type}</li>
        <li class="list-group-item">{file[i].dimension}</li>
        <li class="list-group-item">{file[i].size}</li>
      </ul>
    {/each}
    <ul class="table-header list-group list-group-horizontal rounded-lg border-0">
      <li class="list-group-item">.</li>
      <li class="list-group-item">.</li>
      <li class="list-group-item">.</li>
      <li class="list-group-item">.</li>
    </ul>
  </div>


  