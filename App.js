import React  from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
//import HitungVolumeBalok from './src/HitungVolumeBalok';
import Header from './src/Header';
import Footer from './src/footer';
//import sales from './src/sales';
//import layout from './src/layout';
//import BelajarLayout from './src/BelajarLayout';
//import BelajarLayout1 from './src/BelajarLayout1';
//import HitungLuasSegitiga from './src/HitungLuasSegitiga';
//import appweather1615051034  from './src/appweather1615051034';
//import WeatherProject from './src/WeatherProject';
import Weather from './src/weather'
//import coba from './src/coba';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
      <Header />
      <Weather />
  <Footer />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#0091EA',
  },
});
AppRegistry.registerComponent('AppForm2', () => HitungLuasSegitiga);
