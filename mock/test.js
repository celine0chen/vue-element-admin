const list = [
  {
    name: "allen",
    phone: "18072709968",
    tname: "徐敏超",
    subject: "-",
    position: "项目经理",
    year: "10年",
    inputtime: "2021-08-31 17:50:13",
    op: "查看｜编辑｜删除"
  },
  {
    name: "Ryan",
    phone: "18072709968",
    tname: "李日成",
    subject: "-",
    position: "产品经理",
    year: "10年",
    inputtime: "2021-08-30 17:50:13",
    op: "查看｜编辑｜删除"
  },
  {
    name: "allen",
    phone: "18072709968",
    tname: "孟金桥",
    subject: "-",
    position: "技术专家",
    year: "10年",
    inputtime: "2021-08-29 17:50:13",
    op: "查看｜编辑｜删除"
  }
]

module.exports = [
  {
    url: '/test',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list

        }

      }
    }
  }
]