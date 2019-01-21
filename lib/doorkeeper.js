require('dotenv').config()
const fetch = require('node-fetch')

module.exports = class Doorkeeper {
  constructor () {
    this.baseUrl = 'https://api.doorkeeper.jp'
    this.request = async (api) => {
      const response = await fetch(`${this.baseUrl}${api}`, {
        method: 'get',
        headers: { Authorization: `Bearer ${process.env.DOORKEEPER_TOKEN}` }
      })
      return response.json()
    }
  }

  events (group = '') {
    return this.request(`/groups/${group}${group.length > 0 ? '/' : ''}events`)
  }

  event (id) {
    return this.request(`/events/${id}`)
  }

  group (group) {
    return this.request(`/groups/${group}`)
  }
}
