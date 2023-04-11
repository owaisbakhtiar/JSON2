import React, { useLayoutEffect } from 'react'
import { FlatList, View, Text } from 'react-native';
import SubCategoriesCard from '../components/SubCategoriesCard';
import InfoCardCategories from '../components/InfoCardCategories';
import MapChickBanner from '../components/MapChickBanner';
import { CATEGORIES, SUBCATEGORIES, CATEGORIESDATA } from '../data/business-data';
import { CATEGORIESINFO } from '../data/business-data';

function SubCategoriesScreen({ navigation, route }) {

  // to get the items on details screen you can use route.params with prop name 
  const catId = route.params.categoryId;
  const categoryInfoData = route.params.categoryInfoData;

 
    const displaySubCategories = SUBCATEGORIES.filter((catItem) => {
      return catItem.subCategoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
      const categoryTitle = CATEGORIESDATA.find((category) => category.id === catId).categoryTitle;
      navigation.setOptions({
        title: categoryTitle
      });
    }, [catId, navigation]
    );

 
    function renderSubCategories(itemData) {
      function pressHandler() {
        navigation.navigate('BusinessListScreen', {
          categoryId: itemData.item.id,
        });
      }

      return (
        <SubCategoriesCard
          subCategoryTitle={itemData.item.subCategoryTitle}
          imageUrl={itemData.item.imageUrl}
          count={itemData.item.count}
          onPress={pressHandler}
        />
      );
    }
  
  
    function renderCategoryInfoItem(itemData) {
    function pressHandler() {
      console.log('itemdata', itemData);
      navigation.navigate('InfoDetailScreenCategories', {
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
      <InfoCardCategories
        infoTitle={itemData.item.infoTitle}
        imageUrl={itemData.item.imageUrl}
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
      data={categoryInfoData}
      // data={CATEGORIESINFO}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryInfoItem}
    />
    )
  }
  
    const Footer = () => {
      return (
        <View style={{height: 100}} />
      );
    };

    return (
      <>
        <MapChickBanner />
        
        <FlatList
          style={{marginTop: 10}}
          data={displaySubCategories}
          keyExtractor={(item) => item.id}
          renderItem={renderSubCategories}
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
        />
    </>
  );
}

export default SubCategoriesScreen;
