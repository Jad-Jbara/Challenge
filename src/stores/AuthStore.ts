import AsyncStorage from '@react-native-async-storage/async-storage'
import { action, computed, makeObservable, observable } from 'mobx'
import RNRestart from 'react-native-restart'
import AuthService from 'services/AuthService'
const ASYNC_STORAGE_TOKEN_KEY = 'accessToken'

class AuthStore {
  @observable accessToken: null | string = null
  @observable loginLoader = false

  constructor() {
    makeObservable(this)
  }

  get service() {
    return AuthService
  }

  @action toggleLoader(value = true) {
    this.loginLoader = value
  }

  @action async loadToken() {
    const token = await AsyncStorage.getItem(ASYNC_STORAGE_TOKEN_KEY)
    this.accessToken = token
  }

  @action async login(username: string, password: string) {
    this.toggleLoader()
    const response = await this.service.login({ username, password })
    if (response && response.accessToken) {
      this.accessToken = response.accessToken
      await AsyncStorage.setItem(ASYNC_STORAGE_TOKEN_KEY, response.accessToken)
    }
    this.toggleLoader(false)
  }

  @action async logOut() {
    try {

      await AsyncStorage.removeItem(ASYNC_STORAGE_TOKEN_KEY,)
      this.accessToken = null
      RNRestart.Restart()
    } catch (error) {
      console.error(error)
    }
  }

  @computed get isAuthenticated() {
    return this.accessToken
  }
}
export default AuthStore