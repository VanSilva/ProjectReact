import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'

export default createDrawerNavigator ({
  MegaSena: {
    screen: () => <MegaSena numeros={8} />,
    navigationOptions: { title: 'Mega Sena' }
  },
  Inverter: {
    screen: () => <Inverter texto='React Native'/>
  },
  ParImpar: {
    screen: () => <ParImpar numero={38} />
  },
  Simples: {
    screen: () => <Simples texto='Flexivel' />
  }
}, { drawerWidth: 300 }) 