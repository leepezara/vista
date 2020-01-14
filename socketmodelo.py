import time
import socket 
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate('C:/Users/ater_/Desktop/OP3/Prototipo/serviceAccountKey.json')

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://borradormater3.firebaseio.com/'
})


mi_socket = socket.socket() 
mi_socket.connect(("10.40.184.197",5025)) 

timeout = 30   # [seconds]
timeout_start = time.time()

i = 1
while i==1: 
 respuesta = mi_socket.recv(1024)
 modelo=respuesta.decode("utf-8")

 if(respuesta is not None):
    if((((((modelo=='AGR5330BAB'or modelo=='AGR5330BAS')or
    (modelo=='AGR5330BAW'or modelo=='WFG320MOBB'))or
    (modelo=='WFG320MOBS'or modelo=='WFG320MOBW'))or
    (modelo=='WFG505MOBB'or modelo=='WFG505MOBS'))or 
    (modelo=='AGR4230BAB'or modelo=='AGR4230BAW'))or
    modelo=='WFG505MOBW'):
      caja_mhd_1_ref = db.reference('Materiales/W10914402/CAJA1')
      caja_mhd_1=caja_mhd_1_ref.get()
      caja_mhd_2_ref = db.reference('Materiales/W10914402/CAJA2')
      caja_mhd_2=caja_mhd_2_ref.get()

      caja_mhd_2_ref1 = db.reference('Materiales/W10914402')
      caja_mhd_1_ref1 = db.reference('Materiales/W10914402')
      if time.time() >= timeout_start + timeout:
        caja_mhd_2_ref1.update({'CAJA2':60})
        caja_mhd_2=caja_mhd_1_ref.get()
        caja_mhd_1_ref1.update({'CAJA1':60})
        caja_mhd_1=caja_mhd_1_ref.get()
        timeout_start = time.time()
      time.sleep(5) 
      print('Modelo actual: '+modelo)
      modeloref = db.reference('ModeloAct')
      modeloref.update({'Modelo': respuesta.decode("utf-8")})
      if(modelo=="AGR4230BAB"or modelo=="AGR4230BAW"):
           if(caja_mhd_2>0):
                     caja_mhd_2=caja_mhd_2-1
                     #caja_mhd_2_ref1 = db.reference('Materiales/W10914402')
                     caja_mhd_2_ref1.update({'CAJA2':caja_mhd_2})
           if(caja_mhd_2==0 and caja_mhd_1>0):
                      caja_mhd_1=caja_mhd_1-1
                      #caja_mhd_1_ref1 = db.reference('Materiales/W10914402')
                      caja_mhd_1_ref1.update({'CAJA1':caja_mhd_1})
