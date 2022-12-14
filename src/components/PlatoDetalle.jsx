import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
let styles = require('../../assets/files/Styles');
const PlatoDetalle = (props) => {
  const [plato, setPlato] = useState()
  const [getPlato, setGetPlato] = useState()
  



  useEffect(() => { 
    setPlato(props.route.params)   
    let uriPlato = `https://dietservice.bitjoins.pe/api/chefs/${props.route.params.chef_id}`
    axios.get(uriPlato)
      .then(resp => {
        setGetPlato(resp.data.data)
      })
  }, [])

  
  console.log(getPlato, 'api')
  let repChef = 'https://intranet.dietservice.pe/appdiet/images/';
  
  return (
    <View style={{ backgroundColor: 'white' }}>
      
      <ScrollView>
        <Image source={{ uri: repChef + plato?.chef_image }} style={{ width: '100%', height: 350 }} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, alignItems: 'center', marginBottom: 20 }}>{plato?.chef_title}</Text>
          <FlatList
            data={ getPlato?.plates }                        
            numColumns={1}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) =>
              <View style={styles.chefDetalle}>
                <Text style={styles.platoDetalleNombre}>{item?.plate_title}</Text>
                <View style={styles.platoDetalle}>
                  <View style={styles.platoDetalleLinea}>
                    <Text> Porcion </Text>
                    <Text style={styles.platoDetalleCaracteriticasNegrita}> {item?.plate_portion} </Text>
                  </View>
                  <View>
                    <Text> Tipo de comida</Text>
                    <Text style={styles.platoDetalleCaracteriticasNegrita}>{item?.plate_type_food}</Text>
                  </View>
                </View>
              </View>
            }
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default PlatoDetalle