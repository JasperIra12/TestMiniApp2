import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type HorizontalItems = {
  text?: string;
  horizontalContainerStyle?: StyleProp<ViewStyle>;
  horizontalTextStyle?: StyleProp<TextStyle>;
  horizontalButtonStyle?: StyleProp<ViewStyle>;
  horizontalButtonTextTitle?: StyleProp<TextStyle>
  horizontalButtonTextprice?: StyleProp<TextStyle>;
  horizontalModalTitle?: StyleProp<TextStyle>
  horizontalModalPrice?: StyleProp<TextStyle>
  horizontalModalDescription?: StyleProp<TextStyle>
};

export type VerticalItems = {
  text?: string;
  verticalContainerStyle?: StyleProp<ViewStyle>;
  verticalTextStyle?: StyleProp<TextStyle>;
  verticalButtonStyle?: StyleProp<ViewStyle>;
  verticalButtonTextTitle?: StyleProp<TextStyle>
  verticalButtonTextprice?: StyleProp<TextStyle>;
  verticalModalTitle?: StyleProp<TextStyle>
  verticalModalPrice?: StyleProp<TextStyle>
  verticalModalDescription?: StyleProp<TextStyle>
};