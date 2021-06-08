import React, {useCallback, useState} from 'react';
import {View, Image} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '@css/login/styles';

const LoginIndex: React.FC = () => {
  const [focus, setFocus] = useState([false, false]);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleFocus = useCallback((type: string, index: number) => {
    if (type === 'focus') {
      setFocus(arr => arr.map((bool, i) => (i === index ? true : bool)));
    } else {
      setFocus(arr => arr.map((bool, i) => (i === index ? false : bool)));
    }
  }, []);

  console.log(focus);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('@img/vote-main.png')} style={styles.coverImg} />
      <Input
        labelStyle={{marginTop: 10}}
        label="ID"
        onFocus={() => handleFocus('focus', 0)}
        onBlur={() => handleFocus('blur', 0)}
        placeholder="아이디 입력"
        style={styles.input}
        onChangeText={setId}
        value={id}
        inputContainerStyle={{borderColor: focus[0] ? 'blue' : 'gray'}}
      />
      <Input
        label="PASSWORD"
        onFocus={() => handleFocus('focus', 1)}
        onBlur={() => handleFocus('blur', 1)}
        placeholder="비밀번호 입력"
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        errorStyle={{display: 'none'}}
        errorMessage="아이디 혹은 비밀번호가 올바르지 않습니다."
        renderErrorMessage={false}
        inputContainerStyle={{borderColor: focus[1] ? 'blue' : 'gray'}}
      />
      <View style={styles.buttonArea}>
        <Button
          title="로그인"
          onPress={() => {}}
          buttonStyle={[styles.button, {backgroundColor: 'skyblue'}]}
          containerStyle={styles.buttonContainer}
        />
        <Button
          title="회원가입"
          onPress={() => {}}
          buttonStyle={[styles.button, {backgroundColor: 'pink'}]}
          containerStyle={styles.buttonContainer}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginIndex;
