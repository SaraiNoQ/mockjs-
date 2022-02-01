import Mock from 'mockjs'

// const { data } = Mock.mock({
//     'data|6': [
//         {
//             bookname: '@ctitle()',
//             author: '@ctitle()',
//             dynasty: '@ctitle()',
//             version: '@date(yyyy-MM-dd)',
//             detailinfo: '@cparagraph(1,2)'
//         },
//     ],
// })

Mock.mock(/book\/getBookInfo/, 'get', () => {
    // const pageIndex = options.url.slice(17, 18)
    // console.log(pageIndex)
    const { data } = Mock.mock({
        'data|6': [
            {
                bookname: '@ctitle()',
                author: '@cname()',
                dynasty: '@cword(1,3)',
                version: '@date(yyyy-MM-dd)',
                detailinfo: '@cparagraph(1,2)'
            },
        ],
    })
    return {
        status: 200,
        message: "获取图书列表成功",
        data: data,
        // 需要多少数据就在这填，需要根据分页数量调整
        total: 20
    };
})