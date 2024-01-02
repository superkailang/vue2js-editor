import VueJSEditor from './VueJsEditor'
import E from './assets/js/wangEditor.js'
import './assets/css/wangEditor.css'

const instance = VueJSEditor

const install = (Vue, globalOptions) => {
  let compName = instance.name
  if (globalOptions) {
    compName = globalOptions.name || compName
    instance.props.globalOptions.default = () => globalOptions
  }
  Vue.component(compName, instance)
}
instance.install = install
export default instance
export { E, instance, install }
