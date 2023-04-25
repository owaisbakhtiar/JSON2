import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from '../store/context/favorites-context'
import { BUSINESS } from '../data/business-data'
import Colors from '../constants/Colors'
import MapChickBanner from '../components/MapChickBanner'
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesScreen = ({ navigation, route, id, }) => {
    
    const businessIndex = route.params.businessIndex;
    const msg = route.params.msg;
    const msgIndex = route.params.msgIndex;
    const selectedBusiness = route.params.selectedBusiness;
    const [commentValue, setCommentValue] = useState(msg ? msg : '');
    useEffect(() => {
        // setMsg();
    });
    const setMsg = () => {
        if (msg) {
            setCommentValue(msg);
        }
    }
    const saveComment = async() => {
        const commentsData = await AsyncStorage.getItem('comments');
        let commentList = JSON.parse(commentsData);
        console.log(commentList);
        // console.log('commentsData', commentsData);
        // console.log('businessIndex', businessIndex);
        if (msg) {
            let index = -1;
            let found = commentList.findIndex(element => element.businessIndex == businessIndex);
            if (found >=0) {
                console.log('rere', found);
                console.log(commentList[found].commentArray[msgIndex]);
                commentList[found].commentArray[msgIndex] = commentValue;
                console.log('commentList', commentList);
                // commentList[found].commentArray.push(commentValue);
                await AsyncStorage.setItem('comments', JSON.stringify(commentList));
                // console.log('found', found);
                // console.log('commentList', commentList);
            }
        } else {
            if (commentsData) {
                let commentList = JSON.parse(commentsData);
                let index = -1;
                let found = commentList.findIndex(element => element.businessIndex == businessIndex);
                if (found >=0) {
                    commentList[found].commentArray.push(commentValue);
                    await AsyncStorage.setItem('comments', JSON.stringify(commentList));
                    console.log('found', found);
                    console.log('commentList', commentList);
                } else {
                    const commentArray = [];
                    commentArray.push(commentValue);
                    commentList.push({
                        businessIndex: businessIndex,
                        commentArray: commentArray
                    });
                    await AsyncStorage.setItem('comments', JSON.stringify(commentList));
                    console.log('not found');
                } 
    
            } else {
                console.log('empty', commentValue);
                const commentArray = [];
                commentArray.push(commentValue);
                const allCommentsArray = [];
                allCommentsArray.push({
                    businessIndex: businessIndex,
                    commentArray: commentArray
                });
                await AsyncStorage.setItem('comments', JSON.stringify(allCommentsArray));
            }
        }    
        
        // await AsyncStorage.removeItem('comments');
        // await AsyncStorage.setItem('comments', JSON.stringify(commentValue));

        console.log(commentValue);
        navigation.goBack();
    }
    const changeInputValue = (val) => {
        console.log('val', val);
        setCommentValue(val);
    }
    return (
        <>
        <MapChickBanner />

        <ScrollView>
            <View style={{
                borderWidth: 1, borderColor: Colors.primaryColor,
                marginHorizontal: 20, marginTop: 15, borderRadius: 20,
                padding: 10
            }}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{color: Colors.primaryColor, fontSize: 22, fontWeight: 'bold'}}>
                        {selectedBusiness.businessTitle}
                    </Text>
                    <View style={{width: '100%', marginHorizontal: 10, height: 130, borderRadius: 10}}>
                        <View style={{backgroundColor: '#ccc', width: '100%', height: 130, borderRadius: 10}}>
                        <Image
                            style={{width: '100%', height: 130}}
                            source={{ uri: selectedBusiness.imageUrl }}
                        />
                        {/* {imageUrl} */}
                        </View>
                    </View>
                </View>

                <View style={{marginHorizontal: 10, marginTop: 20, marginBottom: 5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        Add/change comments
                    </Text>
                </View>
                <View style={{marginHorizontal: 0}}>
                    <TextInput
                        style={{borderWidth: 1, borderRadius: 10, padding: 10, borderColor: '#bbb', minHeight: 100}}
                        multiline
                        placeholder="Enter comments here"
                        fontSize={16}
                        value={commentValue}
                        onChangeText = {(title) => {setCommentValue(title)}}
                        // onChangeText={newText => changeInputValue(newText)}
                        // defaultValue={commentValue}
                        // onChangeText={(val) => { changeInputValue(val) }}
                        // value={commentValue}
                    />
                </View>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
                    <MainButton
                        onPress={() => saveComment()}
                        // onPress={() => navigation.goBack()}
                        >
                            Save{'\n'}comments
              </MainButton>
                                  <MainButton
                        onPress={() => navigation.goBack()}>
                            Remove from{'\n'}favorites
                    </MainButton>

                </View>
          </View>
                          <View style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center' }}>
                        To view all your saved
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'center' }}>
                        favorites, press the <Ionicons name="heart-outline" size={24} color={Colors.primaryColor} /> icon
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 4 }}>
                        at bottom of screen.
                    </Text>
                </View>

        </ScrollView>
        </>
    )
}



export default FavoritesScreen

const styles = StyleSheet.create({
    image: {
        width: '70%',
        alignSelf: 'center',
        height: undefined,
    }
})