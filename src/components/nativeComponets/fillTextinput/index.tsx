import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

interface Props {
  handleFocus: Function;
  handleChange: Function;
  isFocus: Boolean;
  value: string;
  placeholder: string;
}

const FillTextinput: React.FC<Props> = ({
  handleFocus,
  isFocus,
  handleChange,
  value,
  placeholder,
  ...props
}) => {
  return (
    <View style={[styles.container, {borderColor: !isFocus ? 'gray' : 'blue'}]}>
      <TextInput
        style={styles.input}
        onFocus={() => handleFocus('focus')}
        onBlur={() => handleFocus('blur')}
        placeholder={placeholder}
        onChangeText={(text: string) => handleChange(text)}
        value={value}
        {...props}
      />
    </View>
  );
};

export default FillTextinput;
