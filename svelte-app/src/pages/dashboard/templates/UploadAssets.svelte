<script>

  import FileUpload from "../../../components/FileUpload/FileUpload.svelte";
  import DashboardHeader from  "../../../components/DashboardHeader/DashboardHeader.svelte";
  import { currentState } from '../../../lib/store.js';
  
  let creativeName = $currentState.name;

</script>
<style>
  .arrow-left {
    width: 0; 
    height: 0; 
    border-top: 21px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 34px solid #acb6e5;
    position: absolute;
    top: 148px;
    left: 10px;
  }
</style>

<DashboardHeader {creativeName}/>
<div class="arrow-left"></div>
<FileUpload />