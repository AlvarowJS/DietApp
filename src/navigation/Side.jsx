import { Text, Dimensions, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import React from 'react'

import Strings from '../utils/Strings';
import Feather from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';

const styles = require('../../assets/files/Styles');
const Side = ({navigation}) => {
  return (
    <View style={styles.container_menu} >

    <View style={styles.sideMenu} >

        <Image
            source={require('../../assets/images/logo.png')}
            style={{ flex: 3, width: 220, height: 320, marginBottom: 50 }}
            resizeMode='contain' />

        <TouchableOpacity style={styles.item_menu} onPress={() => navigation.navigate('Dashboard')} icon>
            <Feather name="pie-chart" style={styles.iconSidemenu} />
            <Text style={styles.text_menu}>{Strings.ST2}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_menu} onPress={() => navigation.navigate('Evolucion')} icon>

            <SimpleLineIcons name="heart" style={styles.iconSidemenu} />
            <Text style={styles.text_menu}>{Strings.ST3}</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item_menu} onPress={() => navigation.navigate('Plan')} icon>

            <MaterialCommunityIcons name="food-apple-outline" style={styles.iconSidemenu} />
            <Text style={styles.text_menu}>{Strings.ST4}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item_menu} onPress={() => navigation.navigate('Entrenamiento')} icon>
            <FontAwesome5 name="running" style={styles.iconSidemenu} />
            <Text style={styles.text_menu}>{Strings.ST5}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item_menu} onPress={() => navigation.navigate('FueraCasa')} icon>

            <MaterialCommunityIcons name="silverware-fork-knife" style={styles.iconSidemenu} />
            <Text style={styles.text_menu}>{Strings.ST6}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item_menu} onPress={() => navigation.navigate('Recetario')} icon>
            <Foundation name="clipboard-notes" style={styles.iconSidemenu} />
            <Text style={styles.text_menu}>{Strings.ST7}</Text>
        </TouchableOpacity>

        <View style={styles.logout} >

            <View style={{ marginTop: 10 }}>
                <FontAwesome name="user-circle" style={styles.iconSidemenu} />
            </View>
            <View>
                <Text style={styles.text_menu}>{Strings.STUSER}</Text>
                <Text style={styles.text_menu}>{Strings.STMAIL}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Ionicons name="exit-outline" style={styles.iconSidemenu} />
                </TouchableOpacity>
            </View>
        </View>
    </View>

</View >
  )
}

export default Side