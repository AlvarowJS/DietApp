import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const DietaDetalle = ({ idOpcion }) => {
  const [plan, setPlan] = useState('')
  const [comida, setComida] = useState('')
  let idPlan = global.idPlan.id

  useEffect(() => {
    axios.get(`https://dietservice.bitjoins.pe/api/plan-alimentacion/dietas/${idPlan}`)
      .then(resp => {
        setPlan(resp.data.data[0].comidas)
      })
  }, [])

  
  return (
    <View>

      <FlatList
        data={plan}
        refreshing="false"
        numColumns={1}
        renderItem={({ item }) =>
          <View style={styles.container}>
            <View style={styles.comida}>
              <Text style={styles.title}>{item.comida == 1 ? 'Desayuno' : item.comida == 2 ? 'Almuerzo' : item.comida == 3 ? 'Cena' : 'Merienda'}</Text>
              <Text style={styles.content}>{item.descripcion}</Text>
            </View>
          </View>
        }
      />


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    backgroundColor: '#FAF8F8',
    marginTop: 10
  },
  comida: {
    backgroundColor: '#E5B359',
    padding: 20,
    borderRadius: 20
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'

  },
  content: {
    color: 'white'
  }
})
export default DietaDetalle