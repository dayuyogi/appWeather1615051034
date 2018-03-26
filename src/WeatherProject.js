import React from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';

export default class WeatherProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0
      }
    };
  }

  getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city +
  '&appid=33aee682c6dd2f478493c431a7962cfa&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast: {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp
      }
    });
  });
}


  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.box1}>
          <Text style={{ textAlign: 'center', padding: 20, fontSize: 25, color: 'white' }}>
          Prakiraan Cuaca</Text>
      </View>
      <View style={styles.box2}>
           <Text style={{ textAlign: 'center', paddingTop: 15, fontSize: 20, color: 'white' }}>
            Masukan Nama Kota </Text>
        <View style={styles.box5}>
           <TextInput
                 style={{ height: 50, color: 'white' }}
                 placeholder=" Masukan Nama kota "
                 onChangeText={(city) => this.setState({ city })}
           />
          </View>
             <Button
               onPress={() => this.getWeather()}
               title="Cari"
               color="#FF5252"
               accessibilityLabel="Klik untuk melihat cuaca"
             />
       </View>
       <View style={styles.box3}>
        <Text style={{ padding: 10, fontSize: 20, color: 'white' }}>
          Kota : {this.state.city} {'\n'}
          Temp : {this.state.forecast.temp} {"Celcius"}{'\n'}
          Cuaca : {this.state.forecast.main} {'\n'}
          Description : {this.state.forecast.description} {'\n'}
        </Text>
      </View>
      <View style={styles.box4}>
          <Text style={{ textAlign: 'center', padding: 18, fontSize: 14, color: 'white' }} >
          CopyRight @DayuYogi</Text>
      </View>
</View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#F8BBD0',
    flex: 1,
    flexDirection: 'column',
  },
  box1: {
    height: 80,
    backgroundColor: '#E91E63',
  },
  box2: {
     flex: 1,
     backgroundColor: '#EC407A',
     marginTop: 15,
     marginLeft: 15,
     marginRight: 15,
     flexDirection: 'column',
     justifyContent: 'space-around',
   },
  box3: {
    flex: 1,
    backgroundColor: '#FF80AB',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row'
  },
  box4: {
    height: 50,
    backgroundColor: '#E91E63',
  },
  button: {
    width: 50,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  textBoxStyle: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  box5: {
    height: 50,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20
  }
});
