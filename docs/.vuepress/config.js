// docs/.vuepress/config.js
module.exports = {
    title: "blog",
    description: "学习记录",
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        sidebar: [
            {
                title: 'Android',
                children: ['/Android/SELinux配置'],
                initialOpenGroupIndex: 0 // 可选的, 默认值是 0
            },
            {
                title: 'C++',
                children: ['/C++/数据结构'],
                initialOpenGroupIndex: 0 // 可选的, 默认值是 0
            }
        ]
    },
};