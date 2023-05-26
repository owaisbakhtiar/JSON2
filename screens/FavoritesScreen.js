import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import FavoritesList from '../components/favorites/FavoritesList'
import MapChickFavoritesList from '../components/favorites/MapChickFavoritesList'
import { FavoritesContext } from '../store/context/favorites-context'
import { BUSINESS, SUBCATEGORIES } from '../data/business-data';
import Colors from '../constants/Colors'
import MapChickBanner from '../components/MapChickBanner'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler'


const FavoritesScreen = ({navigation}) => {
  const favoriteBusinessCtx = useContext(FavoritesContext);
  const favoriteBusiness = favoriteBusinessCtx.ids;
  // const favoriteBusiness = BUSINESS.filter(business =>
  //   favoriteBusinessCtx.ids.includes(business.id));
  
  useEffect(() => {
    navigation.addListener('focus', () => {
      // console.log('fav business context', favoriteBusinessCtx.ids[0]);
      // setCommentsListOnPage();
      // console.log('favourites focused and fav storage data is');
      // get_fav_data();
    });
  });
  useEffect(() => {
    console.log('load fav list on favorite business context load or change');
    // get_fav_data();
  }, [favoriteBusinessCtx]);

  const renderBusinessList = ({ item, index }) => {
    // console.log(item);
    // onPressRemoveBusiness={removeBusiness}
    return (
      <View>
        <Text style={styles.categoryTitle}>{item.categoryName}</Text>
        <Text style={styles.savedFavoritesTitle}>Saved favorites</Text>
        <FavoritesList categoryId={item.categoryId} items={item.ids} />
        <View style={styles.thickBorder} />
      </View>
    );
  };

  if (favoriteBusiness.length === 0) {
    return (
      <View style={{backgroundColor: 'white'}}>
        <MapChickBanner />
        <ScrollView>
            <View style={{ marginHorizontal: 15, marginBottom: 100 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                You have no saved favorites
              </Text>
              <Text style={{ fontSize: 18, }}>
                To save a favorite, navigate to a business screen
                and press the outlined star in the upper-right corner.{'\n'}
                {'\t'}A solid star indicates that a business has already been saved as a favorite.
              </Text>
              <View style={{marginTop: 10}}>
                <Image
                  style={[styles.image, {aspectRatio: 1 / 2,}]}
                  source={require('../assets/images/star1.jpg')}
                />
              </View >
            </View>
        </ScrollView>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <MapChickBanner />
      <FlatList
        data={favoriteBusiness}
        keyExtractor={(item) => item.categoryId}
        renderItem={renderBusinessList}
      />
    </View>
  )
}
export default FavoritesScreen

const styles = StyleSheet.create({
  categoryTitle: {
    marginLeft: 20,
    fontSize: 30,
    color: Colors.primaryColor
  },
  savedFavoritesTitle: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  thinBorder: {
    marginLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    paddingBottom: 10,
    marginBottom: 10
  },
  thickBorder: {
    marginLeft: 20,
    borderBottomWidth: 4,
    borderBottomColor: Colors.primaryColor,
    paddingBottom: 10,
    marginBottom: 10
  },
  image: {
    width: '70%',
    alignSelf: 'center',
    height: undefined,
  },
})