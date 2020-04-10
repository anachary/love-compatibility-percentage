import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import {TextInput, Appbar, Button} from 'react-native-paper'
import DisplayLove from './components/DisplayLove'

class App extends React.Component {
  state ={
    male:'',
    female:'',
    percentage:'',
    result:'',
    loading:true,
    error:false
  }
  calculatePercentage = () => {
    let {male, female} = this.state
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${male}&sname=${female}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key": "aefa7ae79emsh54a4e443acd82bcp1d489ejsn6d8fac4bde5f"
        }
      })
      .then(response => {
        return response.json()
      })
      .then((result)=>{ 
        this.setState({ percentage:result.percentage, 
            result:result.result, 
            loading:false, 
              error:false})
      })
      .catch((err) =>{ this.setState({loading:false, error: false})})
    }
   render() {
     let {percentage, result, loading, error } = this.state
     return (
       <View style={styles.container}>
         <Appbar.Header>
           <Appbar.Content
            title="Love Compatiblity Calculator" 
            style={{alignItems:"center"}}
            />
         </Appbar.Header>
         <TextInput
           label="First Person (male)"
           value = {this.state.male}
           onChangeText ={text => this.setState({male:text})}
         ></TextInput>
          <TextInput
           label="Second Person (female)"
           value = {this.state.female}
           onChangeText ={text => this.setState({female:text})}
         ></TextInput>
         <Button 
          icon= "heart" 
          mode="contained" 
          style={{margin:10}}
          onPress={this.calculatePercentage}>
           Calculate
          </Button>
         <DisplayLove percentage ={percentage} result={result} loading={loading} error={error} />
        </View>)
  }
}

export default App 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  },
});
