import {ImageStyle, StyleSheet, TextStyle, ViewStyle, View} from 'react-native';

interface Style {
  container: ViewStyle;
  input: TextStyle;
  coverImg: ImageStyle;
  buttonArea: ViewStyle;
  buttonContainer: ViewStyle;
  button: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '30%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  input: {
    width: '100%',
    paddingLeft: 10,
    paddingBottom: 5,
  },
  coverImg: {width: '100%', height: '30%'},
  buttonArea: {
    flexDirection: 'row',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '48%',
  },
  button: {
    borderRadius: 10,
    padding: 10,
  },
});
