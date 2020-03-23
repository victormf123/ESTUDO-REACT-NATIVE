import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

export default props => <Text style={[Padrao.ex]}>Arrow 1: {props.texto}</Text>
// export default function (props) {
//     return <Text>{props.texto}</Text>
// }

/*
// Não e permitido retornar mais de 1 componentes OBS: desta forma
export default props => 
    <Text>Arrow 1: {props.texto}</Text>
    <Text>Arrow 2: {props.texto}</Text>
*/

/*
export default props => 
    <View>
        <Text>Arrow 1: {props.texto}</Text>
        <Text>Arrow 2: {props.texto}</Text>
    </View>
*/

// Caso você queira retornar 2 ou mais componentes deverá ser passado entre [] /* Array */
// importante lembrar que utilizando esta forma e importante  utilizar a propriedade key para evitar warm's
/*
export default props => [
    <Text key={1}>Arrow 1: {props.texto}</Text>,
    <Text key={2}>Arrow 2: {props.texto}</Text>
]
*/

// Mesta forma anterior porem mais verbosa

/*export default props => {
    return [
        <Text key={1}>Arrow 1: {props.texto}</Text>,
        <Text key={2}>Arrow 2: {props.texto}</Text>
    ]
}*/
    
