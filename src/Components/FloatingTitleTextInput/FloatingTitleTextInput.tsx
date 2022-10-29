import React, { Component } from 'react'
import {
  View,
  Animated,
  TextInput,
  KeyboardTypeOptions,
  TextInputAndroidProps,
  TextInputIOSProps,
  Platform,
  TextStyle,
} from 'react-native'


import Colors from 'constants/ui/Colors'
import styles from './styles'

type Props = {
  attrName: string
  title: string
  value: string
  updateMasterState: any
  keyboardType?: KeyboardTypeOptions
  titleActiveSize?: number
  titleInActiveSize?: number
  titleActiveColor?: string
  titleInactiveColor?: string
  textInputStyles?: any
  otherTextInputProps?: TextInputAndroidProps & TextInputIOSProps & Props
  containerStyle?: any
  withoutBorder?: boolean
  checkForError?: any
  errorMessage?: string
  onBlurCallBack?: any
  onFocusCallBack?: any
  disabled?: boolean
  showFlags?: boolean
  selectedFlag?: any
  onSelect?: any
  textStyles?: TextStyle
  isWithoutLabel?: boolean
}

type State = {
  isFieldActive: boolean
  showError: boolean
}

class FloatingTitleTextInput extends Component<Props, State> {
  static defaultProps = {
    keyboardType: 'default',
    titleActiveSize: 12,
    titleInActiveSize: 16,
    titleActiveColor: Colors.grey,
    titleInactiveColor: Colors.grey,
    otherTextInputAttributes: {},
    withoutBorder: false,
    checkForError: null,
    errorMessage: ''
  }
  errorPosition: Animated.Value
  position: Animated.Value

  constructor(props: Props) {
    super(props)
    const { value } = this.props
    this.position = new Animated.Value(value ? 1 : 0)
    this.errorPosition = new Animated.Value(0)
    this.state = {
      isFieldActive: false,
      showError: false,
    }

    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
    this.setValue = this.setValue.bind(this)
  }

  handleFocus() {
    const { onFocusCallBack } = this.props.otherTextInputProps || {}
    const { isFieldActive } = this.state

    this.setState({ showError: false })
    if (!isFieldActive) {
      onFocusCallBack && onFocusCallBack()
      this.setState({ isFieldActive: true })
      Animated.timing(this.position, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true
      }).start()
    }
  }

  handleBlur() {
    const { value, checkForError } = this.props
    const { onBlurCallBack } = this.props.otherTextInputProps || {}
    const { isFieldActive } = this.state

    isFieldActive && onBlurCallBack && onBlurCallBack()
    if (isFieldActive && !value) {
      this.setState({ isFieldActive: false })
      Animated.timing(this.position, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true
      }).start()
    }
    if (checkForError && checkForError(value)) {
      this.setState({ showError: true }, () => {
        this.startShakeAnimation()
      })
    }
  }

  onChangeText(updatedValue: string) {
    const { attrName, updateMasterState } = this.props
    updateMasterState(attrName, updatedValue)
  }

  returnAnimatedTitleStyles() {
    const { isFieldActive } = this.state
    const { titleActiveSize, titleInActiveSize, value, otherTextInputProps } = this.props
    return {
      transform: [{
        translateY: this.position.interpolate({
          inputRange: [0, 1],
          outputRange: [15, 0],
        })
      }],
      fontSize: isFieldActive || value ? titleActiveSize : titleInActiveSize,
      backgroundColor: (isFieldActive || value) && 'transparent'
    }
  }

  get shakePositions() {
    const SHAKE_ANIMATION_DURATION = 100
    const shakePositions = [
      { toValue: 5, duration: SHAKE_ANIMATION_DURATION, useNativeDriver: true },
      { toValue: -5, duration: SHAKE_ANIMATION_DURATION, useNativeDriver: true },
      { toValue: 5, duration: SHAKE_ANIMATION_DURATION, useNativeDriver: true },
      { toValue: -5, duration: SHAKE_ANIMATION_DURATION, useNativeDriver: true },
    ]
    return shakePositions
  }

  startShakeAnimation() {
    const animationSequence: Animated.CompositeAnimation[] = []
    this.shakePositions.map((item) => {
      animationSequence.push(Animated.timing(this.errorPosition, item))
    })
    Animated.sequence(animationSequence).start()
  }

  setValue(key: keyof State, value: any) {
    this.setState({ ...this.state, [key]: value })
  }

  get focusedStyles() {
    const { isFieldActive, } = this.state
    const focusedStyles = isFieldActive ? {
      borderColor: Colors.mainYellowColor
    } : {}
    return focusedStyles
  }

  render() {
    const { showError } = this.state
    const {
      withoutBorder,
      title,
      value,
      textInputStyles = null,
      keyboardType,
      otherTextInputProps,
      checkForError,
      errorMessage = null,
      showFlags = false,
      isWithoutLabel
    } = this.props

    return (
      <>
        {checkForError && showError && checkForError(value) ? (
          <Animated.Text
            style={[
              styles.errorText,
              { transform: [{ translateX: this.errorPosition }] }
            ]}>
            {errorMessage ? errorMessage : ''}
          </Animated.Text>) : null
        }

        <View style={[
          styles.container,
          withoutBorder && styles.noBorders,
          otherTextInputProps?.containerStyle,
          !isWithoutLabel && styles.noVerticalPadding,
          this.focusedStyles
        ]}>
          {!otherTextInputProps?.isWithoutLabel && !isWithoutLabel && (
            <Animated.Text
              style={[
                styles.titleStyles, this.returnAnimatedTitleStyles(),
                otherTextInputProps?.textStyles && otherTextInputProps?.textStyles
              ]}>
              {title}
            </Animated.Text>
          )}
          <TextInput
            value={value}
            style={[styles.textInput, textInputStyles]}
            underlineColorAndroid='transparent'
            textAlignVertical='center'
            onFocus={this.handleFocus}
            editable={!showFlags}
            onBlur={this.handleBlur}
            onChangeText={this.onChangeText}
            placeholderTextColor={styles.titleStyles.color}
            selectionColor={Colors.mainYellowColor}
            keyboardType={keyboardType}
            {...otherTextInputProps}
            placeholder={(otherTextInputProps?.isWithoutLabel || isWithoutLabel) && title || ''}
          />
        </View>
      </>
    )
  }
}

export default FloatingTitleTextInput
