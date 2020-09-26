<script>
  import { bannerData } from '../../lib/store.js';
  console.log($bannerData);

</script>


  <ul class="table-header list-group list-group-horizontal mr-3 mt-3 mb-3 bg-primary rounded-lg">
    <li class="list-group-item">Name</li>
    <li class="list-group-item">Dimension</li>
    <li class="list-group-item">Size</li>
    <li class="list-group-item">last Modified</li>
  </ul>

  {#each $bannerData as _, i}
    <ul class="table-header list-group list-group-horizontal mr-3 rounded-lg border-0">
      <li class="list-group-item">{$bannerData[i].name}</li>
      <li class="list-group-item">{$bannerData[i].dimension}</li>
      <li class="list-group-item">{$bannerData[i].size}</li>
      <li class="list-group-item">{$bannerData[i].lastModified}</li>
    </ul>
  {/each}
