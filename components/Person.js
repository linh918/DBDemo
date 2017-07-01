import Realm from 'realm';
class Person extends Realm.Object{}
Person.schema={
  name:'Person',
  primaryKey: 'id',
  properties:{
    id:'int',
    name:'string',
    phone:'int',
  },

};


let realm = new Realm({schema: [ Person]});

export function getPersonList() {
  return realm.objects('Person').filtered('id>0').sorted('id');
}
export function initPersonDatabase() {

  if(realm.objects('Person').length==0){
    realm.write(() => {
      realm.create('Person', {
        id:0,
        name: 'sdsdsdsd',
        phone: 0,

      });
    });
     console.log("init");
  }
 console.log("not init");
}
function getNextId(){
  //   data=getPersonList();
  //   var person=data[data.length-1];
  // return (person.id+1);
}
export function createPerson(_name, _phone) {
  var   data=getPersonList();
  var person=data[data.length-1];
  _id=person.id+1;
    var s=  realm.write(() => {
    realm.create('Person', {
      id:_id,
      name: _name,
      phone: _phone,

    });
  });
  console.log(s);

}
export function deleteAllPerson(){
  let persons= realm.object('Person');
  realm.delete(persons);
}
