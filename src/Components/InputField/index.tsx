import React from 'react'

import FloatingTitleTextInput from 'components/FloatingTitleTextInput'

type InputFieldProps = {
  required?: boolean
  field: string
  value: string
  placeholder: string
  setValue: any
  multiline?: boolean
  withoutBorder?: boolean
  onBlurCallBack?: any
  onFocusCallBack?: any
  showFlags?: boolean
  onSelect?: any
  isWithoutLabel?: boolean
  containerStyle?: any
}

const MINIMUM_NUMBER_OF_LINES = 150
const MAX_NUMBER_OF_LINES = 1200

const InputField = ({
  required,
  field,
  value,
  placeholder,
  setValue,
  ...props
}: InputFieldProps) => {
  const isMultiLine = props.multiline
  const MAX_LENGTH = isMultiLine ? MAX_NUMBER_OF_LINES : MINIMUM_NUMBER_OF_LINES
  const title = `${required ? '* ' : ''}${placeholder}`
  return (
    <>
      <FloatingTitleTextInput
        attrName={field}
        title={title}
        value={value}
        updateMasterState={setValue}
        showFlags={props?.showFlags}
        onSelect={props?.onSelect}
        withoutBorder={props.withoutBorder}
        otherTextInputProps={{
          maxLength: MAX_LENGTH,
          ...props
        }}
        {...props}
      />
    </>
  )
}

export default InputField
