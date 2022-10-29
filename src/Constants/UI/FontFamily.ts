import { I18nManager, Platform } from 'react-native'

class FontFamily {

  get black() {
    return 'Merriweather-Black'
  }

  get blackItalic() {
    return 'Merriweather-BlackItalic'
  }

  get bold() {
    return 'Merriweather-Bold'
  }

  get boldItalic() {
    return 'Merriweather-BoldItalic'
  }

  get regular() {
    return 'Merriweather-Regular'
  }

  get light() {
    return 'Merriweather-Light'
  }
}

export default new FontFamily()
