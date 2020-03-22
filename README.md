# VolunteerVsVirus Frontend

Wir verbinden freiwillige Helfer und medizinische Einrichtungen
* [Project overview](https://devpost.com/software/1_024_a_krankenhauser-if-schleife)
* [Backend git](https://github.com/simonkell/vvv-backend)
* [Frontend](https://app.volunteervsvirus.de)

### Techstack
This project is built using Angular@9.0.7 together with the Ionic@5.0.0 library.

### Project structure
The `src/app` folder is divided into three major parts:
1. models  
The representation of the database structure in the frontend
1. services  
This folder both houses the connection to the api and other modules shared by all components
3. components  
All the different pages and components on these pages. You can find them in the other named folders inside the app folder.  
*e.g. login*

### How to run
1. run `$ npx npm-force-resolutions && npm install && npm run build` to install the dependencies
1. then run `$ ionic serve` to compile into the *www* directory

### How to contribute
1. fork the project into your account
1. pull the forked project to local
1. run `$ npx npm-force-resolutions && npm install && npm run build`
1. run `$ ionic serve` to start the development server. It will be accessible under *http://localhost:8100*
1. commit and push
1. open a pull request into this repo
