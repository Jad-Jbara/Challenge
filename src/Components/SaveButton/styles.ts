import { StyleSheet } from 'react-native'

import Colors from 'constants/ui/Colors'
import ConstantStyles from 'constants/ui/ConstantStyles'
import Typography from 'constants/ui/Typography'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.mainBlackColor,
    borderRadius: ConstantStyles.BUTTON_ROUNDING,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleStyle: {
    ...Typography.button,
    color: Colors.mainYellowColor,
  }
})