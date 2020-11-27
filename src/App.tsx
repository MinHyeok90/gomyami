import React, {useState} from 'react';
import styled from 'styled-components/native';
import * as Hangul from 'hangul-js';

import Input from '~/Components/Input';
import Button from '~/Components/Button';

const Contianer = styled.SafeAreaView`
  flex: 1;
`;

const OutputBox = styled.TextInput`
  flex: 1;
  color: #000000;
  background-color: #ffd5d2;
  text-align: center;
`;

const InputBox = styled.View`
  flex: 1;
  flex-direction: row;
`;

const App = () => {
  const [origin, setOrigin] = useState<Text>();
  const [result, setResult] = useState<Text>();
  const BoxCurse = (originText: string) => {
    if (originText === undefined) return '저주를 걸 수가 없어!ㅠㅠ';
    let disAssembledHangul = Hangul.disassemble(originText);
    disAssembledHangul.forEach((item, i) => {
      if (item === 'ㅇ') {
        disAssembledHangul[i] = 'ㅁ';
      }
    });
    console.log(disAssembledHangul);
    return Hangul.assemble(disAssembledHangul);
  };
  return (
    <Contianer>
      <OutputBox placeholder="저주메 걸려 나모는 말" multiline={true}>
        {result}
      </OutputBox>
      <InputBox>
        <Input
          placeholder="당신이 하고 싶은 말(입력)"
          onChangeText={setOrigin}
        />
        <Button
          label="저주를 발동합니다!"
          onPress={() => {
            setResult(BoxCurse(origin));
          }}
        />
      </InputBox>
    </Contianer>
  );
};

export default App;
