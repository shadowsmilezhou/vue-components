module.exports = {
    base:'/vue-components/',
    title: 'UI组件库',
    description: '实现基础组件库，可在项目中复用',
    themeConfig: {
        nav:[
            {text:'主页',link:'/'},
            {text:'GitHub',link:'https://github.com/shadowsmilezhou/vue-components'},
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
                collapsable: false,
                children:[
                    {
                        title:'基础',
                        collapsable: false,
                        children:['/components/button','/components/icon']

                    },
                    {
                        title:'布局',
                        collapsable: false,
                        children:[
                            '/components/grid',
                            '/components/layout',
                            '/components/waterfall'
                        ]

                    },
                    {
                        title:'导航',
                        collapsable: false,
                        children:[
                            '/components/nav',
                            '/components/tabs',
                            '/components/pager'
                        ]

                    },
                    {
                        title:'数据展示',
                        collapsable: false,
                        children:[
                            '/components/popover',
                            '/components/slider',
                            '/components/table',
                            '/components/lazyLoading',
                            '/components/scroll',
                            '/components/toast',
                            '/components/sticky',
                            '/components/collapse',

                        ]

                    },
                    {
                        title:'数据录入',
                        collapsable: false,
                        children:[
                            '/components/cascader',
                            '/components/input',
                            '/components/uploade',
                            '/components/datepicker',


                        ]

                    },

                ]
            },

        ]


    }

};