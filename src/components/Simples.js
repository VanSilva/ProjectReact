import React from 'react'
import { Text } from 'react-native'
import Padrao from '../styles/Padrao'

// export default function(props) {
// return <Text>{props.texto}</Text> //props é o param que recebi e texto é a prop
// }

// export default (props) => {
//     return <Text>{props.texto}</Text>
// }

export default props => 
    <Text style={Padrao.ex}> Teste 1: {props.texto}
    </Text> //Arrow