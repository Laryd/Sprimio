import React from 'react'
import { CustomComponentProps } from '../utils/interfaces'
import { mergeClassName } from '../utils/utils'

const Container = (props: CustomComponentProps) => {
  return (
    <div className={mergeClassName("px-6 py-3 max-w-full mx-auto", props.className)}>{props.children}</div>
  )
}

export default Container