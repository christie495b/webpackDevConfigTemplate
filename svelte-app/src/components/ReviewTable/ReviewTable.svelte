<script>
    import { bannerData } from '../../lib/store.js';
    console.log($bannerData);
  
  </script>
  
  
    <ul class="table-header list-group list-group-horizontal mr-3 mt-3 mb-3 bg-primary rounded-lg">
      <li class="list-group-item">FileName</li>
      <li class="list-group-item">Type</li>
      <li class="list-group-item">Dimension</li>
      <li class="list-group-item">File Size</li>
    </ul>
  
    <!-- {#each $bannerData as _, i} -->
      <ul class="table-header list-group list-group-horizontal mr-3 rounded-lg border-0">
        <li class="list-group-item">index.html</li>
        <li class="list-group-item">HTML</li>
        <li class="list-group-item">300x600</li>
        <li class="list-group-item">60kb</li>
      </ul>
      <ul class="table-header list-group list-group-horizontal mr-3 rounded-lg border-0">
        <li class="list-group-item">index.html</li>
        <li class="list-group-item">HTML</li>
        <li class="list-group-item">300x600</li>
        <li class="list-group-item">60kb</li>
      </ul>
    <!-- {/each} -->
  