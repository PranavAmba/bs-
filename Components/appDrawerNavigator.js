import *as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import { TabNavigator } from './tabNavigator';
import CustomSideBarMenu from './CSBM.js'
import Settings from '../screens/settings.js'
import MyDonations from '../screens/myDonations';
import Notification from '../screens/notification.js'
import MyReceivedBooksScreen from '../screens/myReceivedBooksScreen'

export const DrawerNavigator=createDrawerNavigator({
    Home:{screen:TabNavigator},
    Settings:{screen:Settings},
    MyDonations:{screen:MyDonations},
    Notification:{screen:Notification},
    ReceivedBooks:{screen:MyReceivedBooksScreen}
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
})