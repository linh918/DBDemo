import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';
import { getPersonList, createPerson,initPersonDatabase } from './Person';
export default class PhimMoiListView extends Component{
  constructor(props){
    super(props);



    data=[];


    this.state={
      dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
    };
  }
  _renderRow(row){
    return(
      <View style={styles.container}>
         <Image source={{uri:row.LinkPoster}} style={styles.image}/>
         <Text style={styles.title}>{row.TieuDe}</Text>
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

    componentDidMount(){
      fetch('http://demo9272831.mockable.io/phimmoi.json?page=1')
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
           dataSource:this.state.dataSource.cloneWithRows(responseJson),
         });
        })
        .catch((error) => {
          console.error(error);
        });
    }

  }










const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
  },
  image:{

    width:100,
    height:100,
  },
  title:{

    color:'gray',
    fontSize:14,
    margin:10,


  },

});
