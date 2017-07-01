import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import { getPersonList, createPerson,initPersonDatabase } from './Person';
export default class PersonListView extends Component{
  constructor(props){
    super(props);
    // data=[
    //   { "name":"linh",
    //     "phone":1234,
    //
    //   },
    //   { "name":"tan",
    //     "phone":123,
    //
    //   },
    // ];


    data=getPersonList();
    var person=data[data.length-1];
     console.log(person.id);
    var ds=new ListView.DataSource({
      rowHasChanged:(r1,r2)=>r1!==r2}
    );
    this.state={
      dataSource:ds.cloneWithRows(data),
      };
  }
  _renderRow(dataSource){
    return(
      <View style={styles.container}>
         <Text style={styles.title}>{dataSource.name}</Text>
         <Text style={styles.title}>{dataSource.phone}</Text>
      </View>

    );
  }

  render(){
    return(
      <View>
      <ListView
       dataSource={this.state.dataSource}
       renderRow={this._renderRow.bind(this)}
      />
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
  },
  image:{
    flex:4,
    width:100,
    height:100,
  },
  title:{

    color:'gray',
    fontSize:14,
    margin:10,


  },

});
