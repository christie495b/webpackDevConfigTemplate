<script>
    import "./searchBar.scss";
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    // import page1 from './img/Page-1.svg';

    const onFocused = () => {
        dispatch('search', {
			state: 'active'
		});
    }

    const handleOnChange = (e) => {
        dispatch('search', {
            state: 'change',
            data: e.target.value
		});
    }
</script>

<div class="input-group mb-3">
    <input 
            type="text" 
            class="form-control searchBar" 
            placeholder="Search.." 
            aria-label="Search.." 
            aria-describedby="button-addon2"
            on:focus={onFocused}
            on:change={handleOnChange}
            >
    <span class="search"></span>
</div>