import ConstantStyles from 'constants/ui/ConstantStyles'
import { Platform, StyleSheet } from 'react-native'
// import Colors from 'constants/ui/Colors'

const VERTICAL_SPACING = ConstantStyles.SCREEN_VERTICAL_SPACING
export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.lightYellowColor
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: ConstantStyles.SCREEN_HORIZONTAL_SPACING,
    paddingVertical: VERTICAL_SPACING,
  },
  footer: {
    // flex: 0.1,
    paddingHorizontal: ConstantStyles.SCREEN_HORIZONTAL_SPACING,
    paddingVertical: VERTICAL_SPACING,
  },
  searchInput: {
    paddingVertical: Platform.OS === 'ios' && VERTICAL_SPACING || 0,
  }
})