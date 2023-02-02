import React from 'react';
import type {
  HorizontalItemsDataIn,
  VerticalItemsDataIn,
} from './types/dataIn';
import HorizontalScreen from './screen/Horizontal/HorizontalScreen';
import VerticalScreen from './screen/Vertical/VerticalScreen';
import type { ItemDataLoad, SampleDataLoadOut } from './types';

type Props = {
  dataLoad: ItemDataLoad;

  dataIn:
    | ({ type: 'horizontal' } & HorizontalItemsDataIn)
    | ({ type: 'vertical' } & VerticalItemsDataIn);

  dataOut: SampleDataLoadOut;
};

const testMAPP = ({ dataLoad, dataIn, dataOut }: Props) => {
  if (dataIn.type === 'horizontal') {
    return (
      <HorizontalScreen dataIn={dataIn} dataLoad={dataLoad} dataOut={dataOut} />
    );
  } else if (dataIn.type === 'vertical') {
    return (
      <VerticalScreen dataIn={dataIn} dataLoad={dataLoad} dataOut={dataOut} />
    );
  } else {
    return <></>;
  }
};

export default testMAPP;
