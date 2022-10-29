import Colors from 'constants/ui/Colors'
import ConstantStyles from 'constants/ui/ConstantStyles'
import FontFamily from 'constants/ui/FontFamily'
import Typography from 'constants/ui/Typography'
import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    padding: 10,
    borderRadius: ConstantStyles.BUTTON_ROUNDING,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 200,
    backgroundColor: Colors.borderGrey,
    borderRadius: ConstantStyles.IMAGE_ROUNDING
  },
  snippet: {
    ...Typography.heading1,
  },
  source: {
    ...Typography.heading2,
    color: Colors.grey
  },
  leadParagraph: {
    ...Typography.body1
  },
  seeMore: {
    ...Typography.body1,
    color: Colors.mainYellowColor
  },
  seeLess: {
    ...Typography.body1,
    color: Colors.mainYellowColor
  },
  byText: {
    ...Typography.name,
    fontFamily: FontFamily.boldItalic,
    color: Colors.mainYellowColor
  },
  section: {
    flexDirection: 'row',
    backgroundColor: Colors.mainBlackColor,
    padding: 10,
    borderRadius: 10
  },
  sectionText: {
    ...Typography.name,
    fontFamily: FontFamily.boldItalic,
    color: Colors.mainYellowColor,
  }
})
