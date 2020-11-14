// .vuepress/config.js
module.exports = {
    base: '/',
    title: '任何一种技艺达到完美 都会令人无法抗拒',
    plugins: [
        ['mermaidjs'],
        ['@vuepress/back-to-top'],
        ['@vuepress/last-updated'],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
          }],
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }]
    ],
    themeConfig: {
        lastUpdated: '最近更新时间',
        nav: [
            { text: '主页', link: '/' },
            {
                text: '内心的平和',
                ariaLabel: '内心的平和菜单',
                items: [
                    { text: '战士', link: '/innerpeace/warrior/' },
                    { text: '桜', link: '/innerpeace/sakura/' },
                ]
            },
            { text: 'GoLang', link: '/develop/go/' },
            { text: 'Flutter', link: '/develop/flutter/' },
            {
                text: '猿起',
                ariaLabel: '猿起菜单',
                items: [
                    { text: 'Vue', link: '/develop/vue/' },
                    { text: 'Node', link: '/develop/node/' },
                    { text: 'MySql', link: '/develop/mysql/' },
                    { text: 'ThreeJS', link: '/develop/threejs/' },
                    { text: '工具', link: '/develop/tool/' },
                    { text: 'Mac', link: '/develop/mac/' },
                    { text: 'VBA', link: '/develop/vba/' },
                ]
            },
            {
                text: '关于',
                ariaLabel: '关于菜单',
                items: [
                    { text: '关于', link: '/about/' },
                    { text: '收藏夹', link: '/about/favirate.md' },
                    { text: '测试', link: '/test/' },
                    { text: '哪一站', link: 'http://www.sunjiashu.com' },
                ]
            },
        ],
        sidebarDepth: 2,
        sidebar: {
            '/innerpeace/warrior/': [{
                title: '战士',
                collapsable: true,
                children: [
                    { title: '战士', path: '/innerpeace/warrior/' },
                ]
            }],
            '/innerpeace/sakura/': [{
                title: '桜',
                collapsable: true,
                children: [
                    { title: '桜', path: '/innerpeace/sakura/' },
                    { title: 'OnePiece', path: '/innerpeace/sakura/onepiece/' },
                ]
            }],
            '/develop/go/': [{
                title: 'GoLang',
                collapsable: true,
                children: [
                    { title: 'Go语言', path: '/develop/go/' },
                    { title: 'GoFrame', path: '/develop/go/goframe.md' },
                    { title: 'go-astilectron', path: '/develop/go/go-astilectron.md' },
                    { title: 'Go语言代码片段', path: '/develop/go/go_code_snippets.md' },
                ]
            }],
            '/develop/flutter/': [{
                title: 'Flutter',
                collapsable: true,
                children: [
                    { title: 'Flutter', path: '/develop/flutter/' },
                ]
            },
            {
                title: 'go-flutter',
                collapsable: true,
                children: [
                    { title: 'hello, go-flutter', path: '/develop/flutter/go-flutter/' },
                    { title: '(1) 第一个桌面应用', path: '/develop/flutter/go-flutter/1_first_desktop_app.md' },
                    { title: '(2) 编写go-flutter插件', path: '/develop/flutter/go-flutter/2_create_plugin.md' },
                ]
            }],
            '/develop/vue/': [{
                title: 'Vue',
                collapsable: true,
                children: [
                    { title: 'Vue', path: '/develop/vue/' },
                    { title: 'VuePress', path: '/develop/vue/vuepress.md' },
                    { title: 'VuePress问题', path: '/develop/vue/vuepressxp.md' },
                ]
            }],
            '/develop/node/': [{
                title: 'Node',
                collapsable: true,
                children: [
                    { title: 'Node', path: '/develop/node/' },
                    { title: 'electron', path: '/develop/node/electron.md' },
                ]
            }],
            '/develop/mysql/': [{
                title: 'MySql',
                collapsable: true,
                children: [
                    { title: 'MySql', path: '/develop/mysql/' },
                ]
            }],
            '/develop/threejs/': [{
                title: 'ThreeJS',
                collapsable: true,
                children: [
                    { title: 'ThreeJS', path: '/develop/threejs/' },
                ]
            }],
            '/develop/tool/': [{
                title: '工具',
                collapsable: true,
                children: [
                    { title: '工具', path: '/develop/tool/' },
                    { title: 'git', path: '/develop/git/' },
                ]
            }],
            '/develop/vba/': [{
                title: 'VBA',
                collapsable: true,
                children: [
                    { title: '基础', path: '/develop/vba/basic/' },
                    { title: '共通', path: '/develop/vba/common.md' },
                    { title: 'Windows API', path: '/develop/vba/api.md' },
                    { title: '文件操作', path: '/develop/vba/file.md' },
                    { title: 'WScript.Shell', path: '/develop/vba/wscript.md' },
                ]
            }],
            '/foo/': [{
                title: 'SS Title',
                collapsable: false,
                children: [
                    { title: 'one', path: '/foo/one.md' },
                    { title: 'two', path: '/foo/two.md' }
                ]
            }],
            '/test/': [{
                title: 'TEST Title',
                collapsable: true,
                children: [
                    { title: '1A1', path: '/test/test1/1A1.md' },
                    { title: '1A2', path: '/test/test1/1A2.md' }
                ]
            }, {
                title: 'TEST 2B Title',
                collapsable: true,
                children: [
                    { title: '2B1', path: '/test/test2/testB/2B1.md' },
                    { title: '2B2', path: '/test/test2/testB/2B2.md' }
                ]
            }, {
                title: 'TEST 2C Title',
                collapsable: true,
                children: [
                    { title: '2C1', path: '/test/test2/testC/2C1.md' },
                    { title: '2C2', path: '/test/test2/testC/2C2.md' }
                ]
            }]
        }
    }
}