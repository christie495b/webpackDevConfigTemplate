<script>
    import { bannerData } from '../../lib/store.js';
    console.log($bannerData);
  
  </script>
  
  
    <ul class="table-header list-group list-group-horizontal mr-3 mt-3 mb-3 bg-primary rounded-lg">
      <li class="list-group-item">EventName</li>
      <li class="list-group-item">Destination</li>
    </ul>
  
    <!-- {#each $bannerData as _, i} -->
      <ul class="table-header list-group list-group-horizontal mr-3 rounded-lg border-0">
        <li class="list-group-item">clickTag_pi</li>
        <li class="list-group-item">http://www.google.com</li>
      </ul>
    <!-- {/each} -->
  