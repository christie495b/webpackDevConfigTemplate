<script>

  import FileUpload from "../../../components/FileUpload/FileUpload.svelte";
  import DashboardHeader from  "../../../components/DashboardHeader/DashboardHeader.svelte";
  import { currentState } from '../../../lib/store.js';
  
  let creativeName = $currentState.name;

</script>


<DashboardHeader {creativeName}/>
<FileUpload />