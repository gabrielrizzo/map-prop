# MapProps
A lib to generate on-demand props for VueJs components

Why should I use this lib? 
* It helps to make your props from mixins more explict, easier to mantain and you just import what you want :)

How to use it ?

First, you need to create an file to be your source, with the props you want to import

```
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
    }
}
```
then, you need to import it on main.js and register the lib plugin like that
```
import { mapPropsPlugin } from 'map-props'

const { props, computed } = mixin
Vue.use(mapPropsPlugin, props)
```

Finally, just use it inside your component !!!
```
computed: {
    ...mapProps(['width', 'height'])
 }
```

To upgrade this lib to it's full potencial, consider using mapComputed :)
https://github.com/gabrielrizzo/map-computed
