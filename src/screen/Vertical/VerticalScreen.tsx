import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image, Modal } from 'react-native';
import type { VerticalItems, ItemData } from 'src/types';
import _ from 'lodash';
import useViewModel from '../useViewModel';


type Props = {
  dataLoad: ItemData;
  dataIn: VerticalItems;
  dataOut: (value: string) => void;
};

const VerticalScreen = ({ dataLoad, dataIn }: Props) => {
  const {
    setIsVisible,
    isVisible,
    item,
    dataOutTest
  } = useViewModel();
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
          _.map(dataLoad, (item :any , i :any) => (
            <TouchableOpacity
              key={i}
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
          ))}
           
      </View>
      <Modal animationType="slide" visible={isVisible}>
        <View style={{ backgroundColor: '#F1F1F1', flex: 1, padding: 20 }}>
          <TouchableOpacity onPress={() => setIsVisible(false)}>
            <Text style={{ textAlign: 'right', fontSize: 25, color: 'gray' }}>
              x
            </Text>
          </TouchableOpacity>
          <Text style={[styles.ModalTitle,dataIn.verticalModalTitle]}> {item.itemName}</Text>
          <Text style={[styles.price, dataIn.verticalModalPrice]}>Price: ${item.price}</Text>
          <Image
            resizeMode="cover"
            source={{ uri: item.image }}
            style={{ width: '100%', height: '30%' }}
            borderRadius={5}
          />
          <Text style={[styles.description,dataIn.verticalModalDescription]}>{item.description}</Text>

        </View>
      </Modal>
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
  ModalTitle:{
    fontSize: 25,
    fontWeight: '600',
    textAlign:'center'
  },
  price:{
    color:'gray',
    paddingTop:3,
    paddingBottom:10

  },
  description:{
    color:'gray',
    fontSize:15,
    paddingTop:20
  }
});
