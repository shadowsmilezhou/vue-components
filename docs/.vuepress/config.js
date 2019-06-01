module.exports = {
    base:'/vue-components/',
    title: 'UI组件库',
    description: '实现基础组件库，可在项目中复用',
    themeConfig: {
        nav:[
            {text:'主页',link:'/'},
            {text:'文档',link:'/guide/'},
        ],
        sidebar:[
            {
              title:'入门',
                children: [
                    '/install/',
                    '/get-start/',
                ]
            },

            {
                title:'组件',
                children:[
                    '/components/button',
                    '/components/grid',
                    '/components/input',
                    '/components/layout',
                    '/components/popover',
                    '/components/tabs',
                    '/components/toast',
                ]
            },

        ]


    }

};