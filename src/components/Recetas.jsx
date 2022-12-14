import { View, Text, FlatList, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import recetarioBD from '../api/recetarioBD'
import { useNavigation } from '@react-navigation/native'


const Recetas = () => {
    const navigation = useNavigation();
    const [receta, setReceta] = useState('')

    useEffect(() => {
        recetarioBD.get()
            .then(resp => {                
                setReceta(resp.data.data)
            })
    }, [])

    let rep1 = 'https://intranet.dietservice.pe/appdiet/images/';

    return (
        <View style={{ padding: 20, paddingTop: 10, backgroundColor: '#FFF' }}>
            <ScrollView>
                <FlatList
                
                    data={receta}
                    refreshing="false"
                    numColumns={2}
                    renderItem={({ item }) =>
                        <TouchableOpacity 
                            onPress={ () => navigation.navigate('RecetaDetalle', item)}
                            activeOpacity={0.8} 
                            style={{ flex: 1, marginHorizontal: 5, marginBottom: 15 }}                            
                            >
                            <ImageBackground source={{ uri: rep1 + item.recipe_image }} style={{ height: 110, width: null, marginBottom: 10, borderRadius: 10 }} imageStyle={{ borderRadius: 10 }}>
                            </ImageBackground>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>{item.recipe_title.toUpperCase()}</Text>
                            <Text style={{ color: '#C1BEBE', fontWeight: 'bold', fontSize: 10 }}>{item.recipe_time.toUpperCase()}</Text>

                        </TouchableOpacity>
                    }
                   

                />
            </ScrollView>
        </View>
    )
}

export default Recetas