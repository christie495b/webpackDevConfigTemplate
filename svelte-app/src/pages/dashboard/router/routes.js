import DashboardMain from '../templates/DashboardMain.svelte';
import UploadAssets from '../templates/UploadAssets.svelte';
import ReviewAssets from '../templates/ReviewAssets.svelte';
import Events from '../templates/Events.svelte';



export default [
    {
        path: '/',
        name: 'DashoardMain',
        component: DashboardMain,
    }, {
        path: '/upload',
        name: 'UploadAssets',
        component: UploadAssets,
    }, {
        path: '/review',
        name: 'ReviewAssets',
        component: ReviewAssets,
    }, {
        path: '/events',
        name: 'Events',
        component: Events,
    }

]
 
