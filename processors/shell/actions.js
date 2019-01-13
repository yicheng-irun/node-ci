

/**
 * from表单提交的data
 */
module.exports = function (data, StdWriter) {
    return new Promise((resolve) => {
        StdWriter('控制台信息<span style="color:#f00;" >asdfaf</span>');
        setTimeout(function () {
            resolve();
        }, 1000);
    });
};
