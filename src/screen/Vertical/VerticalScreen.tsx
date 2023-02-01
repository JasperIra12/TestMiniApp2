import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import type { VerticalItems, ItemData, sampleDataOut } from 'src/types';
import _ from 'lodash';
import useViewModel from '../useViewModel';

type Props = {
  dataLoad: ItemData;
  dataIn: VerticalItems;
  dataOut: sampleDataOut;
};
const width = Dimensions.get('screen').width;
const VerticalScreen = ({ dataLoad, dataIn, dataOut }: Props) => {
  console.log('test', dataLoad);
  const { dataOutTest } = useViewModel({
    dataOut,
  });
  return (
    <>
      <View style={[styles.container, dataIn.verticalContainerStyle]}>
        <Text style={[styles.ViewTitle, dataIn.verticalTextStyle]}>
          {dataIn.text}
        </Text>
      </View>
      <FlatList
        data={dataLoad}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            onPress={() => dataOutTest(item)}
            style={[styles.ButtonWrap, dataIn.verticalTextStyle]}
          >
            <Text style={[styles.Title, dataIn.verticalButtonTextTitle]}>
              {item.itemName}
            </Text>
            <Text style={dataIn.verticalButtonTextprice}>${item.price}</Text>
            <Image
              resizeMode="cover"
              source={{ uri: item.image }}
              style={{ width: '90%', height: '60%' }}
              borderRadius={10}
            />
          </TouchableOpacity>
        )}
        numColumns={3}
      />
    </>
  );
};

export default VerticalScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewTitle: {
    fontSize: 25,
    fontWeight: '600',
  },
  ButtonWrap: {
    marginHorizontal: 3,
    backgroundColor: 'white',
    width: width / 3 - 20,
    height: 130,
    borderRadius: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    elevation: 5,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.9,
  },
  Title: {
    fontSize: 20,
    color: 'purple',
  },
  ModalTitle: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
  price: {
    color: 'gray',
    paddingTop: 3,
    paddingBottom: 10,
  },
  description: {
    color: 'gray',
    fontSize: 15,
    paddingTop: 20,
  },
  AddButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    width: 80,
    height: 40,
    alignSelf: 'center',
    borderRadius: 20,
  },
});
