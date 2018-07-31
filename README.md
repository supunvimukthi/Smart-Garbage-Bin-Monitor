# Smart-Garbage-Bin-Monitor

Simple angular web app to update data sent from nodemcu fixed on a garbage bin to inform authorities with the percentage filled,location, air qualty inside and the information about the last collector who collected garbage out of that bin. Node mcu transmits data to firebase through the arduino-firebase API and this angular app retrieves real-time data and shows on the web app.

link to angular [web-app](https://smart-bin-project.herokuapp.com/) deployed on heroku.

## Hardware on the bin

- nodemcu to send data to firebase
- ultrasonic sensor to detect the amount filled
- MQ-35 sensor to sense the air quality inside the bin
- piezo sensor to detection of smart bin open.
- RFID to get data of the last collector

## How to run on local host

- clone the repository and cd in to project folder
- run **npm install**
- then run **ng serve --open**
- you will have the app up and running on localhost with live update. 
