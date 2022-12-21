import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PlanActual = ({ PlanActual }) => {
    
    // let idPlan = PlanActual.id;
    // const [planActual, setPlanActual] = useState('')
    // const [comidaActual, setComidaActual] = useState('')
    // useEffect(() => {
    //     console.log('-----------')
    //     axios.get(`https://dietservice.bitjoins.pe/api/plan_alimentacion/${idPlan}`)
    //         .then(resp => {
    //             // setPlanActual(resp.data.data[(resp.data.data).length -1])
    //             // setPlanActual(resp.data.data[0].id)
    //             console.log(resp.data.data[0].id, 'id?')
    //             axios.get(`https://dietservice.bitjoins.pe/api/plan-alimentacion/dietas/${resp.data.data[0].id}`)
    //                 .then(resp => {
    //                     setComidaActual(resp.data.data[0])
    //                 })
    //         })
    //         console.log(comidaActual, 'comida actual')
    // }, [])
   

    return (
        <View>
            <Text>PlanActual</Text>
        </View>
    )
}

export default PlanActual