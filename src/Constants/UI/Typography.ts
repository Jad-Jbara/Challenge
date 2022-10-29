import { TextStyle } from 'react-native'

import FontFamily from 'constants/ui/FontFamily'
import Colors from 'constants/ui/Colors'

class Texts {

  /**
   ** Font size: 20
   ** Font family: Bold
   ** Color: primaryColor
   **/
  get heading1(): TextStyle {
    return {
      fontFamily: FontFamily.bold,
      fontSize: 20 - 4,
      color: Colors.primaryColor,
      lineHeight: 30 - 4,
    }
  }

  /**
   ** Font size: 20
   ** Font family: Light
   ** Color: primaryColor
   **/
  get heading2(): TextStyle {
    return {
      fontFamily: FontFamily.light,
      fontSize: 20 - 4,
      color: Colors.primaryColor,
      lineHeight: 30 - 4,
    }
  }

  /**
   ** Font size: 18
   ** Font family: Bold
   ** Color: primaryColor
   **/
  get heading3(): TextStyle {
    return {
      fontFamily: FontFamily.bold,
      fontSize: 18 - 4,
      color: Colors.primaryColor,
      lineHeight: 28 - 4,
    }
  }

  /**
   ** Font size: 18
   ** Font family: Light
   ** Color: primaryColor
   **/
  get body1(): TextStyle {
    return {
      fontFamily: FontFamily.light,
      fontSize: 18 - 4,
      color: Colors.primaryColor,
      lineHeight: 26 - 4,
    }
  }

  /**
   ** Font size: 16
   ** Font family: Light
   ** Color: primaryColor
   **/
  get body2(): TextStyle {
    return {
      fontFamily: FontFamily.light,
      fontSize: 16 - 4,
      color: Colors.primaryColor,
      lineHeight: 26 - 4,

    }
  }

  /**
   ** Font size: 18
   ** Font family: bold
   ** Color: white
   **/
  get button(): TextStyle {
    return {
      ...this.heading3,
      color: Colors.white,
      lineHeight: 18 - 4,
    }
  }

  /**
   ** Font size: 14
   ** Font family: Bold
   ** Color: primaryColor
   **/
  get checkbox(): TextStyle {
    return {
      fontFamily: FontFamily.bold,
      fontSize: 14 - 4,
      color: Colors.primaryColor,
      lineHeight: 18 - 4,
    }
  }

  /**
   ** Font size: 18
   ** Font family: Regular
   ** Color: grey
   **/
  get placeholder(): TextStyle {
    return {
      fontFamily: FontFamily.regular,
      fontSize: 18 - 4,
      color: Colors.grey,
      lineHeight: 18 - 4,
    }
  }

  /**
   ** Font size: 20
   ** Font family: Regular
   ** Color: primaryColor
   **/
  get dropDown(): TextStyle {
    return {
      fontFamily: FontFamily.regular,
      fontSize: 20 - 4,
      color: Colors.primaryColor,
      lineHeight: 28 - 4,
    }
  }

  /**
   ** Font size: 14
   ** Font family: Light
   ** Color: primaryColor
   **/
  get name(): TextStyle {
    return {
      fontFamily: FontFamily.light,
      fontSize: 14 - 4,
      color: Colors.primaryColor,
      lineHeight: 20 - 4,
    }
  }
}

export default new Texts()
