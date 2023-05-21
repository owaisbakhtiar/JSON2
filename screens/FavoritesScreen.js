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
  const [favItems, setFavItems] = useState([]);
  const favoriteBusinessCtx = useContext(FavoritesContext);
  const favoriteBusiness = favoriteBusinessCtx.ids;
  // const favoriteBusiness = BUSINESS.filter(business =>
  //   favoriteBusinessCtx.ids.includes(business.id));
  
  useEffect(() => {
    navigation.addListener('focus', () => {
      // console.log('fav business context', favoriteBusinessCtx.ids[0]);
      // setCommentsListOnPage();
      // console.log('favourites focused and fav storage data is');
      get_fav_data();
    });
  });
  // useEffect(() => {
  //   console.log('load fav list on favorite business context load or change');
  //   get_fav_data();
  // }, [favoriteBusinessCtx]);
  
  const get_fav_data = async() => {
    const fav_items_parsed = favoriteBusinessCtx.ids;
    let fav_list_items = [];
    if (fav_items_parsed && fav_items_parsed.length) {
      for (let i = 0; i < SUBCATEGORIES.length; i++) {
        for (let j = 0; j < fav_items_parsed.length; j++) {
          if (fav_items_parsed[j].categoryId == SUBCATEGORIES[i].id) {
            const ids_list = fav_items_parsed[j].ids;
            // console.log('fav_items_parsed[j].ids', SUBCATEGORIES[i].subCategoryTitle)
            // const favoriteBusiness = BUSINESS.filter(business => 
            //   ids_list.includes(business.id)
            // );
            const favoriteBusiness = BUSINESS.filter((elem) => {
              return ids_list.some((ele) => {
              return ele.id === elem.id;
                });
            });
            const selected_data = {
              categoryId: fav_items_parsed[j].categoryId,
              categoryName: SUBCATEGORIES[i].subCategoryTitle,
              ids: favoriteBusiness
            }
            // console.log(favoriteBusiness.length);
            if (favoriteBusiness.length) {
              fav_list_items.push(selected_data);
            }
            // console.log('fav businesses', favoriteBusiness);
            // console.log('match found on id', fav_items_parsed[j], SUBCATEGORIES[i].id);
          }
        }
      }
    }
    // console.log(fav_list_items.length);
    setFavItems(fav_list_items);
  }
  const get_fav_data1 = async() => {
    const fav_items = await AsyncStorage.getItem("fav_item");
    const fav_items_parsed = JSON.parse(fav_items);
    let fav_list_items = [];
    if (fav_items_parsed && fav_items_parsed.length) {
      for (let i = 0; i < SUBCATEGORIES.length; i++) {
        for (let j = 0; j < fav_items_parsed.length; j++) {
          if (fav_items_parsed[j].categoryId == SUBCATEGORIES[i].id) {
            const ids_list = fav_items_parsed[j].ids;
            // console.log('fav_items_parsed[j].ids', SUBCATEGORIES[i].subCategoryTitle)
            // const favoriteBusiness = BUSINESS.filter(business => 
            //   ids_list.includes(business.id)
            // );
            const favoriteBusiness = BUSINESS.filter((elem) => {
              return ids_list.some((ele) => {
              return ele.id === elem.id;
                });
            });
            const selected_data = {
              categoryId: fav_items_parsed[j].categoryId,
              categoryName: SUBCATEGORIES[i].subCategoryTitle,
              ids: favoriteBusiness
            }
            // console.log(favoriteBusiness.length);
            if (favoriteBusiness.length) {
              fav_list_items.push(selected_data);
            }
            // console.log('fav businesses', favoriteBusiness);
            // console.log('match found on id', fav_items_parsed[j], SUBCATEGORIES[i].id);
          }
        }
      }
    }
    // console.log(fav_list_items.length);
    setFavItems(fav_list_items);
  }
  const renderBusinessList = ({ item, index }) => {
    // console.log(item);
    // onPressRemoveBusiness={removeBusiness}
    return (
      <View>
        <Text style={styles.categoryTitle}>{item.categoryName}</Text>
        <Text style={styles.savedFavoritesTitle}>Saved favorites</Text>
        <FavoritesList onPressRemoveBusiness={removeBusiness} categoryId={item.categoryId} items={item.ids} />
        <View style={styles.thickBorder} />
      </View>
    );
  };
  
  const removeBusiness = () => {
    get_fav_data();
    // alert('test remove');
  }

  if (favItems.length === 0) {
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
        data={favItems}
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