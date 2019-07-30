export default {
  props: {
    width: {
      type: String,
      required: false,
      default () {
        return '110'
      }
    },
    height: {
      type: String,
      required: false,
      default () {
        return '40'
      }
    },
    fontSize: {
      type: String,
      required: false,
      default () {
        return '10px'
      }
    },
    fontColor: {
      type: String,
      required: false,
      default () {
        return '#ffffff'
      }
    },
    backgroundColor: {
      type: String,
      required: false,
      default () {
        return '#ffffff'
      }
    },
    borderRadius: {
      type: String,
      required: false,
      default () {
        return '50%'
      }
    },
    borderStyle: {
      type: String,
      required: false,
      default () {
        return '2px solid #fffff'
      }
    },
    borderColor: {
      type: String,
      required: false,
      default () {
        return '#ffffff'
      }
    },
    isPositionAbsolute: {
      type: Boolean,
      required: false,
      default () {
        return false
      }
    },
    top: {
      type: String,
      required: false,
      default () {
        return '0px'
      }
    },
    left: {
      type: String,
      required: false,
      default () {
        return '0px'
      }
    },
    padding: {
      type: String,
      required: false,
      default () {
        return '0px'
      }
    }
  },
  computed: {
    takeWidth () {
      let splittedWidth = this.width.split('')
      if (splittedWidth.indexOf('%') !== -1) {
        return { width: `${this.width}` }
      }
      return { width: `${this.width}px` }
    },
    takeHeight () {
      let splittedHeight = this.height.split('')
      if (splittedHeight.indexOf('%') !== -1) {
        return { height: `${this.height}` }
      }
      return { height: `${this.height}px` }
    },
    takeFontSize () {
      return { fontSize: `${this.fontSize}px` }
    },
    takeFontColor () {
      return { color: `${this.fontColor}` }
    },
    takeBackgroundColor () {
      return { backgroundColor: `${this.backgroundColor}` }
    },
    takeBorderRadius () {
      return { borderRadius: `${this.borderRadius}` }
    },
    takeBorderStyle () {
      return { borderStyle: `${this.borderStyle}` }
    },
    takeBorderColor () {
      return { borderColor: `${this.borderColor}` }
    },
    takePadding () {
      return { padding: `${this.padding}` }
    },
    takePositionAbsolute () {
      if (!this.isPositionAbsolute) {
        return {}
      }
      return {
        top: `${this.top}`,
        left: `${this.left}`
      }
    }
  }
}
