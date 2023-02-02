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
import type {
  VerticalItemsDataIn,
  ItemDataLoad,
  SampleDataLoadOut,
} from 'src/types';
import _ from 'lodash';

type Props = {
  dataLoad: ItemDataLoad;
  dataIn: VerticalItemsDataIn;
  dataOut: SampleDataLoadOut;
};

const height = Dimensions.get('screen').height;

console.log(height * 0.6);
const VerticalScreen = ({ dataLoad, dataIn, dataOut }: Props) => {
  return (
    <View style={{ maxHeight: '60%' }}>
      <View style={[styles.container, dataIn.verticalContainerStyle]}>
        <Text style={[styles.viewTitle, dataIn.verticalTextStyle]}>
          {dataIn.text}
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{
          flexDirection: 'column',
          alignContent: 'center',
          width: '100%',
        }}
        data={dataLoad}
        renderItem={({ item, index }: any) => (
          <TouchableOpacity
            key={index}
            onPress={() => dataOut(item)}
            style={[styles.buttonWrap, dataIn.verticalTextStyle]}
          >
            <Text style={[styles.title, dataIn.verticalButtonTextTitle]}>
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
        numColumns={2}
      />
    </View>
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
    marginHorizontal: '5%',
    backgroundColor: 'white',
    maxWidth: '40%',
    width: '40%',
    maxHeight: '100%',
    height: height * 0.25,
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
  title: {
    fontSize: 20,
    color: 'purple',
  },
  modalTitle: {
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
export default VerticalScreen;
