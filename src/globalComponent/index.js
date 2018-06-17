import GlLoading from './loading/index.js'

const components = [
  GlLoading
]

const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const modulesExport = {
  install,
  GlLoading
}

export default {...modulesExport}