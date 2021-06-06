import React, {useCallback, useState} from 'react';
import {SafeAreaView, View, TouchableOpacity, Text, Image} from 'react-native';
import FillTextinput from '@components/nativeComponets/fillTextinput/index';
import TouchButton from '../../components/nativeComponets/TouchButton/index';

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

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: '30%',
        marginLeft: '5%',
        marginRight: '5%',
      }}>
      <Image
        source={require('@img/vote-main.png')}
        style={{width: '100%', height: '30%'}}
      />
      <FillTextinput
        handleFocus={(type: string) => handleFocus(type, 0)}
        isFocus={focus[0]}
        placeholder="아이디 입력"
        handleChange={setId}
        value={id}
      />
      <FillTextinput
        handleFocus={(type: string) => handleFocus(type, 1)}
        isFocus={focus[1]}
        placeholder="비밀번호 입력"
        handleChange={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: '10%',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <TouchButton
          handlePress={() => {}}
          buttonText="로그인"
          containerStyle={{
            height: 40,
            width: '48%',
            borderRadius: 15,
            backgroundColor: 'skyblue',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          textStyle={{color: '#ffffff'}}
        />
        <TouchButton
          handlePress={() => {}}
          buttonText="회원가입"
          containerStyle={{
            height: 40,
            width: '48%',
            borderRadius: 15,
            backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          textStyle={{color: '#ffffff'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginIndex;
