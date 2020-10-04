<script>
    import './modal.scss'
    import { bannerData, modelOpen } from '../../lib/store.js'; 
    export let active;

    import { createEventDispatcher } from 'svelte';

    let alert =false, unique = false;


    function sanitizeData(callback){
      let dateNow = new Date(Date.now()).toString();
      let name = document.getElementById('name').value;

      if(name === ''){
        return;
      }

      if(name !== ''){
        let bannerDataRef = $bannerData;
        unique = bannerDataRef.some(data => data.name  === name);
        if(unique){
          return true;
        }
      }

      let width = document.getElementById('width').value;

      if(width === ''){
        return;
      }

      let height = document.getElementById('height').value;

      if(height === ''){
        return;
      }

      let lastModified = dateNow.substring(0, dateNow.length - 31),
      dimension = width + 'x' + height;

      

      return {
        "name" : name,
        "dimension" : dimension,
        "size" : "-",
        "lastModified" : lastModified,
        "files":[],
        "events":[]
      }

    }

    const dispatch = createEventDispatcher();
    function closeModel() {
        modelOpen.set(false)
        dispatch('message', {
          state: false
        });
    }
    
    function saveData() {
      let dataToUpdate = $bannerData,
      updatedData = sanitizeData();
      alert = updatedData === undefined ? true : false;
      if(alert | unique){
        return;
      }
      dataToUpdate.push(updatedData); 
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
          <div class="alert alert-danger { alert ? '' : 'd-none'}" role="alert">
            All input fields are required
          </div>
          <div class="alert alert-danger { unique ? '' : 'd-none'}" role="alert">
            Please enter a uniquie name!
          </div>
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

