import React from 'react';
import type { HorizontalItems, VerticalItems } from './types/dataIn';
import HorizontalScreen from './screen/Horizontal/HorizontalScreen';
import VerticalScreen from './screen/Vertical/VerticalScreen';
import type { ItemData, sampleDataOut } from './types';
import { View } from 'react-native';
type Props = {
  dataLoad: ItemData;

  dataIn:
    | ({ type: 'horizontal' } & HorizontalItems)
    | ({ type: 'vertical' } & VerticalItems);

  dataOut?: { data: (value: any) => void } | any;
};

const testMAPP = ({ dataLoad, dataIn, dataOut }: Props) => {
  const { data } = dataOut;
  const test = (fruits: any) => {
    data(fruits);
  };
  if (dataIn.type === 'horizontal') {
    return (
      <View>
        <HorizontalScreen
          dataIn={dataIn}
          dataLoad={dataLoad} //"data":dataLoad
          dataOut={(value) => test(value)}
        />
      </View>
    );
  } else if (dataIn.type === 'vertical') {
    return (
      <VerticalScreen
        dataIn={dataIn}
        dataLoad={dataLoad} //"data":dataLoad
        dataOut={(value) => test(value)}
      />
    );
  } else {
    return <></>;
  }
};

export default testMAPP;
