import firebaseApp from "../utils/firebase";

var uid='';

firebaseApp.auth().onAuthStateChanged((user)=>{
    if(user){
        uid = user.user.uid;
    }
})

export const getUserInfo=(_CallBack)=>{
      //get the user details from firebase
      //var uid = firebaseApp.auth().currentUser.uid;
      firebaseApp.database().ref('users/'+uid).on("value",snapshot=>{
          if(snapshot.val() != null){
              var d = Object.values(snapshot.val())
              console.log(d);
              _CallBack(d[0]);
          }
      });

}


export const getPoints=(_CallBack)=>{
      ///get the users current points
     // var uid = firebaseApp.auth().currentUser.uid;
      firebaseApp.database().ref("points/"+uid).on("value",snapshot=>{
        if(snapshot.val() != null){
            var d = Object.values(snapshot.val())
              console.log(d);
              _CallBack(d[0]);
        }
    })
}

