import ConstantStyles from 'constants/ui/ConstantStyles'
import { StyleSheet } from 'react-native'
// import Colors from 'constants/ui/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.lightYellowColor
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: ConstantStyles.SCREEN_HORIZONTAL_SPACING,
    paddingVertical: ConstantStyles.SCREEN_VERTICAL_SPACING,
  },
  footer: {
    // flex: 0.1,
    paddingHorizontal: ConstantStyles.SCREEN_HORIZONTAL_SPACING,
    paddingVertical: ConstantStyles.SCREEN_VERTICAL_SPACING,
  }
})