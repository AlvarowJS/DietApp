import { View, Text, ImageBackground, TouchableOpacity, Dimensions, FlatList, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import React, { useEffect, useState } from 'react'
import restaurantesBD from '../api/restaurantesBD'
var { height, width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';

const Restaurantes = () => {
    const navigation = useNavigation();
    const [restaurante, setRestaurante] = useState('')

    useEffect(() => {
        restaurantesBD.get()
            .then(resp => {
                setRestaurante(resp.data.data)
            })
    }, [])
    

    let rep = 'https://intranet.dietservice.pe/appdiet/images/';
    return (
        <View>
            <Carousel
                data={restaurante}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PlatoDetalle', item)}
                        activeOpacity={1}
                        style={{ flex: 1, marginRight: 0 }}
                    >
                        <ImageBackground source={{ uri: rep + item?.chef_image }} style={{ height: 100, width: 70, borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, overflow: 'hidden' }} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, overflow: 'hidden' }}>
                        </ImageBackground>
                        <View style={{ padding: 6, width: width * 0.7, borderColor: '#EEE', borderTopWidth: 0, borderWidth: 1, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text numberOfLines={1} style={{ color: '#000', fontSize: 14, fontWeight: 'bold', marginBottom: 5 }}>{item?.chef_title}</Text>


                        </View>
                    </TouchableOpacity>

                }
                sliderWidth={width}
                itemWidth={100}
                layout={'default'}
                firstItem={1}
                loop={true}
                activeSlideOffset={2}
            />
        </View>
    )
}

export default Restaurantes