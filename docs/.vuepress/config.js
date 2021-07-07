module.exports = {
    base: '/ZhaiUI/',
    title: '宅 UI',
    description: '一个基于 Vue2 的 UI 框架',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    ['/install/', '安装'],
                    ['/get-started/', '快速上手'],
                ]
            },
            {
                title: '组件',
                children: [
                    ['/components/button', '按钮']
                ]
            }
        ]
    }
}