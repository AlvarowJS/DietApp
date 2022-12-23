import { FlatList, View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Col, Row, Grid } from "react-native-easy-grid";
import Strings from '../utils/Strings';
import Ionicons from 'react-native-vector-icons/Ionicons'
import EntrenamientoBD from '../api/EntrenamientoBD'
import { Vimeo } from 'react-native-vimeo-iframe';
import WebView from 'react-native-webview';
import Ejercicio from '../components/Ejercicio';
import EjercicioVideos from '../components/EjercicioVideos';
import { useNavigation } from '@react-navigation/native';
var { height, width } = Dimensions.get('window');

const Entrenamiento = () => {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const navigation = useNavigation();
  const [ejercicio, setEjercicio] = useState('')
  useEffect(() => {
    setNombre(global.Id.persona_id.nombre)
    setApellido(global.Id.persona_id.apellido)
    EntrenamientoBD.get()
      .then(resp => {
        setEjercicio(resp.data.data)
      })
      .catch(err => console.log(err))
  }, [])
  let rep = 'https://intranet.dietservice.pe/assets/uploads/tags/';
  const videoCallbacks = {
    play: (data) => console.log('play: ', data),
    pause: (data) => console.log('pause: ', data),
    fullscreenchange: (data) => console.log('fullscreenchange: ', data),
    ended: (data) => console.log('ended: ', data),
    controlschange: (data) => console.log('controlschange: ', data),
  }
  return (
    <View style={{ backgroundColor: 'white' }}>

      <ScrollView style={{height: '55%'}}>
        <View style={{ paddingTop: 45, paddingHorizontal: 30, width: width, marginBottom: 5 }}>
          <Grid>
            <Col size={2} style={{ alignContent: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, color: '#8D8C8C', fontWeight: 'bold' }}>{Strings.STWELCOME} {nombre} {apellido} </Text>
              <Text style={{ fontSize: 24, color: '#E4C07E', fontWeight: 'bold' }}>{Strings.ST5}</Text>

            </Col>
            <Col style={{ alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end' }}>
              <Grid>
                <TouchableOpacity activeOpacity={1}>
                  <Ionicons name="search" style={{ fontSize: 27, color: '#AAA9A9', marginRight: 5 }} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1}>
                  <Ionicons name="menu" onPress={() => navigation.openDrawer()} style={{ fontSize: 27, color: 'white', backgroundColor: '#DCAC55', borderRadius: 30 }} />
                </TouchableOpacity>
              </Grid>
            </Col>
          </Grid>
        </View>

        <Vimeo
          videoId={'439674617'}
          params={'api=1&autoplay=0'}
          handlers={videoCallbacks}
          style={{ width: 300, height: 300, borderRadius: 30, marginLeft: 50 }}
        />

        <Grid style={{ marginHorizontal: 30 }}>
          <Col>
            <Text>Entrena al maximo </Text>
          </Col>
          <Col style={{ alignItems: 'flex-end' }}>
            <Text>Mira todos aqui </Text>
          </Col>
        </Grid>
      </ScrollView>

      <Ejercicio />
      {/* <EjercicioVideos /> */}
      <FlatList
        data={ejercicio}
        refreshing="false"
        numColumns={1}
        renderItem={({ item }) =>
          <TouchableOpacity
            onPress={() => navigation.navigate('EjercicioVideosDetalle', item)}
          >
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
    </View>
  )
}

export default Entrenamiento