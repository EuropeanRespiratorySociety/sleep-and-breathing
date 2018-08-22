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

export const getCategory = ({ commit, dispatch, rootState }, payload) => {
  let data = {skip: 0, pageNumber: 1}
  const { request, sortDirection = -1, sortBy = 'displayOrder' } = payload
  const qname = request === 'programme'
    ? 'o:f730239a8b20c4024d7f'
    : request === 'practical-information'
      ? 'o:44c0b9cc9228ca743c5a'
      : request === 'registration'
        ? 'o:37c7e9119c2c1ddc191b'
        : 'o:120ab483a2d8502c4947' // home
  const queryParam =
    {
      sortDirection: sortDirection,
      sortBy: sortBy
    }

  const route = setRoute(queryParam, qname)

  HTTP
    .get(route)
    .then(response => {
      data.items = response.data.data
      data.category = response.data.category[0]
      data.skip = response.data._sys.skip
      dispatch('pageNumber', data.pageNumber)
      dispatch('base/setOnline', null, { root: true })
      commit(types.SET_CATEGORY, data, err => { console.log(err) })
    })
    .catch(e => {
      if (window.localStorage.getItem('vuex')) {
        const restored = JSON.parse(window.localStorage.getItem('vuex'))
        dispatch('base/setOffline', null, { root: true })
        commit(types.RESTORE_MUTATION, restored, err => { console.log(err) })
      }
    })
}

export const getArticle = ({ commit, dispatch, rootState }, payload) => {
  return new Promise((resolve, reject) => {
    const route = `sleepandbreathing/${payload.slug}`
    let data = {}

    HTTP
      .get(route)
      .then(response => {
        data.item = response.data
        dispatch('base/setOnline', null, { root: true })
        commit(types.SET_ARTICLE, data, err => { console.log(err) })
        resolve(data)
      }).catch(e => {
        if (window.localStorage.getItem('vuex')) {
          const restored = JSON.parse(window.localStorage.getItem('vuex'))
          dispatch('base/setOffline', null, { root: true })
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

function setRoute (queryParam, qname) {
  let route = `sleepandbreathing?qname=${qname}`
  const keys = Object.keys(queryParam)
  const values = Object.values(queryParam)

  if (keys.length > 0) {
    for (var i = 0; i < keys.length; i++) {
      route += `&${keys[i]}=${values[i]}`
    }
  }
  // function setRoute (queryParam, qname) {
  //   let route = `sleepandbreathing?qname=${qname}`
  //   const entries = Object.entries(queryParam)
  //   console.log(entries)
  //   const map = new Map ()
  //   map.set(entries[0], entries[1])
  //   console.log(map)
  //   for (var [key, value] of map) {
  //     route += `&${key}=${value}`
  //   }
  return route
}
