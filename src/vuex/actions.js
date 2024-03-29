import * as types from "./mutation-types";
import { HTTP } from "../helpers/http";

export const getNews = ({ commit, dispatch }, payload) => {
  let data = {
    skip: 0,
    pageNumber: 1
  };
  if (payload.pageNumber > 1) {
    data.pageNumber = payload.pageNumber;
    data.skip = payload.limit * data.pageNumber;
  }
  const route = `${payload.slug}?limit=25&skip=${data.skip}`;
  HTTP.get(route)
    .then(response => {
      data.limit = response.data._sys.limit;
      data.items = response.data.data;
      data.category = response.data.category[0];
      data.skip = response.data._sys.skip;
      data.length = Math.ceil(response.data._sys.total / data.limit);

      dispatch("pageNumber", data.pageNumber);
      commit(types.SET_NEWS, data, err => {
        console.log(err);
      });
    })
    .catch(e => {
      console.log(e);
    });
};

export const getCategory = ({ commit, dispatch }, payload) => {
  let data = {
    skip: 0,
    pageNumber: 1
  };
  const { request, sortDirection = -1, sortBy = "displayOrder" } = payload;
  const qname =
    request === "programme"
      ? "o:fe7297e8278e339825d8"
      : request === "practical-information"
        ? "o:d70b605c0c4624343490"
        : request === "resources"
          ? "o:15183fc487884e7fe0cf"
          : request === "registration"
            ? "o:76b90ecda2fcdcf1c33e"
            : "o:65dced25916434011926"; // home
  const route = setRoute(
    {
      sortDirection,
      sortBy
    },
    qname
  );

  HTTP.get(route)
    .then(response => {
      data.items = response.data.data;
      data.category = response.data.category[0];
      data.skip = response.data._sys.skip;
      dispatch("pageNumber", data.pageNumber);
      dispatch("base/setOnline", null, {
        root: true
      });
      commit(types.SET_CATEGORY, data, err => {
        console.log(err);
      });
    })
    .catch(() => {
      if (window.localStorage.getItem("vuex")) {
        const restored = JSON.parse(window.localStorage.getItem("vuex"));
        dispatch("base/setOffline", null, {
          root: true
        });
        commit(types.RESTORE_MUTATION, restored, err => {
          console.log(err);
        });
      }
    });
};

export const getArticle = ({ commit, dispatch }, payload) => {
  return new Promise(resolve => {
    const route = `sleepandbreathing/${payload.slug}`;
    let data = {};

    HTTP.get(route)
      .then(response => {
        data.item = response.data;
        dispatch("base/setOnline", null, {
          root: true
        });
        commit(types.SET_ARTICLE, data, err => {
          console.log(err);
        });
        resolve(data);
      })
      .catch(() => {
        if (window.localStorage.getItem("vuex")) {
          const restored = JSON.parse(window.localStorage.getItem("vuex"));
          dispatch("base/setOffline", null, {
            root: true
          });
          commit(types.RESTORE_MUTATION, restored, err => {
            console.log(err);
          });
          resolve();
        }
      });
  });
};

export const pageNumber = ({ commit }, payload) => {
  commit(types.SET_PAGE_NUMBER, payload, err => {
    console.log(err);
  });
};

function setRoute(queryParams, qname) {
  return `sleepandbreathing?qname=${qname}${Object.keys(queryParams)
    .map(i => `&${i}=${queryParams[i]}`)
    .join("")}`;
}
