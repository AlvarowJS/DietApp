import React, { useState } from 'react'
import { Image, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import Strings from '../utils/Strings';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
let styles = require('../../assets/files/Styles.js');


const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [globalUser, setGlobalUser] = useState('')

    const navigation = useNavigation()
    const handleSubmitPress = () => {
        console.log(email, pass)
        axios.post('https://dietservice.bitjoins.pe/api/usuario/login',{
            email: email,
            pass: pass
        })
        .then(function (response) {
            // console.log(response.data);
            if(response?.data.data){
                setGlobalUser(response?.data.data)
                global.Id = response?.data.data
                navigation.navigate('Dashboard', global.Id)
                
            }else{
                Alert.alert(
                    'Error de inicio',
                    'Usuario o contraseña invalida',
                    [
                        {
                            text: 'ok'
                        }                        
                    ]
                    ) 
            }
            
          })
          .catch(function (error) {
            console.log(error);
            
          });
    }
    return (
        <ScrollView>
            <View style={{ flex: 0.8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#F4F5FA' }}>

                <Image source={require('../../assets/images/chica.png')} style={styles.girl_start} resizeMode="contain" />
                <Image source={require('../../assets/images/logo_dark.png')} style={styles.logo_start} resizeMode="contain" />
                <Text style={{ fontSize: 25, color: '#000', fontWeight: 'bold' }}>{Strings.ST26}</Text>
                <View rounded style={styles.inputLogin}>
                    <TextInput
                        placeholder={Strings.ST105}
                        placeholderTextColor="#a4a4a4"
                        style={{ fontSize: 16, color: '#23233C' }}
                        autoCapitalize="none"
                        onChangeText={(email) => setEmail(email)}
                        value={email}

                    />
                </View>

                <View rounded style={styles.inputLogin}>
                    <TextInput placeholder={Strings.ST106}
                        placeholderTextColor="#a4a4a4"
                        style={{ fontSize: 16, color: '#23233C' }}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        onChangeText={(pass) => setPass(pass)}
                        value={pass}

                    />

                </View>
                <Text style={styles.text_auth}>{Strings.ST29}</Text>
                <TouchableOpacity
                    onPress={handleSubmitPress}
                    // onPress={() => navigation.navigate('Dashboard')}
                >
                    <Text style={styles.ingresar_button}>{Strings.ST28}</Text>
                </TouchableOpacity>

                <Text style={styles.register}>{Strings.ST27_1} {Strings.ST27}</Text>
            </View>
        </ScrollView>
    )
}

export default Login