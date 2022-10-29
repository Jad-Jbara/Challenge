
import React from 'react'
import { observer } from 'mobx-react'
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableOpacity,
  Keyboard
} from 'react-native'

import Hyperlink from 'react-native-hyperlink'

import AlertStore from 'stores/AlertStore'

import styles from './styles'
import english from 'locales/english'

type State = {
  visible: boolean;
}

@observer
class AlertModal extends React.Component<{}, State>{
  locales: typeof english
  constructor(props: {}) {
    super(props)
    this.locales = english
    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true })
    }, 1)
  }

  dismissKeyboard() {
    Keyboard.dismiss()
  }

  async onButtonPress() {
    const {
      onConfirm,
    } = AlertStore
    onConfirm && await onConfirm()
    AlertStore.close()
  }


  render() {
    let {
      confirmTitle,
    } = AlertStore
    const {
      show,
      title,
      description,
      component,
      withoutCancel
    } = AlertStore

    if (!show) {
      return null
    }

    confirmTitle = confirmTitle ? confirmTitle : this.locales.general.yes
    let cancelTitle = this.locales.general.no

    const ViewToUse = Platform.select({
      android: View as any,
      ios: KeyboardAvoidingView,
    })

    return (
      <Modal
        key='bottom_modal'
        animationType={'slide'}
        visible={this.state.visible}
        transparent={true}>
        <TouchableWithoutFeedback>
          <View style={styles.container} >
            <ViewToUse
              behavior='position'
              enabled>
              <View style={styles.boxContainer}>
                <>
                  <Pressable style={styles.body} onPress={this.dismissKeyboard}>
                    <>
                      <Text style={styles.title}>{title}</Text>
                      <Hyperlink
                        linkStyle={styles.link}
                      >
                        {<Text style={styles.description}>{description}</Text>}
                      </Hyperlink>
                      {component}
                    </>
                  </Pressable>
                  <View style={styles.modalButtonView}>
                    {!withoutCancel && <TouchableOpacity
                      activeOpacity={0.6}
                      testID='close_button'
                      onPress={() => AlertStore.close()}
                      style={styles.confirmButton}>
                      <Text style={styles.confirmButtonText}>{cancelTitle}</Text>
                    </TouchableOpacity>}
                    <TouchableOpacity
                      activeOpacity={0.6}
                      testID='confirm_button'
                      onPress={this.onButtonPress}
                      style={styles.confirmButton}>
                      <Text style={styles.confirmButtonText}>{confirmTitle}</Text>
                    </TouchableOpacity>
                  </View>
                </>
              </View>
            </ViewToUse>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}

export default AlertModal
