<script>
    import { onDestroy } from 'svelte';
    import { modelOpen } from '../../lib/store.js'; 
    export let className;
    import "./snbutton.scss";

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let state = false;
    const unsubscribe = modelOpen.subscribe(value => {
		state = value;
    });
    
    onDestroy(unsubscribe);
    
    function toggleModel() {
        state = !state;
        modelOpen.set(state);
        // console.log('clicked >>>>>', state)
        dispatch('message', {
			state: state
		});
    }
    
</script>



<button type="button" class="btn {className}" on:click={toggleModel}><slot></slot></button>