export const fetchData = () => {
    return new Promise((resolve, _) => setTimeout(() => {
        resolve([
            {
                id: 0,
                title: '吃饭'
            }, {
                id: 1,
                title: '睡觉'
            }, {
                id: 2,
                title: '写代码'
            }
        ])}, 500));
}