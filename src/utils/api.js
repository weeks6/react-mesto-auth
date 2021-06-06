import { getAccessToken } from './auth'
import { baseUrl, AUTH_ENDPOINT } from './constants'

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl
    this.headers = options.headers

    this.setAuthHeader()
  }

  setAuthHeader() {
    this.headers.Authorization = `Bearer ${getAccessToken()}`
  }

  // eslint-disable-next-line class-methods-use-this
  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Ошибка ${res.status}`)
  }

  getUserInfo() {
    return fetch(`${AUTH_ENDPOINT}users/me`, {
      method: 'GET',
      headers: this.headers,
    }).then(this._checkResponse)
  }

  updateUserInfo(name, about) {
    return fetch(`${AUTH_ENDPOINT}users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._checkResponse)
  }

  fetchCards() {
    return fetch(`${AUTH_ENDPOINT}cards`, {
      method: 'GET',
      headers: this.headers,
    }).then(this._checkResponse)
  }

  createCard({ name, link }) {
    return fetch(`${AUTH_ENDPOINT}cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._checkResponse)
  }

  deleteCard(cardId) {
    return fetch(`${AUTH_ENDPOINT}cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(this._checkResponse)
  }

  changeCardLikeStatus(cardId, isLiked) {
    return fetch(`${AUTH_ENDPOINT}cards/${cardId}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this.headers,
    }).then(this._checkResponse)
  }

  updateUserAvatar(avatar) {
    return fetch(`${AUTH_ENDPOINT}users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._checkResponse)
  }
}

const api = new Api({
  baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
