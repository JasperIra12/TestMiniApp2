import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type HorizontalItemsDataIn = {
  text?: string;
  horizontalContainerStyle?: StyleProp<ViewStyle>;
  horizontalTextStyle?: StyleProp<TextStyle>;
  horizontalButtonStyle?: StyleProp<ViewStyle>;
  horizontalButtonTextTitle?: StyleProp<TextStyle>
  horizontalButtonTextprice?: StyleProp<TextStyle>;
};

export type VerticalItemsDataIn = {
  text?: string;
  verticalContainerStyle?: StyleProp<ViewStyle>;
  verticalTextStyle?: StyleProp<TextStyle>;
  verticalButtonStyle?: StyleProp<ViewStyle>;
  verticalButtonTextTitle?: StyleProp<TextStyle>
  verticalButtonTextprice?: StyleProp<TextStyle>;
};