import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import type { VerticalItems, ItemData } from 'src/types';
import _ from 'lodash';

type Props = {
  dataLoad: ItemData;
  dataIn: VerticalItems;
  dataOut: any;
};

const VerticalScreen = ({ dataLoad, dataIn, dataOut }: Props) => {
  console.log(dataIn);
  return (
    <>
      <View style={[styles.container,dataIn.verticalContainerStyle]}>
        <Text style={[styles.ViewTitle, dataIn.verticalTextStyle]}>
          {dataIn.text}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {dataLoad &&
          _.map(dataLoad, (item, i) => (
            <TouchableOpacity
              key={i}
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
          ))}
      </View>
    </>
  );
};

export default VerticalScreen;
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  ViewTitle: {
    fontSize: 25,
    fontWeight: '600',
  },
  ButtonWrap: {
    marginHorizontal: 5,
    backgroundColor: 'white',
    width: 95,
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
});
