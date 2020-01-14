

//firebase
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDF1UAgvc5j_dMXuVf7zpHBWzjXGPq6_oQ",
    authDomain: "borradormater3.firebaseapp.com",
    databaseURL: "https://borradormater3.firebaseio.com",
    projectId: "borradormater3",
    storageBucket: "borradormater3.appspot.com",
    messagingSenderId: "109450160265",
    appId: "1:109450160265:web:16a307c3adfe7a55fd3e58"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var modeloact = document.getElementById('modeloact');
var dbRefmodelo = firebase.database().ref().child('ModeloAct/Modelo');
dbRefmodelo.on('value',snap => modeloact.innerText = snap.val() );

var secact = document.getElementById('secact');
var dbRefact = firebase.database().ref().child('ModeloSec/SecA/Modelo');
dbRefact.on('value',snap => secact.innerText = snap.val() );

var secacant = document.getElementById('secacant');
var dbRefac = firebase.database().ref().child('ModeloSec/SecA/Cantidad');
dbRefac.on('value',snap => secacant.innerText = snap.val() );

var secaob = document.getElementById('secaob');
var dbRefao = firebase.database().ref().child('ModeloSec/SecA/Observaciones');
dbRefao.on('value',snap => secaob.innerText = snap.val() );

var secsig = document.getElementById('secsig');
var dbRefsig = firebase.database().ref().child('ModeloSec/SecB/Modelo');
dbRefsig.on('value',snap => secsig.innerText = snap.val() );

var secbcant = document.getElementById('secbcant');
var dbRefbc = firebase.database().ref().child('ModeloSec/SecB/Cantidad');
dbRefbc.on('value',snap => secbcant.innerText = snap.val() );

var secbob = document.getElementById('secbob');
var dbRefbo = firebase.database().ref().child('ModeloSec/SecB/Observaciones');
dbRefbo.on('value',snap => secbob.innerText = snap.val() );

var caja_mht_1c; 
var caja_mht_1 = document.getElementById('cajamht1');
var dbRefmht = firebase.database().ref().child('Materiales/W10914403/CAJA1');
dbRefmht.on('value',snap =>{ 
caja_mht_1c = caja_mht_1.innerText = snap.val();
if(caja_mht_1c<=60&&caja_mht_1c>=31){
document.getElementById("divmhtod1").style.backgroundColor = "#3AD52F";
}
if(caja_mht_1c<=30&&caja_mht_1c>=16){
document.getElementById("divmhtod1").style.backgroundColor = "#F8D721";
}
if(caja_mht_1c<=15&&caja_mht_1c>=0){
document.getElementById("divmhtod1").style.backgroundColor = "#EB2C39";
}
});

var caja_mht_2c; 
var caja_mht_2 = document.getElementById('cajamht2');
var dbRefmht2 = firebase.database().ref('Materiales/W10914403/CAJA2');
dbRefmht2.on('value',snap => {
caja_mht_2c = caja_mht_2.innerText = snap.val(); 
if(caja_mht_2c<=60&&caja_mht_2c>=31){
document.getElementById("divmhtod2").style.backgroundColor = "#3AD52F";
}
if(caja_mht_1c<=30&&caja_mht_1c>=16){
document.getElementById("divmhtod2").style.backgroundColor = "#F8D721";
}
if(caja_mht_1c<=15&&caja_mht_1c>=0){
document.getElementById("divmhtod2").style.backgroundColor = "#EB2C39";
}
}
);

var caja_mhd_1c; 
var caja_mhd_1 = document.getElementById('cajamhd1');
var dbRefmhd = firebase.database().ref().child('Materiales/W10914402/CAJA1');
dbRefmhd.on('value',snap => {
caja_mhd_1c=caja_mhd_1.innerText = snap.val();
if(caja_mhd_1c<=60&&caja_mhd_1c>=31){
document.getElementById("divmhd1").style.backgroundColor = "#3AD52F";
}
if(caja_mhd_1c<=30&&caja_mhd_1c>=16){
document.getElementById("divmhd1").style.backgroundColor = "#F8D721";
}
if(caja_mhd_1c<=15&&caja_mhd_1c>=0){
document.getElementById("divmhd1").style.backgroundColor = "#EB2C39";
}
});

var caja_mhd_2c; 
var caja_mhd_2 = document.getElementById('cajamhd2');
var dbRefmhd2 = firebase.database().ref('Materiales/W10914402/CAJA2');
dbRefmhd2.on('value',snap => {
caja_mhd_2c=caja_mhd_2.innerText = snap.val();
if(caja_mhd_2c<=60&&caja_mhd_2c>=31){
document.getElementById("divmhd2").style.backgroundColor = "#3AD52F";
}
if(caja_mhd_2c<=30&&caja_mhd_2c>=16){
document.getElementById("divmhd2").style.backgroundColor = "#F8D721";
}
if(caja_mhd_2c<=15&&caja_mhd_2c>=0){
document.getElementById("divmhd2").style.backgroundColor = "#EB2C39";
}
});