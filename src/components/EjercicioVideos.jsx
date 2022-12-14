import { View, Text, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import EntrenamientoBD from '../api/EntrenamientoBD'

const EjercicioVideos = () => {
    
    const [ejercicio, setEjercicio] = useState()
    useEffect(() => {
        EntrenamientoBD.get()
            .then(resp => {
                setEjercicio(resp.data.data)
            })
    }, [])
    let rep = 'https://intranet.dietservice.pe/appdiet/images/';
    return (
        <View style={{ marginHorizontal: 30, backgroundColor: 'white' }}>
            <ScrollView style={{ marginTop: 20 }}>

                <FlatList
                    data={ejercicio}
                    refreshing="false"
                    numColumns={1}
                    renderItem={({ item }) =>
                        <TouchableOpacity>
                            <View style={{ flex: 3, flexDirection: 'row', marginBottom: 30, justifyContent: 'space-between', alignItems: 'flex-start', borderTopWidth: 1, borderColor: '#F0F0F0', paddingTop: 20 }}>
                                <View style={{ borderWidth: 1, marginHorizontal: 20, borderRadius: 10 }}>
                                    <Image source={{ uri: rep + item?.canal_tags_id.foto }} style={{ width: 50, height: 50 }} />
                                </View>
                                <View>
                                    
                                    <Text>{item?.titulo}</Text>
                                </View>
                                <View style={{ marginRight: 20 }}>
                                    <Text>{item?.estado} min</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    }
                />

            </ScrollView>
        </View>
    )
}

export default EjercicioVideos