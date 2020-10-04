<script>
  import "./sidenav.scss";
  import Snbutton from "../snbutton/snbutton.svelte";
  import Link from "../../pages/dashboard/router/Link.svelte";
  import { dashRoute } from '../../pages/dashboard/router/store/index.js';

  // images
  import upload from './assets/img/Icon-feather-upload.svg';
  import review from './assets/img/Icon feather-info.svg';
  import events from './assets/img/Icon feather-external-link.svg';

  let url;
  dashRoute.subscribe(value => {
   url =  value;
  })
</script>

<style>
  .btn{
    font-size: 0.8em;
  }
</style>

<nav class="collapse bd-links" id="bd-docs-nav" aria-label="Main navigation">
  <div class="bd-toc-item">
    <!-- <a class="bd-toc-link" href="/docs/4.5/getting-started/introduction/"> -->
      <Link page={{ path: '/', name: 'DashoardMain',className: 'bd-toc-link' }}>
        <Snbutton className="btn-primary btn-block">DASH BOARD</Snbutton>
      </Link>
    <!-- </a> -->
  </div>
  <div class="bd-toc-item { url == '/events' || url == '/upload' || url == '/review'  ? 'active' : '' }">
    <a class="bd-toc-link" href="/">
      <Snbutton className=" btn-block { url == '/events' || url == '/upload' || url == '/review'  ? 'active btn-light' : 'btn-primary' }">ASSETS</Snbutton>
      <!-- <Link  page={{path: '/dashboard', name: 'Dashboard'}}>ASSETS</Link> -->
    </a>

    <ul class="nav bd-sidenav subnav">
      <li>
        <Link  page={{path: '/upload', name: 'UploadAssets', className: 'bd-toc-link pt-4 d-flex justify-content-center'}}>
          <button class="btn btn-light btn-block d-flex justify-content-around align-items-center { url == '/upload' ? 'active' : '' }">
            <img src={upload} alt="click icon to reiect to upload zip page"/>
            Upload Zip File
          </button>
        </Link>
      </li>
      <li>
        <Link  page={{path: '/review', name: 'ReviewAssets', className: 'bd-toc-link pt-4 d-flex justify-content-center'}}>
          <button class="btn btn-light btn-block d-flex justify-content-around align-items-center { url == '/review' ? 'active' : '' }">
            <img src={review} alt="click icon to reiect to upload zip page"/>
            Review files
          </button>
        </Link>
      </li>
      <li>
        <Link  page={{path: '/events', name: 'Events', className: 'bd-toc-link pt-4 d-flex justify-content-center'}}>
          <button class="btn btn-light btn-block d-flex justify-content-around align-items-center  { url == '/events' ? 'active' : '' }">
            <img src={events} alt="click icon to reiect to upload zip page"/>
            Events
          </button>
        </Link>
      </li>
      <!-- <li class="active bd-sidenav-active">
        <a href="/docs/4.5/layout/grid/"> Grid </a>
      </li>
      <li>
        <a href="/docs/4.5/layout/utilities-for-layout/">
          Utilities for layout
        </a>
      </li> -->
    </ul>

    <div class="subnav-mask"></div>
  </div>
</nav>
