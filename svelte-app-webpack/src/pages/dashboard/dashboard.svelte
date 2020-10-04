<script>
  import "./dashboard.scss";
  import Header from "../../components/header/header.svelte";
  import Sidenav from "../../components/sidenav/sidenav.svelte";
  import Route from './router/Route.svelte';
  import Mask from "../../components/Mask/mask.svelte";
  let active;
  function toggleModel(event) {
      active = event.detail.state;
  }


</script>


<main class="dashboard" id="dashboard">
  <Header />
  <div class="container-custom container-fluid">
    <div class="card card-custom">
      <div class="card-body">
        <main class="row flex-xl-nowrap">
          <aside class="col-0 col-sm-0 col-md-4 col-xl-3 bd-sidebar bg-primary">
            <Sidenav />
          </aside>

          <section class="col-12 col-sm-12 col-md-8 col-xl-9">
            <main class="conainer">
              <div class="card-body-section mr-3 mt-2 ml-2">
                <Route on:message={toggleModel} />
              </div>
            </main>
          </section>
        </main>
      </div>
    </div>
  </div>


  <!-- mask for modal -->
  <Mask {active}></Mask>
</main>
