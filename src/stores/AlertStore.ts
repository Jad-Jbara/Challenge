import { observable, action, makeObservable } from 'mobx'

type OpenProps = {
  title: string
  description?: string
  onConfirm?: any
  confirmTitle?: string
  imageSource?: any
  component?: any
  withoutCancel?: boolean
}

class AlertStore {
  @observable show = false
  @observable title = ''
  @observable description = ''
  @observable onConfirm: any = null
  @observable confirmTitle = ''
  @observable withoutCancel = false
  component = null

  constructor() {
    makeObservable(this)
  }

  @action
  open({
    title = '',
    description = '',
    onConfirm = null,
    confirmTitle = '',
    withoutCancel = false
  }: OpenProps) {
    this.title = title
    this.description = description
    this.onConfirm = onConfirm
    this.show = true
    this.confirmTitle = confirmTitle
    this.withoutCancel = withoutCancel
  }

  @action success(text: string, onConfirm: any = () => { }) {
    this.open({ title: text, onConfirm: onConfirm })
  }

  @action error(text: string) {
    this.open({ title: text, onConfirm: this.close, withoutCancel: true })
  }

  @action async close() {
    this.show = false
    this.title = ''
    this.description = ''
    this.onConfirm = null
    this.confirmTitle = ''
    this.component = null
    this.withoutCancel = false
  }
}

export default new AlertStore()
