<script>

    import DashboardHeader from  "../../../components/DashboardHeader/DashboardHeader.svelte";
    import EventsTable from '../../../components/EventsTable/EventsTable.svelte';
  
    let creativeName ="300x600";
  </script>
<DashboardHeader {creativeName}/>
<EventsTable />
