// initial_config
{
    firebaseConfig = {
        databaseURL: "https://firenotes-7be43-default-rtdb.firebaseio.com/"
    };
        
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();
}

let _TITLE_
let _CONTENT_
let _KEYS_