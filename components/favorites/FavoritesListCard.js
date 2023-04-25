import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import FavoritesButton from './FavoritesButton';
import MainButton from '../MainButton';
import { BUSINESS } from '../../data/business-data';


function FavoritesListCard({ id, subCategoryIds, subCategoryTitle, businessTitle, userComments, location, hours1, hours2, onPress, imageUrl }){
  const navigation = useNavigation();

  function favoritesEditHandler() {
    navigation.navigate('FavoritesEditScreen', {
     businessId: id,
   });
  }

  function selectBusinessHandler() {
    console.log('business id ', id);
    console.log('BUSINESS', BUSINESS[2]);
    const index = BUSINESS.findIndex(element => element.id == id);
    console.log('found', index);
    // console.log('index is ', index);
    //return;
    navigation.navigate('BusinessDetailScreen', {
      businessId: id,
      businessIndex: index
    });
  }
  
  return (
      
      <TouchableOpacity onPress={selectBusinessHandler} style={{
      justifyContent: 'center', alignItems: 'center', marginLeft: 20,
      width: 300, backgroundColor: 'white', borderRadius: 20,
      borderColor: Colors.primaryColor, borderWidth: 1, padding: 10
    }}>
    
      
        
        
          <Text style={styles.title}>{businessTitle} </Text>
          <Text style={styles.text}>{location}</Text>
          <Text style={styles.text}>{hours1}</Text>
          <Text style={styles.text}>{hours2}</Text>
          <Text style={[styles.textBold, {color: Colors.primaryColor, marginTop: 5}]}>Also a MapChick favorite</Text>


        <View style={{width: '100%', marginTop: 5}}>
          <Image
            style={{width: '100%', height: 120, borderRadius: 15}}
            source={{ uri: imageUrl }}
        />

          <View style={{ width: '100%',alignItems: 'center', marginTop: 15 }}>
                <MainButton
                  onPress={() => navigation.goBack()}>
            Add/change{'\n'}comments
              </MainButton>
            <View style={{marginTop: 10}} />

          <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center', marginTop: 5}}>
                <MainButton
                  onPress={() => navigation.goBack()}>
                  View{'\n'}business
              </MainButton>
                <MainButton
                  onPress={() => navigation.goBack()}>
                  Remove from {'\n'}favorites
              </MainButton>
            
</View>

        </View>
        </View>

      {/* <View>
         <ReadMoreCard text={userComments} />
        <Text style={styles.bottomRowText}>{userComments}</Text>
</View> */}
      
    </TouchableOpacity>


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