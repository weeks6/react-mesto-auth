import { baseUrl, authToken } from './constants'
import checkResponse from './checkResponse'

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl
    this.headers = options.headers
  }

  updateUserInfo(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(checkResponse)
  }

  fetchCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'GET',
      headers: this.headers,
    }).then(checkResponse)
  }

  createCard({ name, link }) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(checkResponse)
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(checkResponse)
  }

  changeCardLikeStatus(cardId, isLiked) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this.headers,
    }).then(checkResponse)
  }

  updateUserAvatar(avatar) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(checkResponse)
  }
}

const api = new Api({
  baseUrl,
  headers: {
    'Content-Type': 'application/json',
    authorization: authToken,
  },
})

export default api
