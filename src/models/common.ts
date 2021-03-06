export enum AttributeTypeInput {
  text = 'text',
  password = 'password'
}

//note> Types for Styles

export enum Root {
  backgroundColorOne = '--background-color-one',
  backgroundColorTwo = '--background-color-two',

  borderColorOne = '--border-color-one',

  //--font--

  firstFontFemale = '--first-font-female',
  secondFontFemale = '--second-font-female',
  thirdFontFemale = '--third-font-female'
}

export enum AlignItems {
  flex_end = 'flex-end',
  flex_start = 'flex-start',
  center = 'center',
  baseline = 'baseline',
  stretch = 'stretch',
  inherit = 'inherit',
  initial = 'initial',
  unset = 'unset'
}

export enum FlexDirection {
  column = 'column',
  row = 'row',
  row_reverse = 'row-reverse',
  column_reverse = 'column-reverse',
  inherit = 'inherit',
  initial = 'initial',
  unset = 'unset'
}

export enum Offset {
  top_right_side = 'top_right_side',
  top_center = 'top_center',
  top_left_side = 'top_left_side',

  left_center_side = 'left_center_side',
  right_center_side = 'right_center_side',

  bottom_right_side = 'bottom_right_side',
  bottom_center = 'bottom_center',
  bottom_left_side = 'bottom_left_side'
}
