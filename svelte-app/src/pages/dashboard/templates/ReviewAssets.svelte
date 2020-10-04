<script>
  import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader.svelte";
  import Stats from "../../../components/stats/stats.svelte";
  import ReviewTable from "../../../components/ReviewTable/ReviewTable.svelte";
  import { currentState } from "../../../lib/store.js";
  import Link from "../../../pages/dashboard/router/Link.svelte";

  import Pagination from "../../../components/pagination/pagination.svelte";

  let creativeName = $currentState.name;
  // let bannerData = $currentState;

  let from = 1,
    per_page = 2;

  let bannerData = paginate($currentState.files, per_page, from),
    current_page = 1,
    // from = 1,
    to = $currentState.files.length,
    // per_page = 2,
    last_page = Math.ceil($currentState.files.length / per_page),
    total = $currentState.files.length;

  function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  let loading = true;

  function changePage(data) {
    current_page = data.page;
    from = data.page;
    bannerData = paginate($currentState.files, per_page, current_page);
  }
</script>

<style>
  .review-to-events {
    position: relative;
    top: -20px;
  }
</style>

<DashboardHeader {creativeName} />

<div class="assetSize">
  <Stats headerText={'Total File Size'}>
    {$currentState.files.reduce(function (a, b) {
      return a + parseInt(b.size);
    }, 0)}kb
  </Stats>
  <Stats headerText={'Zip File Size'}>{$currentState.size}</Stats>
  <Stats headerText={'Tota number of Files'}>
    {$currentState.files.length}
  </Stats>
</div>

<ReviewTable {bannerData} />

<Link
  page={{ path: '/events', name: 'Events', className: 'bd-toc-link d-flex justify-content-center' }}>
  <button
    class="review-to-events btn btn-dark btn-block d-flex justify-content-around align-items-center">
    <!-- <img src={events} alt="click icon to reiect to upload zip page"/> -->
    
      NEXT
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
