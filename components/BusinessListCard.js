import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

function BusinessListCard({ categoryId, id, businessTitle, location, hours1, hours2, onPress, imageUrl, index }){
  const navigation = useNavigation();

  function selectBusinessHandler() {
    // console.log('category id', categoryId);
    // console.log('business id ', id);
    // console.log('index is ', index);
    // return;
    navigation.navigate('BusinessDetailScreen', {
      categoryId: categoryId,
      businessId: id,
      businessIndex: index
    });
  }

  return (
    <TouchableOpacity onPress={selectBusinessHandler} >

      <View style={styles.banner}>
        <Text style={styles.title}>{businessTitle} </Text>
      </View>
      <View style={{}}>
        <Image
            style={{width: '100%', height: 180}}
            source={{ uri: imageUrl }}
        />
        </View>
      <View style={styles.bottomRowContainer}>
        <Text style={styles.bottomRowText}>{location}</Text>
        <View>
          <Text style={styles.bottomRowText}>{hours1}</Text>
          <Text style={styles.bottomRowText}>{hours2}</Text>
        </View>
      </View>
      
    </TouchableOpacity>
  );
}

export default BusinessListCard

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    paddingVertical: 2,
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 15,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    backgroundColor: '#bbb',
  },
  bottomRowContainer: {
    marginBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: Colors.white
  },
  bottomRowText: {
    fontSize: 14,
  }
});