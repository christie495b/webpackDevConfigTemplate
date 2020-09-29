<script>

    import DashboardHeader from  "../../../components/DashboardHeader/DashboardHeader.svelte";
    import EventsTable from '../../../components/EventsTable/EventsTable.svelte';
    import { currentState } from '../../../lib/store.js';
    import Link from "../../../pages/dashboard/router/Link.svelte";
  
    let creativeName = $currentState.name;
  
  </script>
<DashboardHeader {creativeName}/>
<EventsTable />
<Link  page={{path: '/', name: 'DashoardMain', className: 'bd-toc-link d-flex justify-content-center'}}>
  <button class="review-to-events btn btn-dark btn-block d-flex justify-content-around align-items-center">
    <!-- <img src={events} alt="click icon to reiect to upload zip page"/> -->
    START OVER
  </button>
</Link>