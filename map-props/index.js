export const mapProps = function (propsNames) {
  if (!Array.isArray(propsNames)) {
    throw new Error('Import module must be an Array')
  }

  return propsNames.reduce((acc, elm) => {
    // eslint-disable-next-line
    if (!globalThis.vm['_globalProps'][elm]) {
      return acc
    }

    acc = {
      ...acc,
      [elm]: {
        // eslint-disable-next-line
        ...globalThis.vm['_globalProps'][elm]
      }
    }
    return acc
  }, {})
}

export const mapPropsPlugin = {
  install (Vue, props) {
    // eslint-disable-next-line
    globalThis.vm['_globalProps'] = props
  }
}
