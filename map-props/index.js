// import mixin from '../propsExample'
// const { props } = mixin
const mapProps = (props) => {

  const getProps = function (propsNames) {
    if (!Array.isArray(propsNames)) {
      throw new Error('Import module must be an Array')
    }

    return propsNames.reduce((acc, elm) => {
      if (!props[elm]) {
        return acc
      }

      acc = {
        ...acc,
        [elm]: {
          ...props[elm]
        }
      }
      return acc
    }, {})
  }

  return {
    getProps
  }
}

export default mapProps
