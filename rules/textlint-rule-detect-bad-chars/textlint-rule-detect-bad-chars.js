const toString = require('mdast-util-to-string')

module.exports = context => {
  return {
    [context.Syntax.Str]: node => {
      const text = toString(node)
      const index = text.indexOf('')
      if (index >= 0) {
        context.report(
          node,
          new context.RuleError(
            'ダメ文字 (U+0008) が存在しています。' + '削除してください。',
            { index }
          )
        )
      }
    }
  }
}
