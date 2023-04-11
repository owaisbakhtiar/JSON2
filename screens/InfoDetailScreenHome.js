import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { HOMEINFOBUBBLES } from '../data/business-data';
import { CATEGORIES, SUBCATEGORIES, CATEGORIESDATA } from '../data/business-data';
import MapChickBanner from '../components/MapChickBanner';

function InfoDetailScreenHome({ route, navigation }) {


      useLayoutEffect(() => {
      const infoTitle2 = HOMEINFOBUBBLES.find((category) => category.id === catId).infoTitle2;
      navigation.setOptions({
        title: infoTitle2
      });
    }, [catId, navigation]
    );

  // Category Id passed from my CategoriesScreen. The const now names it catId.
  // to get the items on details screen you can use route.params with prop name 
  const catId = route.params.categoryId;
  const infoTitle = route.params.infoTitle;
  const infoTitle2 = route.params.infoTitle2;
  const imageUrl = route.params.imageUrl;
  const description = route.params.description;
  const infoImageUrl = route.params.infoImageUrl;


  // I am able to pass the catId, but I cannot figure out how to pass the
  // title and imageUrl const now names it catId.
  // I've done about 10 online tutorials but can't seem to make it work here. 
  return (
    <>
      <MapChickBanner />

<View style={styles.container}>
      <Image 
        source={{uri: imageUrl }}
        style={{ width: '100%', height: 180 }}
      />
      <Text style={styles.title}>{description}</Text>
      {/* <Image 
        source={{uri: infoImageUrl }}
        style={{ width: '100%', height: 180 }}
      /> */}

      </View>
      </>
  );
}

export default InfoDetailScreenHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 0,
  },
  title: {
    fontSize: 18,
  }
});
