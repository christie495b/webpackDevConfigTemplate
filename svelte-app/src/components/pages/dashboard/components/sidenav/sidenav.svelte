<script>
    import './sidenav.scss';
    import Snbutton from '../snbutton/snbutton.svelte';
</script>
<nav class="collapse bd-links" id="bd-docs-nav" aria-label="Main navigation">
    <div class="bd-toc-item">
        <a class="bd-toc-link" href="/docs/4.5/getting-started/introduction/">
            <Snbutton className="btn-light btn-block">DASH BOARD</Snbutton>
        </a>
  </div>
  <div class="bd-toc-item active">
    <a class="bd-toc-link" href="/docs/4.5/layout/overview/">
        <Snbutton className="btn-light btn-block active">ASSETS</Snbutton>
    </a>

    <ul class="nav bd-sidenav"><li>
          <a href="/docs/4.5/layout/overview/">
            Overview
          </a>
        </li>
        <li class="active bd-sidenav-active">
          <a href="/docs/4.5/layout/grid/">
            Grid
          </a>
        </li><li>
          <a href="/docs/4.5/layout/utilities-for-layout/">
            Utilities for layout
          </a>
        </li></ul>
  </div>
  </nav>