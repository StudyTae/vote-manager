import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  input: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    marginTop: '5%',
    width: '100%',
    height: 40,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {width: '100%', height: '100%'},
});
