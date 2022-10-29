import React from 'react'
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native'
import { observer } from 'mobx-react'

import InputField from 'components/InputField'
import SaveButton from 'components/SaveButton'

import english from 'locales/english'
import styles from './styles'
import ArticlesStore from 'stores/ArticlesStore'
import { NavigationProp } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Entypo'
import Colors from 'constants/ui/Colors'
import Article from 'components/Article'
import List from 'components/List'
import AlertStore from 'stores/AlertStore'
import FloatingTitleTextInput from 'components/FloatingTitleTextInput'

type State = {
  username: string
  password: string
  searchQuery: string
  canLoadMore: boolean
}

type Props = {
  navigation: NavigationProp<any>
}

type Field<State> = {
  field: keyof State,
  secureTextEntry?: boolean
  checkForError?: ((_username: string) => boolean)
  // value: keyof State,
}

@observer
class Dashboard extends React.Component<Props, State> {
  Locales: typeof english.logIn
  constructor(props: Props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      searchQuery: '',
      canLoadMore: true
    }

    props.navigation.setOptions({
      headerRight: () => <TouchableOpacity><Icon name='log-out' color={Colors.mainYellowColor} size={30} onPress={this.logOut} /></TouchableOpacity>
    })

    this.setValue = this.setValue.bind(this)
    this.logOut = this.logOut.bind(this)
    this.search = this.search.bind(this)
    this.Locales = english.logIn
  }

  async componentDidMount(): Promise<void> {
    const response = await ArticlesStore.getArticles({ page: 0 })
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

  async logOut() {
    AlertStore.open({
      title: 'Log out?',
      description: 'Are you sure you want to log out?',
      onConfirm: global.AuthStore.logOut
    })
  }

  renderItem({ item, index }) {
    return (
      <Article
        item={item}
      />
    )
  }

  search(text: string) {
    const { searchQuery } = this.state
    this.setState({ canLoadMore: !searchQuery || searchQuery.length <= 0 }, () => {
      ArticlesStore.filterArticles()
    })
  }

  render(): React.ReactNode {
    const { searchQuery, canLoadMore } = this.state

    return (
      <View style={styles.container}>
        <List
          listData={ArticlesStore.articles.slice()}
          RowComponent={Article}
          ListHeaderComponent={
            <FloatingTitleTextInput
              attrName='searchQuery'
              updateMasterState={this.setValue}
              value={searchQuery}
              isWithoutLabel
              title={'Search'}
              otherTextInputProps={{
                onSubmitEditing: this.search,
                containerStyle: styles.searchInput
              }}
            />
          }
          contentContainerStyle={styles.contentContainer}
          fetchCall={'getArticles'}
          store={ArticlesStore}
          extraData={ArticlesStore.articles}
          canLoadMore={canLoadMore}
          ex
        />
      </View>
    )
  }
}

export default Dashboard
