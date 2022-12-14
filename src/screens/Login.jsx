import React from 'react'
import { Image, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Strings from '../utils/Strings';
import { useNavigation } from '@react-navigation/native';
let styles = require('../../assets/files/Styles.js');

const Login = () => {

    const navigation = useNavigation()
  return (
    <ScrollView>
            <View style={{ flex: 0.8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#F4F5FA' }}>

                <Image source={require('../../assets/images/chica.png')} style={styles.girl_start} resizeMode="contain" />
                <Image source={require('../../assets/images/logo_dark.png')} style={styles.logo_start} resizeMode="contain" />
                <Text style={{ fontSize: 25, color: '#000', fontWeight: 'bold' }}>{Strings.ST26}</Text>
                <View rounded style={styles.inputLogin}>
                    <TextInput placeholder={Strings.ST105} placeholderTextColor="#a4a4a4" style={{ fontSize: 16, color: '#23233C' }} autoCapitalize="none" />
                </View>

                <View rounded style={styles.inputLogin}>
                    <TextInput placeholder={Strings.ST106} placeholderTextColor="#a4a4a4" style={{ fontSize: 16, color: '#23233C' }} secureTextEntry={true} autoCapitalize="none" />

                </View>
                <Text style={styles.text_auth}>{Strings.ST29}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Text style={styles.ingresar_button}>{Strings.ST28}</Text>
                </TouchableOpacity>

                <Text style={styles.register}>{Strings.ST27_1} {Strings.ST27}</Text>
            </View>
        </ScrollView>
  )
}

export default Login