import cookies from './util.cookies'


const util = {
    cookies,
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */

util.title = function (titleText) {
    document.title = `${titleText}`
}



export default util
