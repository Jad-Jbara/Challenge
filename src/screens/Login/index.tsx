import React from 'react'
import { ScrollView, View } from 'react-native'

import InputField from 'components/InputField'
import SaveButton from 'components/SaveButton'

import english from 'locales/english'
import styles from './styles'
import { observer } from 'mobx-react'

type State = {
  username: string
  password: string

}

type Props = {

}

type Field<State> = {
  field: keyof State,
  secureTextEntry?: boolean
  checkForError?: ((_username: string) => boolean)
  // value: keyof State,
}

@observer
class Login extends React.Component<Props, State> {
  Locales: typeof english.logIn
  constructor(props: Props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.setValue = this.setValue.bind(this)
    this.login = this.login.bind(this)
    this.Locales = english.logIn
  }

  async componentDidMount(): Promise<void> {

  }

  get fields() {
    const fields: Field<State>[] = [
      {
        field: 'username',
      },
      {
        field: 'password',
        secureTextEntry: true,
      },
    ]
    return fields
  }

  setValue(field: keyof State, value: string) {
    this.setState({ ...this.state, [field]: value })
  }

  async login() {
    const { username, password } = this.state
    await global.AuthStore.login(username.toLocaleLowerCase(), password)
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps='handled'>
          {this.fields.map(item => (
            <InputField
              key={`text-input-${item.field}`}
              value={this.state[item.field]}
              placeholder={this.Locales.placeholders[item.field as unknown as keyof typeof english.logIn.placeholders]}
              setValue={this.setValue}
              required
              {...item}
            />
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <SaveButton
            label={this.Locales.login}
            onPress={this.login}
            loader={global.AuthStore.loginLoader}
          />
        </View>
      </View>
    )
  }

}

export default Login