import React from 'react';
import styled from 'styled-components/native';

const Contianer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text``;
interface Props {}

const EmptyItem = ({}: Props) => {
  return (
    <Contianer>
      <Label>아직 시도한 저주가 없습니다.</Label>
      <Label>새로운 말을 걸어보세요</Label>
    </Contianer>
  );
};

export default EmptyItem;
