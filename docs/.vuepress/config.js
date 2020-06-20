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
        lastUpdated: '最新提交时间',
        nav: [
            { text: '主页', link: '/' },
            { text: '平和', link: '/innerpeace/' },
            { text: '猿起', link: '/develop/' },
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
        sidebarDepth: 3,
        sidebar: {
            '/innerpeace/': [{
                title: '平和',
                collapsable: true,
                children: [
                    { title: 'OnePiece', path: '/innerpeace/onepiece/' },
                    {
                        title: '桜',
                        path: '/innerpeace/sakura/'
                    },
                    {
                        title: '战士',
                        path: '/innerpeace/warrior/'
                    },
                    
                ]
            }],
            '/develop/': [{
                title: '猿起',
                path: '/develop/'
            }, {
                title: 'GoLang',
                collapsable: true,
                children: [
                    { title: 'GoLang', path: '/develop/go/' },
                    { title: 'go-astilectron', path: '/develop/go/go-astilectron.md' },
                ]
            }, {
                title: 'Vue',
                collapsable: true,
                children: [
                    { title: 'Vue', path: '/develop/vue/' },
                    { title: 'VuePress', path: '/develop/vue/vuepress.md' },
                    { title: 'VuePress问题', path: '/develop/vue/vuepressxp.md' },
                ]
            }, {
                title: 'Node',
                collapsable: true,
                children: [
                    { title: 'Node', path: '/develop/node/' },
                    { title: 'electron', path: '/develop/node/electron.md' },
                ]
            },{
                title: 'ThreeJS',
                collapsable: true,
                children: [
                    { title: 'ThreeJS', path: '/develop/threejs/' },
                ]
            }, {
                title: '工具',
                collapsable: true,
                children: [
                    { title: '工具', path: '/develop/tool/' },
                    { title: 'git', path: '/develop/git/' },
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