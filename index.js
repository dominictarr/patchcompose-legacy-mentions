var mentions = require('ssb-mentions')

exports.gives = {
  compose: { post: true }
}

exports.create = function () {
  return { compose: { post: function (content) {
    var m = mentions(content.text)
    if(!content.mentions) content.mentions = m
    return content
  }}}
}



