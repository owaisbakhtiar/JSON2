import React, { useState, useEffect, useContext } from 'react'
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import CategoriesCard from '../components/CategoriesCard'
import InfoCardHome from '../components/InfoCardHome';
import MapChickBanner from '../components/MapChickBanner'
import { CATEGORIES, CATEGORIESDATA } from '../data/business-data'
import { HOMEINFOBUBBLES } from '../data/business-data';
import Colors from '../constants/Colors'
import {DrawerActions} from "@react-navigation/routers";
import { FavoritesContext } from '../store/context/favorites-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CategoriesScreen({ navigation }) {
  const favoriteBusinessCtx = useContext(FavoritesContext);

  useEffect(() => {
    // console.log('test fav business', favoriteBusinessCtx);
    setFavStorage();
  }, []);

  const setFavStorage = async() => {
    const favBusiness = await AsyncStorage.getItem("favoriteBusiness");
    console.log('favBusiness', favBusiness);
    let getFavStorageData = JSON.parse(favBusiness);
    console.log('favBusiness', favBusiness);
    console.log('getFavStorageData', getFavStorageData);
    if (getFavStorageData) {
      getFavStorageData.ids.forEach((item) => {
        console.log('item', item);
        favoriteBusinessCtx.addFavorite(item);
      });
    }
  }
  function renderCategoriesCard(itemData) {
    function pressHandler() {
      console.log(itemData);
      // return
      // in case you want to pass the entire item, simply pass itemdata as a prop and get it in route.params on detail screen as we get other props
      navigation.navigate('SubCategoriesScreen', { //  you can pass entire obj or each item separately in navigation as props
        categoryId: itemData.item.id,
        categoryInfoData: itemData.item.categoryInfoData
      })
    }
    return (
      <CategoriesCard
        categoryTitle={itemData.item.categoryTitle}
        imageUrl={itemData.item.imageUrl}
        count={itemData.item.count}
        onPress={pressHandler}
      />
    )
  }


  function renderCategoryInfoItem(itemData) {
    function pressHandler() {
      navigation.navigate('InfoDetailScreenHome', {
        categoryId: itemData.item.id,
        infoTitle: itemData.item.infoTitle,
        infoTitle2: itemData.item.infoTitle2,
        imageUrl: itemData.item.imageUrl,
        description: itemData.item.description,
        infoImageUrl: itemData.item.infoImageUrl,
        }
      );
    }
    return (
      <InfoCardHome
        infoTitle={itemData.item.infoTitle}
        infoTitle2={itemData.item.infoTitle2}
        imageUrl={itemData.item.imageUrl}
        description={itemData.item.description}
        infoImageUrl={itemData.item.infoImageUrl}
        onPress={pressHandler}
      />
    );
  }


  const Header = () => {
    return (
      <FlatList
      style={{ marginBottom: 5 }}
      horizontal
      data={HOMEINFOBUBBLES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryInfoItem}
    />
    )
  }
  const Footer = () => {
    return <View style={{ height: 100 }} />
  }
  return (
    <>
      <MapChickBanner />
      <TouchableOpacity
        style={styles.subBannerContainer}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Text style={{}}>Instructions/support</Text>
      </TouchableOpacity>

      
      <FlatList
        // data={CATEGORIES}
        data={CATEGORIESDATA} // Passed new array with category info array for circles items in each category 
        keyExtractor={(item) => item.id}
        renderItem={renderCategoriesCard}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      />
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  noteContainer: {
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    justifyContent: 'center'
  },
  touchableContainer: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto', 
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 3
  },
  subBannerContainer: {
    alignItems: 'center',
    marginBottom: 5,
    borderBottomWidth: 1,
    paddingBottom: 2,
    borderBottomColor: Colors.primaryColorLightIcon
  },

});