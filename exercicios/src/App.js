import React, {Component} from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './components/Simples' //importei o componente Simples
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Simples texto='Flexível!!!!' />
				<ParImpar numero={27} />
				<Inverter texto='React Nativo!' />
				<MegaSena numeros={9} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})