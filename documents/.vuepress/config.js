var CONST = require("./const");

module.exports = {
  title: `Today Young Learned`,
  description: `Taeyoung's Personal Wiki (Today I Learned)`,
  base: "/",
  dest: 'build',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      // ##########월간 정리 본
      // {
      //   title: 'Monthly I Learned',
      //   children: CONST.MILList
      // },


      {
        title: 'JavaScript',
        // children: CONST.JavaScriptList
      }, {
        title: 'Java',
        children: CONST.JavaList
      }, {
        title: 'Python',
        // children: CONST.PythonList
      }, {
        title: 'SQL',
        children: CONST.SQLList
      }, {
        title: 'Vive Coding',
        // children: CONST.ViveCodingList
      }, {
        title: 'Daily Algorithm',
        // children: CONST.DailyAlgorithmList
      }, {
        title: 'Git',
        // children: CONST.GitList
      }, {
        title: 'Network',
        // children: CONST.NetworkList
      }, {
        title: 'DevOps',
        // children: CONST.DevOpsList
      }, {
        title: 'ETC',
        // children: CONST.ETCList
      },
    ],
    nav: [{
      text: 'GitHub',
      link: 'https://github.com/lazzzyoung/'
    },
      // {
      //   text: 'Blog',
      //   link: 'https://milooy.wordpress.com/'
      // }
    ]
  },
}