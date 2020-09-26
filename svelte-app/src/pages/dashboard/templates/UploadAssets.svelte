<script>

  import FileUpload from "../../../components/FileUpload/FileUpload.svelte";
  import DashboardHeader from  "../../../components/DashboardHeader/DashboardHeader.svelte";

  let creativeName ="300x600";
</script>


<DashboardHeader {creativeName}/>
<FileUpload />