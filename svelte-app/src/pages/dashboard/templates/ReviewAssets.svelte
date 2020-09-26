<script>

    import DashboardHeader from  "../../../components/DashboardHeader/DashboardHeader.svelte";
    import Stats from "../../../components/stats/stats.svelte";
    import ReviewTable from '../../../components/ReviewTable/ReviewTable.svelte';
  
    let creativeName ="300x600";
    
  </script>
<DashboardHeader {creativeName}/>

<div class="assetSize">
    <Stats headerText = {"Total File Size"} >
        221Kb
    </Stats>
    <Stats headerText = {"Zip File Size"} >
        150kb
    </Stats>
    <Stats headerText = {"Tota number of Files"} >4</Stats>
</div>

<ReviewTable />