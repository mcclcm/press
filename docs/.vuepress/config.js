/*
 * @Author: mcclcm
 * @Date:   2019-12-10 17:06:33
 * @Last Modified by:   mcclcm
 * @Last Modified time: 2019-12-10 18:13:55
 */

'use strict';
module.exports = {

    title: 'Vue Press', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
    description: 'Mcclcm Press', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', {
            rel: 'icon',
            href: '/img/m.ico'
        }],
    ],
    base: '/press/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
        // 顶部导航栏
        nav: [
            // 单项 text：显示文字，link：指向链接
            // 这里的'/' 指的是 docs文件夹路径
            // [以 '/' 结尾的默认指向该路径下README.md文件]
            {
                text: 'Demo',
                link: '/demo/'
            }, // http://localhost:8080/Wiki1001Pro/FAQ/
            {
                text: 'Demo1',
                link: '/demo1/'
            }, {
                text: 'Demo2',
                link: '/demo2/'
            },
            // 多项，下拉形式
            {
                text: 'Concat',
                items: [
                    // link：指向链接也可以是外网链接
                    {
                        text: 'Mcclcm',
                        link: 'https://github.com/mcclcm'
                    },
                ]
            }, {
                text: 'GitHub',
                items: [{
                    text: 'GitHub首页',
                    link: 'https://github.com/mcclcm'
                }]
            },
        ],

        // 侧边栏菜单( 一个模块对应一个菜单形式 )
        sidebar: {
            // 打开FAQ主页链接时生成下面这个菜单
            '/demo/': [
                //多级菜单形式
                {
                    // 菜单名
                    title: 'child',
                    // 子菜单
                    children: [
                        // ['','']=>[路径,标题]
                        // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                        // 不以 '/' 结尾的就是指向.md文件
                        ['/demo/child/child', 'child'], // '/FAQ/DigestionHeap/Digested.md'文件
                        ['/demo/child/child1', 'child1'],
                        ['/demo/child/child2', 'child2']
                    ]
                }, {
                    title: 'child1',
                    children: [
                        ['/demo/child1/', '#child1'],
                        ['/demo/child2/', '#child2']
                    ]
                }
            ],
            // 打开Thought主页链接时生成下面这个菜单
            '/demo1/': [
                ['/demo1/', 'demo1首页'], {
                    title: 'demo1-child',
                    children: [
                        ['/demo1/child/', 'demo1-child'],
                    ]
                }, {
                    title: 'demo1-child1',
                    children: [
                        ['/demo1/child1/', 'child1'],
                        ['/demo1/child2/', 'child2']
                    ]
                },
            ],
            // 打开Store主页链接时生成下面这个菜单
            '/demo2/': [
                ['', 'demo2首页'], {
                    title: 'demo2',
                    children: [
                        ['/demo2/child/', 'child'],
                        ['/demo2/child1/', 'child1']
                    ]
                },
            ]
        },
    },
}