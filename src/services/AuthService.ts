import Base from './BaseService'

type loginParams = {
  username: string
  password: string
}
class AuthService extends Base {
  constructor() {
    super('auth/signin')
  }

  async login(params: loginParams) {
    return this.post(this.serviceUrl, params)
  }
}

export default new AuthService()