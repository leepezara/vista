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

#harness para casi todos los modelos
#caja_mht_1_ref = db.reference('Materiales/W10914403/CAJA1')
#caja_mht_1=caja_mht_1_ref.get()
#caja_mht_2_ref = db.reference('Materiales/W10914403/CAJA2')
#caja_mht_2=caja_mht_2_ref.get()

#harnes para dos modelos
#caja_mhd_1_ref = db.reference('Materiales/W10914402/CAJA1')
#caja_mhd_1=caja_mhd_1_ref.get()
#caja_mhd_2_ref = db.reference('Materiales/W10914402/CAJA2')
#caja_mhd_2=caja_mhd_2_ref.get()

timeout = 60   # [seconds]

timeout_start = time.time()
while time.time() < timeout_start + timeout:
     test = 0
     respuesta = mi_socket.recv(1024) 
     if(len(respuesta)==10):
        modelo=respuesta.decode("utf-8");
        print(modelo) 
        modeloref = db.reference('ModeloAct')
        modeloref.update({'Modelo': modelo})
        while((((((modelo=='AGR5330BAB'or modelo=='AGR5330BAS'))or
       (modelo=='AGR5330BAW'or modelo=='WFG320MOBB'))or
       (modelo=='WFG320MOBS'or modelo=='WFG320MOBW'))or
       (modelo=='WFG505MOBB'or modelo=='WFG505MOBS'))or
       modelo=='WFG505MOBW'):
         #harness para casi todos los modelos
         caja_mht_1_ref = db.reference('Materiales/W10914403/CAJA1')
         caja_mht_1=caja_mht_1_ref.get()
         caja_mht_2_ref = db.reference('Materiales/W10914403/CAJA2')
         caja_mht_2=caja_mht_2_ref.get()

         if(caja_mht_2>0):
            if caja_mht_2<=60 and caja_mht_2>=1:
                caja_mht_2_ref1 = db.reference('Materiales/W10914402')
                caja_mht_2=caja_mht_2-1
                caja_mht_2_ref1.update({'CAJA2':caja_mht_2})
                #time.sleep(10)
         if(caja_mht_1>0):
            if caja_mht_1<=60 and caja_mht_1>=1:
                caja_mht_1_ref1 = db.reference('Materiales/W10914402')
                caja_mht_1=caja_mht_1-1
                caja_mht_1_ref1.update({'CAJA1':caja_mht_1})
                #time.sleep(10)
   
        if(modelo=='AGR4230BAB'or modelo=='AGR4230BAW'):
           #harnes para dos modelos
           caja_mhd_1_ref = db.reference('Materiales/W10914402/CAJA1')
           caja_mhd_1=caja_mhd_1_ref.get()
           caja_mhd_2_ref = db.reference('Materiales/W10914402/CAJA2')
           caja_mhd_2=caja_mhd_2_ref.get()
           if (caja_mhd_2>0):
                if caja_mhd_2<=60 and caja_mhd_2>=1:
                    caja_mhd_2_ref1 = db.reference('Materiales/W10914403')
                    caja_mhd_2=caja_mhd_2-1
                    caja_mhd_2_ref1.update({'CAJA2':caja_mhd_2})
                    #time.sleep(10)
           if (caja_mhd_2>0):
                if caja_mhd_1<=60 and caja_mhd_1>=1:
                    caja_mhd_1_ref1 = db.reference('Materiales/W10914403')
                    caja_mhd_1=caja_mhd_1-1
                    caja_mhd_1_ref1.update({'CAJA1':caja_mhd_1})
                    #time.sleep(10)
     if test == 1:
            break
     test -= 1
     