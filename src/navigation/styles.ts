import { StyleSheet } from 'react-native'
import Colors from 'constants/ui/Colors'
import FontFamily from 'constants/ui/FontFamily'

export default StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.mainBlackColor,
  },
  headerTitle: {
    fontFamily: FontFamily.bold,
    color: Colors.mainYellowColor,
  }
})
