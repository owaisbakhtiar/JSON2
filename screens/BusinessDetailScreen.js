import { ScrollView, FlatList, StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useContext, useState, useEffect } from 'react'
import MapChickBanner from '../components/MapChickBanner';
import { BUSINESS, CATEGORIES, SUBCATEGORIES } from '../data/business-data';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import ReadMore from 'react-native-read-more-text';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FavoritesContext } from '../store/context/favorites-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BusinessDetailScreen = ({ route, navigation, id }) => {
	  const favoriteBusinessCtx = useContext(FavoritesContext);
    const businessId = route.params.businessId;
    const businessIndex = route.params.businessIndex;  
    const selectedBusiness = BUSINESS.find((business) => business.id === businessId);
    const businessIsFavorite = favoriteBusinessCtx.ids.includes(businessId);

    const [comments, setComments] = useState([]);

    useEffect(() => {
      navigation.addListener('focus', () => {
        setCommentsListOnPage();
        // console.log('test');
      });
    });
    useEffect(() => {
      console.log('test fav business', favoriteBusinessCtx);
      setFavStorage();
    }, [favoriteBusinessCtx]);
    useLayoutEffect(() => {
      console.log('business index ', businessIndex);
      const selectedBusiness = BUSINESS.find (
        (business) => business.id === businessId
        ).title;
        navigation.setOptions({
          title: selectedBusiness
        });
    }, [businessId, navigation]);
    
    const setFavStorage = async() => {
      await AsyncStorage.setItem("favoriteBusiness", JSON.stringify(favoriteBusinessCtx));
    }
    const setCommentsListOnPage = async() => {
      console.log('favoriteBusinessCtx', favoriteBusinessCtx);
      const commentsData = await AsyncStorage.getItem('comments');
      const commentDataParse = JSON.parse(commentsData);
      let found = -1;
      // console.log('commentDataParse', commentDataParse);
      if (commentDataParse) {
        found = commentDataParse.findIndex(element => element.businessIndex == businessIndex);
        // console.log('comment parse data', commentDataParse);
        // console.log('bus index', businessIndex);
        console.log('found', found);
        if (commentDataParse[found] && commentDataParse[found].commentArray) {
          setComments(commentDataParse[found].commentArray);
        }
      }
    }
  
    function favoritesToggleOnOffHandler() {
        if (businessIsFavorite) {
            favoriteBusinessCtx.removeFavorite(businessId);
        } else {
            favoriteBusinessCtx.addFavorite(businessId);
        }
    }

    function favoritesNavigationHandler() {
      // console.log('test');
      // return
      if (businessIsFavorite) {
          ''
      } else {
        navigation.navigate('FavoritesEditScreen', {
          businessId: id,
          businessIndex: businessIndex,
          selectedBusiness: selectedBusiness
        });
          // navigation.navigate('FavoritesEditScreen', {
          //     businessId: id,
          // });
      }
    }

    function navigationAndToggleCombined() {
        favoritesToggleOnOffHandler();
        // favoritesNavigationHandler();
    }  

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity
                        onPress={navigationAndToggleCombined}
                    >
                        <Ionicons
                            name={businessIsFavorite ? 'heart' : 'heart-outline'}
                            size={28}
                            color={Colors.primaryColor}
                        />
                    </TouchableOpacity>
                )
            }
        });
    }, [navigation, navigationAndToggleCombined]);

    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={styles.footer} onPress={handlePress}>
                Read more
            </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={[styles.footer, {color: 'red'}]} onPress={handlePress}>
                Show less
            </Text>
        );
    }

    _handleTextReady = () => {
        // ...
    }
    function addComment() {
        navigation.navigate('FavoritesEditScreen', {
          businessId: id,
          businessIndex: businessIndex,
          selectedBusiness: selectedBusiness
        });
    }
    function editComment(item, index) {
      console.log('item', item, index)
      // return;
      navigation.navigate('FavoritesEditScreen', {
        businessId: id,
        businessIndex: businessIndex,
        msg: item,
        msgIndex: index,
        selectedBusiness: selectedBusiness
      });
    }
    
    const deleteComment = async(item, index) => {
      const commentsData = await AsyncStorage.getItem('comments');
      const commentDataParse = JSON.parse(commentsData);
      let found = -1;
      // console.log('commentDataParse', commentDataParse);
      if (commentDataParse) {
        found = commentDataParse.findIndex(element => element.businessIndex == businessIndex);
        let myComments = comments;
        let updatedCommentState = myComments.splice(index, 1);
        // console.log('updatedCommentState', updatedCommentState);
        // console.log('myComments', myComments);
        setComments([...myComments]);
        commentDataParse[found].commentArray = myComments;
        console.log('commentDataParse', commentDataParse);
        await AsyncStorage.setItem("comments", JSON.stringify(commentDataParse));
      }
    }
    const navigateToDetails = () => {
      navigation.navigate('FavoritesEditScreen', {
          businessId: id,
          businessIndex: businessIndex,
          selectedBusiness: selectedBusiness
        });
    }
    return (
      <>
      <MapChickBanner />
          <ScrollView style={{height: '100%'}}>
              <View style={{}}>
                  <Image
                      style={{width: '100%', height: 240}}
                      source={{ uri: selectedBusiness.imageUrl }}
                  />
                  {businessIsFavorite ? (
                      <View style={styles.favoriteOption}>
                          <Text style={styles.favoriteOptionText}>
                              <Ionicons name="heart" size={14} color={Colors.primaryColor} /> Saved favorite
                          </Text>
                      </View>
                  )  : null}
              </View>

              <View style={styles.mainContainer}>
                  <View style={styles.locationHoursContainer}>
                      <View>
                          <Text style={{ fontSize: 16 }}>
                              {selectedBusiness.location}
                          </Text>
                      </View>
              
                      <View style={{}}>
                          <Text style={{ fontSize: 16, textAlign: 'right' }}>
                              {selectedBusiness.hours1}
                          </Text>
                          <Text style={{ fontSize: 16, textAlign: 'right' }}>
                              {selectedBusiness.hours2}
                          </Text>
                
            </View>
          </View>
          <TouchableOpacity onPress={navigateToDetails} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: Colors.primaryDark}} onPress={addComment}>View Details</Text> 
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>About {selectedBusiness.businessTitle}</Text>

          <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}
              onReady={this._handleTextReady}>
              <Text style={{fontSize: 16}}>
                {selectedBusiness.description}
              </Text>
            </ReadMore>
            </View>
          <View style={{ marginVertical: 15, backgroundColor: '#ddd', padding: 15, borderRadius: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>User comments</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}} onPress={addComment}>Add New</Text> 
            </View>
          {comments.map((item, index) => {
            console.log('comment item', item);
            return (
              <View key={index} style={{ paddingVertical: 10, flexDirection: 'row' }}>
                <Text style={{fontSize: 16, flex: 1}}>{item}</Text>
                <TouchableOpacity onPress={() => {editComment(item, index)}} style={{ padding: 5 }}>
                  <FontAwesome
                    name="edit"
                    size={22}
                    color={Colors.primaryDark}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {deleteComment(item, index)}} style={{ padding: 5 }}>
                  <FontAwesome
                    name="trash"
                    size={22}
                    color={Colors.primaryDark}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
         
      
          </View>

          
        {/* <Text>{selectedBusiness.website}</Text>
        <Text>{selectedBusiness.facebook}</Text>
        <Text>{selectedBusiness.email}</Text>
        <Text>{selectedBusiness.phone}</Text>
        <Text>{selectedBusiness.whatsapp}</Text> */}
        
{/* CONTAINER for wifi/cellular items */}
        <View style={styles.wifiItemsBox}>
          <Text style={styles.wifiBoxTitle}>
            These features require{'\n'} WiFi or cellular data
          </Text>

{/* CONTAINER for Menu and photo buttons */}
          <View style={styles.rowBox}>
            <TouchableOpacity style={styles.menuPhotosBox}>
              <MaterialCommunityIcons
                name="book-open-page-variant-outline"
                size={40}
                color="white"
              />
              <Text style={styles.menuPhotoTitle}>
                View{'\n'}menu
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuPhotosBox}>
              <Fontisto
                name="photograph"
                size={37}
                color="white" />
              <Text style={styles.menuPhotoTitle}>
                More{'\n'}photos
              </Text>
            </TouchableOpacity>  
          </View>

{/* CONTACT icons in a row */}
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
              onPress={() => { Linking.openURL("mailto") }}>
              <MaterialCommunityIcons
                name="web"
                size={30}
                color='white'
              />
            </TouchableOpacity>
    
            <TouchableOpacity
              onPress={() => { Linking.openURL("mailto") }}>
              <FontAwesome
                name="facebook-square"
                size={30}
                color='white'
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>{Linking.openURL("mailto")}}>
              <MaterialCommunityIcons
                name="email"
                size={30}
                color='white' />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>{Linking.openURL("mailto")}}>
              <MaterialCommunityIcons
                name="phone"
                size={30}
                color={Colors.primaryDark}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>{Linking.openURL("mailto")}}>
              <FontAwesome
                  name="whatsapp"
                  size={30}
                  color={Colors.primaryDark} />
            </TouchableOpacity>
          </View>
        </View>
{/* END OF container for wifi/cellular items */}
        <Text>{selectedBusiness.mapChick}</Text>
          </View>

      </ScrollView>
    </>
  )
  
}

export default BusinessDetailScreen

const styles = StyleSheet.create({
    footer:
      { color: Colors.primaryColor, marginTop: 3, fontSize: 16 },

    favoriteOption: {position: 'absolute', top: 20, right: 0, paddingVertical: 2, paddingRight: 15,
    paddingLeft: 15, backgroundColor: 'white', borderTopLeftRadius: 10, borderBottomLeftRadius: 10
  },
    
  favoriteOptionText: { fontWeight: 'bold', color: Colors.primaryColor, textAlign: 'right' },

  mainContainer: { marginHorizontal: 15, marginTop: 10, },

  locationHoursContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },

  favoritesContainer: {
    position: 'absolute', top: 20, right: 0,
    paddingVertical: 2, paddingRight: 15, paddingLeft: 15,
    backgroundColor: 'white', borderTopLeftRadius: 10, borderBottomLeftRadius: 10
  },
  baseText: {
    fontSize: 16
  },
  favoritesText: {
    fontWeight: 'bold', color: Colors.primaryColor, textAlign: 'right'
  },
  wifiItemsBox: {
    marginBottom: 15, paddingHorizontal: 15, paddingVertical: 10,
    borderWidth: 1, borderColor: '#ddd', borderRadius: 15,
    backgroundColor: Colors.primaryColor, 
  },
  wifiBoxTitle: {
    textAlign: 'center', marginBottom: 10,
    color: 'white', fontWeight: 'bold'
  },
  rowBox: {
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15
  },
  menuPhotosBox: {
    flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 3,
    alignItems: 'center', backgroundColor: Colors.primaryDark, borderRadius: 10
  },
  menuPhotoTitle: {
    marginLeft: 6, fontWeight: 'bold', color: 'white'
  },
  userCommentsBox: {
    marginVertical: 15, padding: 15,
    backgroundColor: '#ddd', borderRadius: 15
  },
})