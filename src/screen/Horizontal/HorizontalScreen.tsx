import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';
import type { HorizontalItems } from 'src/types';
import type { ItemData } from '../../types';
import _ from 'lodash';

type Props = {
  dataLoad: ItemData;
  dataIn: HorizontalItems;
  dataOut: any;
};

const HorizontalScreen = ({ dataLoad, dataIn, dataOut }: Props) => {
  return (
    <>
      <View style={[styles.container,dataIn.horizontalContainerStyle]}>
        <Text style={[styles.ViewTitle, dataIn.horizontalTextStyle]}>
          {dataIn.text}
        </Text>
      </View>
      <ScrollView horizontal={true}>
        {dataLoad &&
          _.map(dataLoad, (item, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.ButtonWrap, dataIn.horizontalButtonStyle]}
            >
              <Text style={[styles.Title, dataIn.horizontalButtonTextTitle]}>
                {item.itemName}
              </Text>
              <Text style={dataIn.horizontalButtonTextprice}>
                ${item.price}
              </Text>
              <Image
                resizeMode="cover"
                source={{ uri: item.image }}
                style={{ width: '90%', height: '60%' }}
                borderRadius={5}
              />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </>
  );
};

export default HorizontalScreen;
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
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 3,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    marginBottom:10,
  },
  Title: {
    fontSize: 20,
    color: 'purple',
  },
});
