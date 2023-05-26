import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useContext, useEffect } from 'react'
import Colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import FavoritesButton from './FavoritesButton';
import MainButton from '../MainButton';
import { BUSINESS } from '../../data/business-data';
import { FavoritesContext } from '../../store/context/favorites-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

function FavoritesListCard({ categoryId, id, subCategoryIds, subCategoryTitle, businessTitle, userComments, location, hours1, hours2, onPress, imageUrl }){
  // onPressRemoveBusiness
  const navigation = useNavigation();
  const favoriteBusinessCtx = useContext(FavoritesContext);

  useEffect(() => {
    setFavStorage();
  }, [favoriteBusinessCtx]);

  function selectBusinessHandler() {
    const index = BUSINESS.findIndex(element => element.id == id);
    navigation.navigate('BusinessDetailScreen', {
      categoryId: categoryId,
      businessId: id,
      businessIndex: index
    });
  }

  const removeFromFav = async() => {
    const fav_items_parsed = favoriteBusinessCtx.ids;
    // console.log('fav item parsed', fav_items_parsed);
    // check category if exist in storage
    if (fav_items_parsed && fav_items_parsed.length > 0) {
      const category_found = fav_items_parsed.findIndex(element => element.categoryId == categoryId);
      if (category_found >= 0) {
        const business_ids = fav_items_parsed[category_found].ids;
        // console.log('category_found in fav item storage', fav_items_parsed[category_found]);
        // check if business id exist in this category
        let id_found = -1;
        for (let i = 0; i < business_ids.length; i++) {
          // console.log('business id at index', i, ' is ', business_ids[i]);
          if (business_ids[i].id == id) {
            id_found = i;
          }
        }
        // console.log('business_found in fav item storage', id_found);
        if (id_found >= 0) {
          // fav_items_parsed[category_found].ids.push(businessId);
          business_ids.splice(id_found, 1);
          fav_items_parsed[category_found].ids = business_ids;
          if (business_ids.length == 0) {
            // console.log('business length is 0 after id removed so remove category as well');
            fav_items_parsed.splice(category_found, 1);
          }
          // console.log('category matched and business id is matched', business_ids);
          // console.log(fav_items_parsed);
        }
      }
      console.log('CATEGORY AND ID FOUND');
      favoriteBusinessCtx.addFavorite(fav_items_parsed);
      favoriteBusinessCtx.removeFavorite();
      await AsyncStorage.setItem("fav_item", JSON.stringify(fav_items_parsed));
      // onPressRemoveBusiness();
    }
  }

  const setFavStorage = async() => {
    console.log('fav context on delete FavoritesListCard');
    // await AsyncStorage.setItem("fav_item", JSON.stringify(favoriteBusinessCtx.ids));
  }

  return (
      
      <View style={{
        justifyContent: 'center', alignItems: 'center', marginLeft: 20,
        width: 300, backgroundColor: 'white', borderRadius: 20,
        borderColor: Colors.primaryColor, borderWidth: 1, padding: 10
      }}>
          <Text style={styles.title}>{businessTitle} </Text>
          <Text style={styles.title}>{categoryId} </Text>
          <Text style={styles.text}>{location}</Text>
          <Text style={styles.text}>{hours1}</Text>
          <Text style={styles.text}>{hours2}</Text>
          <Text style={[styles.textBold, {color: Colors.primaryColor, marginTop: 5}]}>Also a MapChick favorite</Text>


        <View style={{width: '100%', marginTop: 5}}>
          <TouchableOpacity onPress={selectBusinessHandler}>
            <Image
              style={{width: '100%', height: 120, borderRadius: 15}}
              source={{ uri: imageUrl }}
            />
          </TouchableOpacity>
          <View style={{ width: '100%',alignItems: 'center', marginTop: 15 }}>
                <MainButton
                  onPress={() => navigation.goBack()}>
            Add/change{'\n'}comments
              </MainButton>
            <View style={{marginTop: 10}} />

          <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center', marginTop: 5}}>
                <MainButton
                  onPress={selectBusinessHandler}
                  // onPress={() => navigation.goBack()}
                >
                  View{'\n'}business
              </MainButton>
                <MainButton
                  onPress={removeFromFav}
                  // onPress={() => navigation.goBack()}
                >
                  Remove from {'\n'}favorites
              </MainButton>
          </View>

        </View>
        </View>

      {/* <View>
         <ReadMoreCard text={userComments} />
        <Text style={styles.bottomRowText}>{userComments}</Text>
</View> */}
      
    </View>


  );
}

export default FavoritesListCard

const styles = StyleSheet.create({
  title: {
    fontSize: 20, fontWeight: 'bold', color: Colors.primaryColor
  },
  text: {
    fontSize: 17
  },
  textBold: {
    fontSize: 17, fontWeight: 'bold'
  }
});