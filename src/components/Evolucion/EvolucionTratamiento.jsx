import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EvolucionTratamiento = ({ EvolucionP }) => {

  const [evoDataList, setEvoDataList] = useState('')
  let getId = EvolucionP == undefined ? null : EvolucionP?.id
  useEffect(() => {
    axios.get(`http://dietservice.bitjoins.pe/api/evolucion/${getId}`)
      .then(resp => {
        setEvoDataList(resp.data)
      })
  }, [])
  return (
    <View style={styles.titulo}>
      <Text style={styles.tituloText}>Evolución Tratamiento </Text>
      <Text style={styles.tituloText}>Nutricional</Text>

      <View style={styles.cabecera}>
        <Text style={styles.cabeceraTitle}>Estado Peso</Text>
        <Text style={styles.cabeceraTitle}>Peso</Text>
        <Text style={styles.cabeceraTitle}>% Grasa</Text>
        <Text style={styles.cabeceraTitle}>Fecha</Text>
      </View>
      <FlatList
        data={evoDataList?.data}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) =>
          <View style={styles.dataEvolucion}>
            <Text>{item.peso} %</Text>
            <Text>{item.peso}</Text>
            <Text>{item.p_grasa}</Text>
            <Text>{item.fecha}</Text>
          </View>
        }
      />

    </View>
  )
}

const styles = StyleSheet.create({
  titulo: {
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 20
  },
  tituloText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  cabecera: {
    backgroundColor: '#33A082',
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius:20,
    marginRight: 30,
    marginTop: 20
  },
  dataEvolucion: {
    backgroundColor: '#F0F0F0',
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 20,
    marginRight: 30,
    marginTop: 10
  },
  cabeceraTitle: {

    color: 'white'
  }

})

export default EvolucionTratamiento