import { writable } from 'svelte/store';

export const bannerData = writable([
    {
        name : '160x600',
        dimension : '160x600',
        size : '500kb',
        lastModified : '',
        files:[
            {
                name: 'index.html',
                type: 'HTML',
                dimension: '300x600',
                size:'50'
            },
            {
                name: 'Fallback Image',
                type: 'JPG',
                dimension: '300x600',
                size:'50'
            }
        ],
        events:[
            {
                exitId: 'clickPi',
                url: 'http://www.google.com'
            },
            {
                exitId: 'clickGSKLogo',
                url: 'http://www.gskPro.com'
            }
        ],

    },
    {
        name : '728x90',
        dimension : '728x90',
        size : '500kb',
        lastModified : '',
        files:[],
        events:[],
    },
    {
        name : '300x600',
        dimension : '300x600',
        size : '500kb',
        lastModified : '',
        files:[
            {
                name: 'index.html',
                type: 'HTML',
                dimension: '300x600',
                size:'50'
            },
            {
                name: 'Fallback Image',
                type: 'JPG',
                dimension: '300x600',
                size:'50'
            },
            {
                name: 'Fallback Image',
                type: 'JPG',
                dimension: '300x600',
                size:'50'
            },
            {
                name: 'Fallback Image',
                type: 'JPG',
                dimension: '300x600',
                size:'50'
            }
        ],
        events:[
            {
                exitId: 'clickPi',
                url: 'http://www.google.com'
            }
        ],
    },
    {
        name : '160x300',
        dimension : '160x600',
        size : '500kb',
        lastModified : '',
        files:[
            {
                name: 'index.html',
                type: 'HTML',
                dimension: '300x600',
                size:'50'
            },
            {
                name: 'Fallback Image',
                type: 'JPG',
                dimension: '300x600',
                size:'50'
            }
        ],
        events:[
            {
                exitId: 'clickPi',
                url: 'http://www.google.com'
            },
            {
                exitId: 'clickGSKLogo',
                url: 'http://www.gskPro.com'
            }
        ],

    },
    {
        name : '728x50',
        dimension : '728x90',
        size : '500kb',
        lastModified : '',
        files:[],
        events:[],
    },
    {
        name : '300x50',
        dimension : '300x600',
        size : '500kb',
        lastModified : '',
        files:[
            {
                name: 'index.html',
                type: 'HTML',
                dimension: '300x600',
                size:'50'
            },
            {
                name: 'Fallback Image',
                type: 'JPG',
                dimension: '300x600',
                size:'50'
            },
            {
                name: 'Fallback Image',
                type: 'JPG',
                dimension: '300x600',
                size:'50'
            },
            {
                name: 'Fallback Image',
                type: 'JPG',
                dimension: '300x600',
                size:'50'
            }
        ],
        events:[
            {
                exitId: 'clickPi',
                url: 'http://www.google.com'
            }
        ],
    }
]);

export const currentState = writable([
    []
])

export const modelOpen = writable(false);