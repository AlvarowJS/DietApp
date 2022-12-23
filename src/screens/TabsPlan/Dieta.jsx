import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import React, { useEffect, useState } from 'react'
import Strings from '../../utils/Strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import DietaDetalle from '../../components/Plan/DietaDetalle';
import Carousel from 'react-native-snap-carousel';
var { height, width } = Dimensions.get('window');

const Dieta = () => {

  const [comida, setComida] = useState(0)
  const [planDieta, setPlanDieta] = useState()


  let idDieta = global.idPlan.id

  useEffect(() => {
    axios.get(`https://dietservice.bitjoins.pe/api/plan-alimentacion/dietas/${idDieta}`)
      .then(resp => {
        setPlanDieta(resp.data.data)
      })
      .catch(err => console.log(err))
  }, [])




  return (
    <View style={{ marginTop: 30, backgroundColor: 'white' }}>
      <Carousel
        data={planDieta}
        renderItem={({ item }) =>
          <View >
            <TouchableOpacity style={styles.dias}
            >

              <Text style={styles.diaNombre}>{
                item?.fecha_inicio_dia == 'Monday' ? 'Lun' :
                  item?.fecha_inicio_dia == 'Thursday' ? 'Mar' :
                    item?.fecha_inicio_dia == 'Wednesday' ? 'Mie' :
                      item?.fecha_inicio_dia == 'Tuesday' ? 'Jue' :
                        item?.fecha_inicio_dia == 'Friday' ? 'Vie' :
                          item?.fecha_inicio_dia == 'Saturday' ? 'Sab' :
                            'Dom'
              }</Text>
              <Text style={styles.diaNumero}>{item?.fecha_inicio.slice(8, 10)}</Text>

            </TouchableOpacity>

          </View>
        }
        sliderWidth={width}
        itemWidth={50}
        layout={'default'}
        firstItem={1}
        loop={false}
        activeSlideOffset={2}
      />
      <FlatList
        data={planDieta}
        refreshing="false"
        numColumns={1}
        renderItem={({ item }) =>
          <View >
            <TouchableOpacity
              onPress={() => setComida(item?.opcion)}
              style={styles.planDieta}
            >
              <Grid >
                <Col>
                  <Text style={{ color: 'white' }}>Opcion #{item?.opcion} </Text>
                </Col>
                <Col style={{ alignItems: 'flex-end' }}>
                  <Text style={{ color: 'white' }}>{item?.fecha_inicio}</Text>
                </Col>
              </Grid>
            </TouchableOpacity>

            {comida == item?.opcion ? (<DietaDetalle idOpcion={item?.opcion} />) : null}

          </View>

        }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  planDieta: {
    backgroundColor: '#DCAC55',
    marginHorizontal: 30,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 15

  },
  dias: {
    marginHorizontal: 5,
    backgroundColor: '#DCAC55',
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center'
  },
  diaNombre: {
    color: 'white'
  },
  diaNumero: {
    color: 'white',
    marginTop: 10
  }
})

export default Dieta