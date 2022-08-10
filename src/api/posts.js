import apiUrl from '../apiConfig'
import axios from 'axios'

export const getNewPosts = (activeSub) => {
  // get requests should not have a body
  return axios({
    url: apiUrl + `/posts/new/${activeSub}`,
    method: 'GET'
  })
}

export const getSavedPosts = (activeSub) => {
  return axios({
    url: apiUrl + `/posts/saved/${activeSub}/`,
    method: 'GET'
  })
}

export const getPostContents = (url) => {
  // get requests should not have a body
  return axios({
    url: apiUrl + `/posts/post/?link=${url}`,
    method: 'GET'
  })
}

export const getSavedPost = (activeSub) => {
  // get requests should not have a body
  return axios({
    url: apiUrl + `/posts/savedPost/${activeSub}`,
    method: 'GET'
  })
}

export const savePost = (body) => {
  console.log(body)
  return axios({
    url: apiUrl + '/posts/',
    method: 'POST',
    headers: { Authorization: `Bearer ${body.owner.token}` },
    data: {
      message: {
        board: body.board,
        text: body.text,
        owner: body.owner
      }
    }
  })
}

export const deletePost = (id, user) => {
  return axios({
    url: apiUrl + `/posts/${id}`,
    method: 'DELETE',
    headers: { Authorization: `Bearer ${user.token}` }
  })
}

export const changePost = (id, text, user) => {
  return axios({
    url: apiUrl + `/posts/${id}`,
    headers: { Authorization: `Bearer ${user.token}` },
    method: 'PATCH',
    data: {
      message: {
        text
      }
    }
  })
}
