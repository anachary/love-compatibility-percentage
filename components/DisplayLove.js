import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import PieChart from 'react-native-pie-chart'
const DisplayLove = (props) => {
  let {percentage, result, loading, error} = props
  const chart_wh = 250
  let percentValue = parseInt(percentage)
  let remaingPercent = 100 - percentValue
  let series = [remaingPercent, percentValue]
  const sliceColor = ['#2196F3','#F44336']
  if(loading){
    return (<View style = {styles.container}><Text style = {styles.text}>Loading</Text></View>)
  }
  else if (error || isNaN(percentage)){
    return (<View style = {styles.container}>
    <Text style={styles.text}>Something went wrong.Please try again later</Text>
    </View>)
  }
  else {
      return (   
          <View style = {styles.container}>
              <Text style ={styles.text}>{percentage} %</Text>
              <Text style={styles.text}>{result}</Text>
              <PieChart
              chart_wh={chart_wh}
              series={series}
              sliceColor={sliceColor}
              doughnut={true}
              coverFill={'#FFF'}
              coverRadius={0.6}
            />
            </View>)
    }
}
export default DisplayLove

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center' },
    text:{alignItems:'center', justifyContent:'center', fontWeight:'bold'},
    stretch: {
      width: 50,
      height: 200,
      resizeMode: 'stretch'
    }
    })