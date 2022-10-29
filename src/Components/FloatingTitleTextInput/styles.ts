import { StyleSheet, Platform } from 'react-native'
import FontFamily from 'constants/ui/FontFamily'
import Colors from 'constants/ui/Colors'
import ConstantStyles from 'constants/ui/ConstantStyles'
import Typography from 'constants/ui/Typography'

export default StyleSheet.create({
  container: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    marginVertical: 4,
    borderColor: Colors.borderGrey,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: ConstantStyles.INPUT_ROUNDING,
    backgroundColor: Colors.white,
  },
  noVerticalPadding: {
    paddingVertical: Platform.select({
      ios: 15,
      android: 0,
    }),
  },
  textInput: {
    ...Typography.body2,
    lineHeight: undefined,
    textAlignVertical: 'center'
  },
  titleStyles: {
    position: 'absolute',
    fontSize: 12,
    lineHeight: 17,
    fontFamily: FontFamily.regular,
    color: Colors.grey,
    left: 12,
  },
  noBorders: {
    borderWidth: 0
  },
  errorText: {
    ...Typography.body2,
    color: Colors.red,
    // alignSelf: 'center'
  },
  topMargin: {
    // marginTop: 5,
  },
})
