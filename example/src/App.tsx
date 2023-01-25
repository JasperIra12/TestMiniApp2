import { useState } from 'react';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TestMAPP } from 'test-mini-app';

export default function App() {
  const dummyData = [
    {
      itemName: 'Manggo',
      price: 10,
      image:'https://www.dole.com/-/media/project/dole/article-images/wann-ist-eine-mango-reif.jpg?w=1680&rev=3803fcecd0964a5899ae39b0e90a3582&hash=286DAAD3F9EDA009B666BB6FC3AABA92'
    },
    {
      itemName: 'Apple',
      price: 15,
      image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=1.00xw:0.631xh;0.00160xw,0.206xh&resize=980:*'
    },
    {
      itemName: 'Ponkan',
      price: 18,
      image:'https://cdn.shopify.com/s/files/1/0363/4577/4219/products/ponkan-orange_1024x1024@2x.jpg?v=1590551401'
    },
    {
      itemName: 'Coconut',
      price: 8,
      image:'https://plantvillage-production-new.s3.amazonaws.com/image/3256/file/default-c2e03622348a0493969d3e07d8e14b2b.jpg'
    },
    {
      itemName: 'Banana',
      price: 12,
      image:'https://res.cloudinary.com/dtpgi0zck/image/upload/s--lwx5WR08--/c_fit,h_580,w_860/v1/EducationHub/photos/banana-bunches.jpg'
    },
    {
      itemName: 'Grapes',
      price: 26,
      image:'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/grapes_0.jpg?itok=uYYnmpTm'
    },
  ];
  const [screenType, setScreenType] = useState<string | any>('horizontal');
  const [screenTitle, SetscreenTitle] = useState<string>('Horizontal View');

  const ChangeType = () => {
    if (screenType === 'horizontal') {
      setScreenType('vertical');
      SetscreenTitle('Vertical View');
    } else {
      setScreenType('horizontal');
      SetscreenTitle('Horizontal View');
    }
    console.log(screenTitle, ' : ', screenType);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.changeView} onPress={() => ChangeType()}>
        <Text>click me</Text>
      </TouchableOpacity>
      <TestMAPP
        dataIn={{
          type: screenType,
          text: screenTitle,
          horizontalTextStyle: { color: 'purple' },
          verticalTextStyle: { color: 'purple' },
        }}
        dataLoad={dummyData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  changeView: {
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 15,
    paddingVertical: 15,
  },
});
