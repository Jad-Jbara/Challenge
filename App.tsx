/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'
import global from './src/global'
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen'
import Navigation from './src/navigation'
import AlertModal from 'components/Modals/AlertModal'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  }

  useEffect(() => {
    const loadUser = async () => {
      await global.AuthStore.loadToken()
    }
    loadUser()
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation isDarkMode={isDarkMode} />
      <AlertModal />
    </SafeAreaView>
  )
}

export default App
