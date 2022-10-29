import Base from './BaseService'
import AuthStore from 'stores/AuthStore'

type getArticlesParams = {
  page: number
}
class ArticlesService extends Base {
  constructor() {
    super('articles', AuthStore)
  }

  async getArticles(params: getArticlesParams) {
    return this.get(`${this.serviceUrl}?page=${params.page}`, params)
  }
}

export default ArticlesService