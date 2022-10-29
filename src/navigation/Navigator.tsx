import React from 'react'

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import Login from 'screens/Login'

import styles from './styles'
import Dashboard from 'screens/Dashboard'

const defaultNavigationOptions = () => ({
  screenOptions: {
    headerMode: 'float',
    headerBackTitle: ' ',
    headerShown: true,
    headerTitleStyle: styles.headerTitle,
    headerStyle: styles.headerStyle,
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
  }
})

const navigationOptions = () => ({
  screenOptions: {
    headerMode: 'float',
    headerShown: false,
  }
})

const createStack = (Stack: any, screens: Array<{ name: string }>, navigatorOptions: any = defaultNavigationOptions) => {
  return (
    <Stack.Navigator {...navigatorOptions()}>
      {screens.map((screen: { name: string }) => <Stack.Screen key={screen.name} {...screen} />)}
    </Stack.Navigator>
  )
}

const AuthNavigator = createNativeStackNavigator()
const AuthStack = () => {
  const screens = [
    { name: 'LoginScreen', component: Login, },
  ]
  return createStack(AuthNavigator, screens)
}

const DashboardNavigator = createNativeStackNavigator()
const DashboardStack = () => {
  const screens = [
    { name: 'Dashboard', component: Dashboard, },
  ]
  return createStack(DashboardNavigator, screens)
}

const MainStackNaviagtor = createNativeStackNavigator()
const MainStack = () => {
  const screens = [
    {
      name: 'Home',
      component: DashboardStack,
    },
    {
      name: 'Login',
      component: AuthStack,
    },
  ]

  return createStack(MainStackNaviagtor, screens, navigationOptions)
}

export { MainStack, AuthStack }
