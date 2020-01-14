

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




//if(((caja_mht_2<=60&&caja_mht_1<=60)&&caja_mhd_2<=60)&&caja_mhd_1<=60){
//}
//modelo actual
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


//var modelo = modeloact.innerHTML;

//var modelo1=modelo;

//decremento

var fire = firebase.database().ref('ModeloAct/Modelo')
var modelo;

fire.on('value',snap =>{
    modelo = snap.val();
    console.log(modelo);


//main harness para todos los modelos de estufa menos dragon
//var caja_mht_1=60;
//var caja_mht_2=120;
var caja_mht_1 = document.getElementById('cajamht1');
var dbRefmht = firebase.database().ref().child('Materiales/W10914403/CAJA1');
dbRefmht.on('value',snap => caja_mht_1.innerText = snap.val() );
var caja_mht_2 = document.getElementById('cajamht2');
var dbRefmht2 = firebase.database().ref('Materiales/W10914403/CAJA2');
dbRefmht2.on('value',snap => caja_mht_2.innerText = snap.val() );


//main harness para solo dragon
//var caja_mhd_1=60;
//var caja_mhd_2=120;
var caja_mhd_1 = document.getElementById('cajamhd1');
var dbRefmhd = firebase.database().ref().child('Materiales/W10914402/CAJA1');
dbRefmhd.on('value',snap => caja_mhd_1.innerText = snap.val() );
var caja_mhd_2 = document.getElementById('cajamhd2');
var dbRefmhd2 = firebase.database().ref('Materiales/W10914402/CAJA2');
dbRefmhd2.on('value',snap => caja_mhd_2.innerText = snap.val() );


document.getElementById("divmhtod1").style.backgroundColor = "#3AD52F";
document.getElementById("divmhtod2").style.backgroundColor = "#3AD52F";
document.getElementById("divmhd1").style.backgroundColor = "#3AD52F";
document.getElementById("divmhd2").style.backgroundColor = "#3AD52F";

if((((((modelo=='AGR5330BAB'||modelo=='AGR5330BAS'))||
    (modelo=='AGR5330BAW'||modelo=='WFG320MOBB'))||
    (modelo=='WFG320MOBS'||modelo=='WFG320MOBW'))||
    (modelo=='WFG505MOBB'||modelo=='WFG505MOBS'))||
    modelo=='WFG505MOBW'){

if(caja_mht_2>0&&caja_mht_1>0){

while(caja_mht_2<=60&&caja_mht_2>=1){
setTimeout(function(){ 
caja_mht_2=caja_mht_2-1; 
var ref1=firebase.database().ref('Materiales/W10914403');
ref1.update({'CAJA2':caja_mht_2});
}, 8000);
}

if(caja_mht_2==0){
document.getElementById("divmhtod2").style.backgroundColor = "#EB2C39";
document.getElementById("divmhtod1").style.backgroundColor = "#F8D721";

while(caja_mht_1<=60&&caja_mht_1>=1){
setTimeout(function(){ 
caja_mht_1=caja_mht_1-1; 
var ref2=firebase.database().ref('Materiales/W10914403');
ref2.update({'CAJA1':caja_mht_1});
}, 8000);
}

if(caja_mht_1==0){
  document.getElementById("divmhtod1").style.backgroundColor = "#EB2C39";
}
}

}
}


if(modelo=='AGR4230BAB'||modelo=='AGR4230BAW'){

if(caja_mhd_2>0&&caja_mhd_1>0){
while(caja_mhd_2<=60&&caja_mhd_2>=1){
setTimeout(function(){ caja_mhd_2=caja_mhd_2-1;
var ref3=firebase.database().ref('Materiales/W10914402');
ref3.update({'CAJA2':caja_mhd_2});
 }, 8000);
}

if(caja_mhd_2==0){
document.getElementById("divmhd2").style.backgroundColor = "#EB2C39";
document.getElementById("divmhd1").style.backgroundColor = "#F8D721";

while(caja_mhd_1<=60&&caja_mhd_1>=1){
setInterval(function(){ caja_mhd_1=caja_mhd_1-1;
var ref4=firebase.database().ref('Materiales/W10914402');
ref4.update({'CAJA1':caja_mhd_1});
 }, 8000);
}

if(caja_mhd_1==0){
  document.getElementById("divmhd1").style.backgroundColor = "#EB2C39";
}
}
}
}

while(((caja_mht_2>=0&&caja_mht_1>=0)&&caja_mhd_1>=0)&&caja_mhd_1>=0){
setTimeout(function(){
var refagain=firebase.database().ref('Materiales/W10914402');
refagain.update({'CAJA1':60});
var refagain2=firebase.database().ref('Materiales/W10914402');
refagain2.update({'CAJA2':60});
var refagain3=firebase.database().ref('Materiales/W10914403');
refagain3.update({'CAJA1':60});
var refagain4=firebase.database().ref('Materiales/W10914403');
refagain4.update({'CAJA2':60});
},1500000);
}

});