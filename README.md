1 - TITRE DU PROJET

API DE GESTION DES ARTICLES

------------------------------------------------

2 - DESCRIPTION DU PROJET

Ce projet est une API de gestion des articles, elle a été developpé par l'étudiant MOULIOM NCHARE AZIZ RAMADAN, son but est de permettre une gestion plus automatisée et simplifiée des articles et de leurs auteurs.

------------------------------------------------

3 - FONCTIONNALITES DU PROJET

--> Creation d'articles
--> Modification 
--> Suppression
--> Documentation (Swagger)

------------------------------------------------

4 - TECHNOLOGIES UTILISEES

--> Node.js
--> Express.js
--> Mysql
--> Swagger

------------------------------------------------

5 - INSTALLATION (DEPENDANCES)

>> INSTALLER Node.js

sudo apt update
sudo apt install nodejs npm -y

>> INSTALLER MySQL

sudo apt install mysql-server -y 

>> DEPENDANCES PRINCIPALES

npm install express mysql2 dotenv cors

>> SWAGGER (DOCUMENTATION API)

npm install swagger-ui-express swagger-jsdoc

>> DEPENDANCES DE DEVELOPPEMENT

npm install --save-dev nodemon

>> DEPENDANCES OPTIONNELLES

npm install express-validator

------------------------------------------------

6 - UTILISATION

--> Dans le terminal : npx nodemon app.js
--> Dans le navigateur : http://localhost:3000/api/articles
			  http://localhost:3000/api-docs (Pour la documentation Swagger) 
