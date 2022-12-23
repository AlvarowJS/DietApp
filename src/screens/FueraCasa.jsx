import { View, Text, Dimensions, ScrollView, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import Strings from '../utils/Strings';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Col, Grid } from 'react-native-easy-grid'
import AntDesign from 'react-native-vector-icons/AntDesign'
import restaurantesBD from '../api/restaurantesBD';
import GridRestaurantes from '../components/GridRestaurantes';
import Restaurantes from '../components/Restaurantes';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
var { height, width } = Dimensions.get('window');
var styles = require('../../assets/files/Styles');

const FueraCasa = () => {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [restaurante, setRestaurante] = useState('')
  useEffect(() => {
    setNombre(global.Id.persona_id.nombre)
    setApellido(global.Id.persona_id.apellido)
    restaurantesBD.get()
      .then(resp => {

        setRestaurante(resp.data.data)
      })
      .catch(err => console.log(err))
  }, [])
  let rep2 = 'https://intranet.dietservice.pe/appdiet/images/';
  return (
    <View>

      <ScrollView style={{height: '35%'}}>

        <View style={{ paddingTop: 45, paddingHorizontal: 30, width: width, marginBottom: 5 }}>

          <Grid >

            <Col size={2} style={{ alignContent: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, color: '#8D8C8C', fontWeight: 'bold' }}>{Strings.STWELCOME} {nombre} {apellido} </Text>
              <Text style={{ fontSize: 24, color: '#E4C07E', fontWeight: 'bold' }}>{Strings.STRFUERACASA}</Text>
            </Col>

            <View style={styles.headerButtons}>

              <TouchableOpacity activeOpacity={1}>
                <Ionicons name="search" style={{ fontSize: 27, color: '#AAA9A9', marginRight: 5 }} />
              </TouchableOpacity>

              <Ionicons name="menu" onPress={() => navigation.openDrawer()} style={{ fontSize: 27, color: 'white', backgroundColor: '#DCAC55', borderRadius: 30 }} />

            </View>

          </Grid>
        </View>

        <Restaurantes />

        <Grid style={{ marginHorizontal: 30, marginBottom: 20 }}>
          <Text>Pedido Populares</Text>
          <Col style={{ alignItems: 'flex-end' }}>
            <Text style={{ color: '#B4B2B2', fontSize: 13, borderBottomWidth: 1, borderColor: '#B4B2B2' }}>Ver todas las categorias</Text>
          </Col>
        </Grid>
      </ScrollView>
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
      

    </View>
  )
}

export default FueraCasa