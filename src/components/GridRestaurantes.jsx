import { View, Text, FlatList, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import restaurantesBD from '../api/restaurantesBD';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const GridRestaurantes = () => {
    const navigation = useNavigation();
    const [restaurante, setRestaurante] = useState('')

    useEffect(() => {
        restaurantesBD.get()
            .then(resp => {

                setRestaurante(resp.data.data)
            })
            .catch(err => console.log(err))
    }, [])

    let rep2 = 'https://intranet.dietservice.pe/appdiet/images/';
  return (
    <View>

    <ScrollView>
        <FlatList
            data={restaurante}
            numColumns={1}
            renderItem={({ item }) =>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PlatoDetalle', item)}
                    activeOpacity={0.8}
                    style={{ flex: 1, marginHorizontal: 5, marginBottom: 15 }}
                >
                    <ImageBackground source={{ uri: rep2 + item.chef_image }} style={{ height: 180, width: 350, marginBottom: 10, borderRadius: 10, marginRight: 40, marginLeft: 20 }} imageStyle={{ borderRadius: 10 }}>
                        <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']} style={{ height: 180, width: '100%', alignItems: 'flex-start', justifyContent: 'center', borderRadius: 10 }}>

                            <Text numberOfLines={1} style={{ marginLeft: 20, marginTop: 20, color: '#FFF', fontWeight: 'bold', fontSize: 14, backgroundColor: 'rgba(66, 97, 47, 0.8)', padding: 10, borderRadius: 10 }}>{item.chef_title}</Text>


                            <Text numberOfLines={1} style={{ color: '#FFF', fontWeight: 'bold', fontSize: 14, marginTop: 70, marginLeft: 30 }}>{item.chef_title}</Text>
                            <Text style={{ fontSize: 12, color: '#FFF', marginLeft: 30 }}>{item.chef_id} | {item.chef_id}</Text>
                            <AntDesign name="heart" style={{ position: 'absolute', color: 'white', fontSize: 20, backgroundColor: '#E5B359', borderRadius: 40, padding: 8, top: '70%', left: '85%' }} />



                        </LinearGradient>
                    </ImageBackground>
                </TouchableOpacity>
            }

        />

    </ScrollView>
</View>
  )
}

export default GridRestaurantes