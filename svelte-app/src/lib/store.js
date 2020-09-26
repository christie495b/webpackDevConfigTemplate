import { writable } from 'svelte/store';

export const bannerData = writable([
    {
        name : 'xxx',
        dimension : '160x600',
        size : '500kb',
        lastModified : ''
    },{
        name : 'xxx',
        dimension : '728x90',
        size : '500kb',
        lastModified : ''
    }
]);