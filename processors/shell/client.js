
const template = `
<button v-on:click="count++">You clicked me {{ count }} times.</button>
`;

/**
 * 这个main函数会在前端被回调
 * @param {String} componentName 组建名称 一个类似于comps-0000的字符串
 */
function main (componentName) {
    Vue.component(componentName, {
        data: function () {
            return {
                count: 0
            };
        },
        template,
    });
}
