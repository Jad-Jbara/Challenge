import Colors from 'constants/ui/Colors'
import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, Text, TextStyle, ActivityIndicator } from 'react-native'

import styles from './styles'

type Props = {
  loader?: boolean
  labelStyle?: TextStyle
  label?: string
  containerStyle?: any
} & TouchableOpacityProps

const SaveButton: React.FC<Props> = (props: Props) => {
  const { loader, labelStyle, label, containerStyle } = props
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      {...props}>
      {loader ? <ActivityIndicator color={Colors.mainYellowColor} size='large' /> :
        <Text style={[styles.titleStyle, labelStyle]}>{label}</Text>
      }
    </TouchableOpacity>
  )
}

export { SaveButton }
