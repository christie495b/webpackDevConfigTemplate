<script>
    import './snbutton.scss';
    export let className;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let state = false;
    function toggleModel() {
        state = !state;
        dispatch('message', {
			state: state
		});
	}
</script>


<button type="button" class="btn {className}" on:click={toggleModel}><slot></slot></button>