import axios, { AxiosResponse } from 'axios'

import ConstantKeys from 'constants/Keys'
import AlertStore from 'stores/AlertStore'

axios.defaults.baseURL = `${ConstantKeys.BASE_URL}`

type Verb = 'post' | 'put' | 'get' | 'delete'

const verbs: Verb[] = ['post', 'put', 'get', 'delete']

verbs.forEach((verb: Verb) => {
  axios.defaults.headers[verb]['Content-Type'] = 'application/json'
})

type OptionalType = Record<string, unknown>

class Base<ListingParams = OptionalType, ListItemType = OptionalType>{
  serviceUrl: string
  token: string
  static authToken = ''

  constructor(serviceUrl: string) {
    this.serviceUrl = serviceUrl
    this.token = global.AuthStore?.accessToken
  }

  headers(token: string | null = null) {
    const header: {
      'Content-Type': string,
      Authorization?: string,
    } = {
      'Content-Type': 'application/json',
    }
    // token
    if (token || this.token) {
      header.Authorization = `Bearer ${token || this.token}`
    }

    return header
  }

  async get(url: any = this.serviceUrl, {
    params, headers, ...extra
  }: any = {}) {
    try {
      const resp = await axios.get(url, {
        ...extra,
        headers: {
          ...this.headers(),
          ...headers,
        },
      })
      return resp.data
    } catch (error) {
      return this.handleError(error)
    }
  }

  async performAction(
    url: string = this.serviceUrl,
    params: any,
    { headers }: any = {},
    actionType: Verb) {
    try {
      const response = await axios[actionType](url,
        params, { headers: headers || this.headers(), })
      return response && response.data
    } catch (err) {
      return this.handleError(err)
    }
  }

  async post(url: string = this.serviceUrl, params: any, { headers }: any = {}) {
    return this.performAction(url, params, headers, 'post')
  }

  async put(url: string = this.serviceUrl, params: any, { headers }: any = {}) {
    return this.performAction(url, params, headers, 'put')
  }

  async delete(url: string = this.serviceUrl, params: any = {}, { headers }: any = {}) {
    return this.performAction(url, params, headers, 'delete')
  }

  handleError(err: unknown) {
    const errorMessage: any = err
    console.error(errorMessage?.response?.data?.message || err)
    AlertStore.error(errorMessage?.response?.data?.message)
    return errorMessage?.response?.data?.message || errorMessage
  }

}
export default Base
