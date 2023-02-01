import React from 'react';
import type { HorizontalItems, VerticalItems } from './types/dataIn';
import HorizontalScreen from './screen/Horizontal/HorizontalScreen';
import VerticalScreen from './screen/Vertical/VerticalScreen';
import type { ItemData} from './types';
import { View } from 'react-native';
type Props = {
  dataLoad: ItemData;

  dataIn:
    | ({ type: 'horizontal' } & HorizontalItems)
    | ({ type: 'vertical' } & VerticalItems);

  dataOut?: (value: any) => void;
};

const testMAPP = ({ dataLoad, dataIn, dataOut }: Props) => {

  if (dataIn.type === 'horizontal') {
    return (
      <View>
        <HorizontalScreen
          dataIn={dataIn}
          dataLoad={dataLoad} //"data":dataLoad
          dataOut={dataOut ? dataOut: () => {}}
        />
      </View>
    );
  } else if (dataIn.type === 'vertical') {
    return (
      <VerticalScreen
        dataIn={dataIn}
        dataLoad={dataLoad} //"data":dataLoad
        dataOut={dataOut ? dataOut: () => {}}
      />
    );
  } else {
    return <></>;
  }
};

export default testMAPP;
