import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  text: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    height: 40,
    width: '48%',
    borderRadius: 15,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: '#ffffff'},
});
