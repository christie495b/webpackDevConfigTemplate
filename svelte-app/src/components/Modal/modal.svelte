<script>
    import './modal.scss'
    import { bannerData } from '../../lib/store.js'; 
    export let active;

    import { createEventDispatcher } from 'svelte';

    

    const dispatch = createEventDispatcher();
    function closeModel() {
        dispatch('message', {
          state: false
        });
    }
    
    function saveData() {
      let dataToUpdate = $bannerData;
      let dateNow = new Date(Date.now()).toString();
      
      dataToUpdate.push({
        "name" : document.getElementById('name').value,
        "dimension" : document.getElementById('width').value + 'x' + document.getElementById('height').value,
        "size" : "-",
        "lastModified" : dateNow.substring(0, dateNow.length - 31)
      }); 
      bannerData.set(dataToUpdate);
      closeModel();
    }
</script>

<div class="modal {active ? 'show' : 'd-none'}" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-warning justify-content-center">
          <slot name="header">
            <h5 class="modal-title">Modal title</h5>
          </slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" on:click = {closeModel}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="body">
            <p>Modal body text goes here.</p>
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button
            type="button"
            class="btn btn-primary"
            on:click={saveData}>create</button>
          </slot>
        </div>
      </div>
    </div>
  </div>

