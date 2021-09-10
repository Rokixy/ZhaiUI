module.exports = {
    base: '/ZhaiUI/',
    title: '宅 UI',
    description: '一个基于 Vue2 的 UI 框架',
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '快速上手', link: '/get-started/' },
            { text: 'GitHub', link: 'https://github.com/Rokixy/ZhaiUI' },
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/install/', '安装'],
                    ['/get-started/', '快速上手'],
                ]
            },
            {
                title: '组件',
                sidebarDepth: 0,
                collapsable: false,

                children: [
                    '/components/button',
                    '/components/tabs',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/popover',
                    '/components/collapse',
                ]
            }
        ]
    }
}