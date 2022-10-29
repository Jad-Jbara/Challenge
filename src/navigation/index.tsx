import React, { useRef } from 'react'
import { observer } from 'mobx-react'
import { NavigationContainer } from '@react-navigation/native'

import { MainStack, AuthStack } from './Navigator'

const Navigation: React.FC = ({ }) => {
  const navigatorRef = useRef<any>()

  const isAuthenticated = global.AuthStore.isAuthenticated

  const Stack = isAuthenticated ? MainStack : AuthStack

  return (
    <NavigationContainer
      ref={navigatorRef}>
      <Stack />
    </NavigationContainer>
  )
}

export default observer(Navigation)
