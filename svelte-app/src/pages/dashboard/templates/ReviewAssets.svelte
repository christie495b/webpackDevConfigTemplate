<script>

    import DashboardHeader from  "../../../components/DashboardHeader/DashboardHeader.svelte";
    import Stats from "../../../components/stats/stats.svelte";
    import ReviewTable from '../../../components/ReviewTable/ReviewTable.svelte';
    import { currentState } from '../../../lib/store.js';
    import Link from "../../../pages/dashboard/router/Link.svelte";
  
    let creativeName = $currentState.name;
    let bannerData = $currentState;
    console.log(bannerData.files.reduce(function(a, b){

        return a + parseInt(b.size);
    }, 0))
        
  </script>
<DashboardHeader {creativeName}/>

<div class="assetSize">
    <Stats headerText = {"Total File Size"} >
        {
            bannerData.files.reduce(function(a, b){
                return a + parseInt(b.size);
            }, 0)
        }kb
    </Stats>
    <Stats headerText = {"Zip File Size"} >
        {bannerData.size}
    </Stats>
    <Stats headerText = {"Tota number of Files"} >{bannerData.files.length}</Stats>
</div>

<ReviewTable />

<Link  page={{path: '/events', name: 'Events', className: 'bd-toc-link d-flex justify-content-center'}}>
    <button class="review-to-events btn btn-dark btn-block d-flex justify-content-around align-items-center">
      <!-- <img src={events} alt="click icon to reiect to upload zip page"/> -->
      NEXT
    </button>
  </Link>