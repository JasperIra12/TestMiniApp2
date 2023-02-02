import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  FlatList,
  Image,
} from 'react-native';
import type { HorizontalItemsDataIn } from 'src/types';
import type { ItemDataLoad } from '../../types';
import _ from 'lodash';
import type { SampleDataLoadOut } from 'src/types';

type Props = {
  dataLoad: ItemDataLoad;
  dataIn: HorizontalItemsDataIn;
  dataOut: SampleDataLoadOut;
};

const HorizontalScreen = ({ dataLoad, dataIn, dataOut }: Props) => {
  const renderItem = ({ item, index }: any) => (
    <TouchableOpacity
      key={index}
      onPress={() => dataOut(item)}
      style={[styles.buttonWrap, dataIn.horizontalButtonStyle]}
    >
      <Text style={[styles.title, dataIn.horizontalButtonTextTitle]}>
        {item.itemName}
      </Text>
      <Text style={dataIn.horizontalButtonTextprice}>${item.price}</Text>
      <Image
        resizeMode="cover"
        source={{ uri: item.image }}
        style={{ width: '90%', height: '60%' }}
        borderRadius={5}
      />
    </TouchableOpacity>
  );

  return (
    <>
      <View style={[styles.container, dataIn.horizontalContainerStyle]}>
        <Text style={[styles.viewTitle, dataIn.horizontalTextStyle]}>
          {dataIn.text}
        </Text>
      </View>
      <FlatList horizontal={true} data={dataLoad} renderItem={renderItem} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  viewTitle: {
    fontSize: 25,
    fontWeight: '600',
  },
  buttonWrap: {
    marginHorizontal: 5,
    backgroundColor: 'white',
    width: 95,
    height: 130,
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 3,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    color: 'purple',
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
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    width: 80,
    height: 40,
    alignSelf: 'center',
    borderRadius: 20,
  },
});
export default HorizontalScreen;
