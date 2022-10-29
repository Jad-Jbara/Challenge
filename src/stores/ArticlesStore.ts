import { action, makeObservable, observable } from "mobx";
import ArticlesService from "services/ArticlesService";

class ArticlesStore {
  @observable articles = []
  @observable filteredArticles = []
  constructor() {
    makeObservable(this)
  }

  get service() {
    return new ArticlesService()
  }

  @action setValue(key: keyof this, value: any) {
    this[key] = value
  }

  @action async getArticles(params: { page: number }) {
    const response = await this.service.getArticles(params)
    if (response?.response) {
      const { docs } = response.response
      if (params.page === 0) {
        this.setValue('articles', docs)
      } else {
        this.setValue('articles', [...this.articles, ...docs])
      }
      return response.response.docs
    }
  }

  @action filterArticles(text: string) {
    this.articles.map(item => {
      if (item.keywords) {

      }
    })
  }
}

export default new ArticlesStore()