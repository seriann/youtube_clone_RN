# challenge_RN
La api que uso para hacer todo lo relacionado a usuarios es la misma que desarrolle para el challenge de backend, la cual esta subida a aws. No hace falta correr un servidor en un localhost.
 La api de youtube tiene un limite de pedidos semanales, por lo cual si llegara a aparecer un error con status 403 (No creo que suceda), eso quiere decir que la api key ya excedio el limite,la solucion seria de crear otra nueva.

Use expo para tener un entorno rapido de trabajar sin tener mucho que configurar. 

Para descargar la APK para android: https://expo.io/artifacts/151e2fe3-e18b-4703-adf8-081cd7a463d0

O para correr localmente el proyecto hacer lo siguiente:

1) Instalar expo con *"npm install --global expo-cli"*, si llegaran a existir problemas de incompatibilidad con algun paquete, usar *"expo update 37.0.0"*(version en que la desarrolle)
2) Clonar repositorio *"git clone https://github.com/seriann/challenge_RN.git"*
3) Instalar las dependencias *"npm i"*
4) Correr el proyecto con *"npm start"* || *"expo start"*
5) Abrir la aplicacion en *"emulador" || "app de expo" || "navegador"*


