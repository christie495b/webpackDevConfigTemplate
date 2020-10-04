<script>
  import Snbutton from "../../../components/snbutton/snbutton.svelte";
  import SearchBar from "../../../components/searchBar/searchBar.svelte";
  import Table from "../../../components/Table/table.svelte";
  import Modal from "../../../components/Modal/modal.svelte";
  import { createEventDispatcher } from "svelte";
  import { bannerData } from "../../../lib/store.js";
  import Pagination from "../../../components/pagination/pagination.svelte";

  const dispatch = createEventDispatcher();

  let per_page = 4;
  let from = 1;

  let stateData = paginate($bannerData, per_page, from),
    current_page = 1,
    //  from = 1,
    to = $bannerData.length,
    //  per_page = 3,
    last_page = Math.ceil($bannerData.length / per_page),
    total = $bannerData.length;

  function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  let loading = true;

  function changePage(data) {
    current_page = data.page;
    from = data.page;
    console.log(current_page, last_page);
    stateData = paginate($bannerData, per_page, current_page);
  }

  let active;
  function toggleModel(event) {
    active = event.detail.state;
    dispatch("message", {
      state: active,
    });

    if (active === false) {
      stateData = $bannerData;
    }
  }

  function handleSearch(data) {
    if (data.detail.state === "change") {
      stateData = $bannerData.filter(
        (Sdata) => Sdata.name.indexOf(data.detail.data) > -1
      );
      (last_page = stateData.length / per_page), (total = stateData.length);
      current_page = 1;
      from = 1;
      stateData = paginate(stateData, per_page, current_page);
    }
  }
</script>

<!-- modal -->
<Modal {active} on:message={toggleModel} >
  <span slot="header">
    <h5 class="modal-title text-dark">New Creative</h5>
  </span>
  <span slot="body">
    <form>
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Name:</label>
        <input type="text" class="form-control" id="name" />
      </div>
      <div class="align-items-start d-flex flex-column form-group">
        <label for="message-text" class="col-form-label">Size:</label>
        <section class="align-items-center d-flex">
          <input
            type="text"
            class="form-control width mr-3"
            id="width"
            style="width:70px;" /><span class="mr-3"> x </span>
          <input
            type="text"
            class="form-control height"
            id="height"
            style="width:70px;" />
        </section>
      </div>
    </form>
  </span>

</Modal>

<header>
  <Snbutton className="btn-light btn-block active" on:message={toggleModel}>
    Upload new asset
  </Snbutton>

  <SearchBar on:search={handleSearch} />
</header>

<Table {stateData} />

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
