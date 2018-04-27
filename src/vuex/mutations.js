import * as types from './mutation-types'

export default {
  [types.SET_NEWS] (state, data) {
    state.length = data.length
    state.limit = data.limit
    state.skip = data.skip
    state.category = data.category
    state.pageNumber = data.pageNumber
    // state.news.push(data.items)
    state.news = data.items
  },

  [types.SET_CATEGORY] (state, data) {
    const path = state.route.path
    state.length = data.length
    state.limit = data.limit
    state.skip = data.skip
    state.pages[path] = { category: data.category, items: data.items }
    state.pageNumber = data.pageNumber
    // state.news.push(data.items)
  },

  [types.SET_ARTICLE] (state, data) {
    const path = state.route.path
    state.pages[path] = data.item.data
  },

  [types.SET_PAGE_NUMBER] (state, value) {
    state.pageNumber = value
  },

  [types.RESTORE_MUTATION] (state, data) {
    state.drawer = data.drawer
    state.pages = data.pages
    state.article = data.article
    state.pageNumber = data.pageNumber
  },

  [types.SET_ONLINE] (state) {
    state.offline = false
  },

  [types.SET_OFFLINE] (state) {
    state.offline = true
  }
}
