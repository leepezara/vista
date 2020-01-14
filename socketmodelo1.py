import socket 
import threading
import firebase_admin
import numpy
from firebase_admin import credentials
from firebase_admin import db



cred = credentials.Certificate('C:/Users/ater_/Desktop/OP3/Prototipo/serviceAccountKey.json')

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://borradormater3.firebaseio.com/'
})


mi_socket = socket.socket() 
mi_socket.connect(("192.168.0.100",5025)) 

#a=['ay']

def lectura(): 
  respuesta = mi_socket.recv(1024)
  if(len(respuesta)==10):
        #a.append(respuesta.decode("utf-8"))
        print(respuesta.decode("utf-8"))
        modeloref = db.reference('ModeloAct')
        modeloref.update({
        'Modelo': respuesta.decode("utf-8")
        })

i=1
while i==1: 
  threading.Timer(4, lectura).start()


  
