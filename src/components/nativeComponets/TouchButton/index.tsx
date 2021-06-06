import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';

interface Props {
  handlePress: Function;
  buttonText: string;
  containerStyle: ViewStyle;
  textStyle: TextStyle;
}

const TouchButton: React.FC<Props> = ({
  handlePress,
  buttonText,
  containerStyle,
  textStyle,
  ...props
}) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={handlePress} {...props}>
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default TouchButton;
