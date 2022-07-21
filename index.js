var loaderUtils = require('loader-utils')
module.exports = function (content) {
  if (this.cacheable) {
    // 如果有缓存就启用缓存
    this.cacheable()
  }

  // 获取和打印 options
  var options = loaderUtils.getOptions(this) || {}
  console.log('options:', options)

  var useStrictPrefix = "'use strict'; \n\n"
  return useStrictPrefix + content
}
