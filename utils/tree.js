const tree = {
    flatToTree(data, topid, maxlevel = 0) {
        const _data = JSON.parse(JSON.stringify(data))
        const parid = 'pid'
        // 这种方式不能计算深度，参考：https://zhuanlan.zhihu.com/p/99911823，https://github.com/zTree/zTree_v3/blob/master/js/jquery.ztree.core.js#L706
        const result = []
        const map = {}
        _data.forEach((item, i) => map[item.id] = i)
        _data.forEach(item => {
            if (item[parid] === topid) {
                result.push(item)
            } else {
                const parent = _data[map[item[parid]]]
                parent && (parent.children ? parent.children.push(item) : parent.children = [item])
            }
        })
        return result
    }
}
module.exports = tree;
