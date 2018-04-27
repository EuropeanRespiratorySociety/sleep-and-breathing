import * as types from './mutation-types'
import { HTTP } from '../helpers/http'

export const getNews = ({ commit, dispatch }, payload) => {
  let data = {skip: 0, pageNumber: 1}
  if (payload.pageNumber > 1) {
    data.pageNumber = payload.pageNumber
    data.skip = payload.limit * data.pageNumber
  }
  const route = `${payload.slug}?limit=25&skip=${data.skip}`
  HTTP
  .get(route)
  .then(response => {
    data.limit = response.data._sys.limit
    data.items = response.data.data
    data.category = response.data.category[0]
    data.skip = response.data._sys.skip
    data.length = Math.ceil(response.data._sys.total / data.limit)

    dispatch('pageNumber', data.pageNumber)
    commit(types.SET_NEWS, data, err => { console.log(err) })
  })
  .catch(e => {
    console.log(e)
  })
}

export const getCategory = ({ commit, dispatch }, payload) => {
  let data = {skip: 0, pageNumber: 1}
  const qname = payload.request === 'programme'
    ? 'o:f730239a8b20c4024d7f'
    : payload.request === 'practical-information'
    ? 'o:44c0b9cc9228ca743c5a'
    : 'o:120ab483a2d8502c4947' // home

  const route = `sleepandbreathing?qname=${qname}`

  HTTP
  .get(route)
  .then(response => {
    data.items = response.data.data
    data.category = response.data.category[0]
    data.skip = response.data._sys.skip

    dispatch('pageNumber', data.pageNumber)
    dispatch('setOnline')
    commit(types.SET_CATEGORY, data, err => { console.log(err) })
  })
  .catch(e => {
    if (window.localStorage.getItem('vuex')) {
      const restored = JSON.parse(window.localStorage.getItem('vuex'))
      dispatch('setOffline')
      commit(types.RESTORE_MUTATION, restored, err => { console.log(err) })
    }
  })
}

export const getArticle = ({ commit, dispatch }, payload) => {
  return new Promise((resolve, reject) => {
    const route = `sleepandbreathing/${payload.slug}`
    let data = {}

    HTTP
    .get(route)
    .then(response => {
      data.item = response.data
      dispatch('setOnline')
      commit(types.SET_ARTICLE, data, err => { console.log(err) })
      resolve(data)
    }).catch(e => {
      if (window.localStorage.getItem('vuex')) {
        const restored = JSON.parse(window.localStorage.getItem('vuex'))
        dispatch('setOffline')
        commit(types.RESTORE_MUTATION, restored, err => { console.log(err) })
        resolve()
      }
    })
  })
}

export const getHome = ({ commit, dispatch }, payload) => {
  const route = `sleepandbreathing/`
  HTTP
  .get(route)
  .then(response => {
    // will do something
    // commit something
  }).catch(e => {
    console.lof(e)
  })
}

export const pageNumber = ({commit}, payload) => {
  commit(types.SET_PAGE_NUMBER, payload, err => { console.log(err) })
}

export const setOnline = ({commit}) => {
  commit(types.SET_ONLINE)
}

export const setOffline = ({commit}) => {
  commit(types.SET_OFFLINE)
}
