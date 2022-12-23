import React, { Component, useEffect, useState } from 'react'

import { View, Text, ImageBackground, TouchableOpacity, Dimensions, FlatList, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import dietaBD from '../api/dietaBD';

var { height, width } = Dimensions.get('window');

const Categorias = () => {
    const [categoria, setCategoria] = useState("")
   
    useEffect(() => {
        dietaBD.get()
            .then(resp => {                
                setCategoria(resp.data)
            })
            .catch(err => console.log(err))
    }, [])

    let rep = 'https://intranet.dietservice.pe/appdiet/images/';

    return (
        <View>
                            
                            <Carousel                                
                                data={categoria}
                                renderItem={({ item }) =>
                                    <TouchableOpacity activeOpacity={1} style={{ flex: 1, marginRight: 0 }}>
                                        <ImageBackground source={{ uri: rep + item.category_image  }} style={{ height: 100, width: 200, borderTopLeftRadius: 10, borderTopRightRadius: 10, overflow: 'hidden' }} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, overflow: 'hidden' }}>
                                        </ImageBackground>
                                        <View style={{ padding: 6, width: width * 0.7, borderColor: '#EEE', borderTopWidth: 0, borderWidth: 1, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                            <Text numberOfLines={1} style={{ color: '#000', fontSize: 14, fontWeight: 'bold', marginBottom: 5 }}>{item.category_title}</Text>


                                        </View>
                                    </TouchableOpacity>

                                }
                                sliderWidth={width}
                                itemWidth={200}
                                layout={'default'}
                                firstItem={1}
                                loop={true}
                                activeSlideOffset={2}
                            />
                              
        </View>
  

    )

}
export default Categorias