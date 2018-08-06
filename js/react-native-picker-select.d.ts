declare module 'react-native-picker-select' {
  import * as React from 'react';
  import { StyleSheet, ViewProps } from 'react-native';

  export interface RNPickerSelectItem {

  }

  export interface RNPickerSelectProps {
    onValueChange: (value: any, index: number) => void,
    items: RNPickerSelectItem[],
    placeholder?: RNPickerSelectItem | {},
    disabled?: boolean,
    value?: any,
    itemKey?: string | number,
    hideIcon?: boolean,
    hideDoneBar?: boolean,
    onUpArrow?: () => void,
    onDownArrow?: () => void,
    mode?: 'dialog' | 'dropdown',
    style?: any
  }

  export default class RNPickerSelect extends React.Component<RNPickerSelectProps> {}
}