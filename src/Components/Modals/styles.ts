import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import FontFamily from 'constants/ui/FontFamily'
import Colors from 'constants/ui/Colors'
import ConstantStyles from 'constants/ui/ConstantStyles'
import Typography from 'constants/ui/Typography'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  boxContainer: {
    width: Dimensions.get('window').width - 80,
    paddingTop: ConstantStyles.SCREEN_VERTICAL_SPACING,
    backgroundColor: 'rgba(242, 242, 242, 1)',
    borderRadius: ConstantStyles.BUTTON_ROUNDING,
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  modalButtonView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 30,
    paddingBottom: 20,
  },
  body: {
    alignItems: 'center'
  },
  title: {
    ...Typography.heading1,
    color: Colors.mainBlackColor,
    textAlign: 'center',
    maxWidth: 210
  },
  description: {
    ...Typography.body1,
    color: Colors.mainBlackColor,
    textAlign: 'center',
    maxWidth: '80%'
  },
  paddingView: {
    height: 10,
    width: 10
  },
  confirmButton: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.borderGrey,
    backgroundColor: Colors.secondaryBlackColor,
    borderRadius: ConstantStyles.BUTTON_ROUNDING,
    marginHorizontal: 10,
  },
  confirmButtonText: {
    fontFamily: FontFamily.bold,
    fontSize: 16,
    color: Colors.mainYellowColor,
  },
  link: {
    ...Typography.body1,
    color: Colors.mainYellowColor,
  }
})
