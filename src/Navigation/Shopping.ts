import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Shopping from '../Screens/Shopping';
import ShoppingCart from '../Screens/Shopping/ShoppingCart';
import SingleProduct from '../Screens/Shopping/SingleProduct';
import ListingCategory from '../Screens/Shopping/ListCategory';
import GridCategory from '../Screens/Shopping/GridCategory';
import FlashSale from '../Screens/Shopping/FlashSale';
import BestSeller from '../Screens/Shopping/BestSeller';
import Balance from '../Screens/Shopping/Balance';


const TabNavigator = createBottomTabNavigator({
  Shopping: Balance,
  Cart: ShoppingCart,
  Single: SingleProduct,
  Listing: ListingCategory,
  Grid: GridCategory,
  Flash: FlashSale,
  Best: BestSeller
});

export default createAppContainer(TabNavigator);