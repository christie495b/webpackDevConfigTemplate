<script lang="ts">
  import "./header.scss";
	import Link from './router/Link.svelte';
</script>



<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <span class="navbar-brand">Navbar</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" page={{path: '/', name: 'Home'}} />
      </li>
      <li class="nav-item">
        <Link class="nav-link" page={{path: '/about', name: 'About'}} />
      </li>
    </ul>
  </div>
</nav>
