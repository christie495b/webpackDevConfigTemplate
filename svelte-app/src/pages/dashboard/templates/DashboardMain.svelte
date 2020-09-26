<script>

  import Snbutton from "../../../components/snbutton/snbutton.svelte";
  import SearchBar from "../../../components/searchBar/searchBar.svelte";
  import Table from "../../../components/Table/table.svelte";  
  import Modal from "../../../components/Modal/modal.svelte";
  import { createEventDispatcher } from 'svelte';  
  const dispatch = createEventDispatcher();
 


  let active;
  function toggleModel(event) {
    active = event.detail.state;
    dispatch('message', {
          state: active
        });
  }
</script>


<!-- modal -->
<Modal {active} on:message={toggleModel} >
  <span slot="header">
    <h5 class="modal-title text-light">New Creative</h5>
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

  <SearchBar />
</header>

<Table />
