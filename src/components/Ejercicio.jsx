import { View, Text, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import tagsBD from '../api/tagsBD'
import Carousel from 'react-native-snap-carousel';
var { height, width } = Dimensions.get('window');
const Ejercicio = () => {

    const [ejercicio, setEjercicio] = useState('')
    useEffect(() => {
        tagsBD.get()
            .then(resp => {
                setEjercicio(resp.data.data)
            })
    }, [])
    console.log(ejercicio)
    return (
        <View>
            
            <Carousel
                data={ejercicio}
                renderItem={({ item }) =>
                    <Text numberOfLines={1} style={{ marginVertical: 20, textAlign: 'center', borderRadius: 20, backgroundColor: '#33A082', color: '#fff', paddingHorizontal: 20, paddingVertical: 10, fontSize: 14, fontWeight: 'bold', marginBottom: 5 }}>
                        {item?.titulo}
                    </Text>
                }
                sliderWidth={width}
                itemWidth={150}
                firstItem={1}
                loop={true}

            />


        </View>
    )
}

export default Ejercicio