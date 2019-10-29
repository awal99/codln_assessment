import firebaseApp from "../utils/firebase";

var uid='';

// var userdata = [];

firebaseApp.auth().onAuthStateChanged((user)=>{
    if(user){
        uid = user.user.uid;
    }
})

export const getUserInfo=(_CallBack)=>{
      //get the user details from firebase
   
      firebaseApp.database().ref('users/'+uid).on("value",snapshot=>{
          if(snapshot.val() != null){
              var d = Object.values(snapshot.val())
              _CallBack(d[0]);
          }
      });

}


export const getPoints=(_CallBack)=>{
      ///get the users current points

      firebaseApp.database().ref("points/"+uid).on("value",snapshot=>{
        if(snapshot.val() != null){
            var d = Object.values(snapshot.val())
             // console.log(d);
              _CallBack(d[0]);
        }
    })
}

