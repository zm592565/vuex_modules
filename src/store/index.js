
import basicInfo from './modules/basicInfo'
import index from './modules/index'
export default new Vuex.Store({
  state: {
    rootstate:'root'  
  },  
  modules: {
    basicInfo,
    index
  }
})