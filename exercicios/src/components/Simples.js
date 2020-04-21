import React from 'react'
import { Text } from 'react-native'
import Padrao from '../styles/Padrao'

/**
 * aqui tenho um componente baseado em função
 * props é o param que recebi e texto é o nome propriedade */
// export default function(props) {
// return <Text>{props.texto}</Text>
// }

// export default (props) => {
//     return <Text>{props.texto}</Text>
// }

/**
 * para enviar dois textos, encapsulo dentro de uma view */
// export default props =>
// <View>
//     <Text>Arrow 1: {props.texto}</Text>
//     <Text>Arrow 2: {props.texto}</Text>
// </View>

/**
 * para enviar dois textos, encapsulo dentro de um array*/
// export default props => [
//     <Text key={1}>Arrow 1: {props.texto}</Text>,
//     <Text key={2}>Arrow 2: {props.texto}</Text>
// ]


export default props =>
    <Text style={Padrao.ex}> Teste 1: {props.texto} 
    </Text> //Arrow