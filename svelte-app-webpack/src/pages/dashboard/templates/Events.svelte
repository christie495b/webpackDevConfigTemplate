<script>
  import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader.svelte";
  import EventsTable from "../../../components/EventsTable/EventsTable.svelte";
  import { currentState } from "../../../lib/store.js";
  import Link from "../../../pages/dashboard/router/Link.svelte";
  import Pagination from "../../../components/pagination/pagination.svelte";

  let creativeName = $currentState.name;

  let per_page = 1;
  let from = 1;

  let eventsData = paginate($currentState.events, per_page, from),
    current_page = 1,
    //  from = 1,
    to = $currentState.events.length,
    //  per_page = 1,
    last_page = Math.ceil($currentState.events.length / per_page),
    total = $currentState.events.length;

  function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  let loading = true;

  function changePage(data) {
    current_page = data.page;
    from = data.page;
    eventsData = paginate($currentState.events, per_page, current_page);
  }
</script>

<style>
  .review-to-events {
    position: relative;
    top: -20px;
  }
</style>

<DashboardHeader {creativeName} />
<EventsTable {eventsData} />
<Link
  page={{ path: '/', name: 'DashoardMain', className: 'bd-toc-link d-flex justify-content-center' }}>
  <button
    class="review-to-events btn btn-dark btn-block d-flex justify-content-around align-items-center">
    <!-- <img src={events} alt="click icon to reiect to upload zip page"/> -->
    
    START OVER
  </button>
</Link>

{#if total > per_page}
  <Pagination
    {current_page}
    {last_page}
    {per_page}
    {from}
    {to}
    {total}
    on:change={(ev) => changePage({ page: ev.detail })} />
{/if}
