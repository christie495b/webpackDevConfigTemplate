<script>
    export let current_page;
    export let last_page;
    // export let per_page;
    // export let from;
    // export let to;
    // export let total;
  
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
  
    function range(size, startAt = 0) {
      
      return [...Array(Math.ceil(size)).keys()].map(i => i + startAt);
    }
  
    function changePage(page) {
      if (page !== current_page) {
        dispatch('change', page);
      }
    }
  </script>

<nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item {current_page === 1 ? 'disabled' : ''}" >
        <span class="page-link"  tabindex="-1" aria-disabled="true" on:click="{() => changePage(current_page - 1)}">Previous</span>
      </li>
      {#each range(last_page, 1) as page}
        <li class="page-item {page === current_page ? 'active': ''}">
            <span  class="page-link"  on:click="{() => changePage(page)}">{page}</span>
        </li>
        {/each}
      <li class="page-item {current_page === last_page ? 'disabled' : ''}">
        <span class="page-link"  on:click="{() => changePage(current_page + 1)}">Next</span>
      </li> 
    </ul>
  </nav>