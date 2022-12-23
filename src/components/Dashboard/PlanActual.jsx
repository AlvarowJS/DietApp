import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PlanActual = ({ PlanActual }) => {

    let idPlan = PlanActual.id;
    const [planActual, setPlanActual] = useState('')
    const [comidaActual, setComidaActual] = useState('')
    useEffect(() => {
        console.log('-----------')
        axios.get(`https://dietservice.bitjoins.pe/api/plan_alimentacion/${idPlan}`)
            .then(resp => {
                let idComida = resp.data.data[0].id
                setComidaActual(idComida)
            })
            .catch(err => console.log(err))
        axios.get(`https://dietservice.bitjoins.pe/api/plan-alimentacion/dieta-of-today/${comidaActual}`)
            .then(resp => {
                console.log(resp.data.data, "sds")
                setPlanActual(resp.data.data)
            })
            .catch(err => console.log(err))
        
    }, [])



    return (
        <View>
            {planActual.length == 0 ?  <Text>Sin Plan Actual</Text> : <Text>PlanActual</Text>}
            
        </View>
    )
}

export default PlanActual