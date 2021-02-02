# STADVDB_S13.5_T120-21_MCO2

This repository contains the source codes for the Web Application involving MySQL and Express. The project is submitted for Major Course Output 2 of the STADVDB course. The chosen dataset is *Chicago Divvy Bicycle Sharing Data* that can be found in [Kaggle](https://www.kaggle.com/yingwurenjian/chicago-divvy-bicycle-sharing-data).

## Contents

Each folder in the repository has its own functions or storage of files to allow the project to run properly. Also, the folders can be for organization purposes.

- controller - The folder contains .js files that defines the callback function for a given client request.
- etl_tool - The folder contains the ETL file, a Jupyter Notebook file, together with the sample CSV files.
- public - The folder contains static files.
- queries - The folder contains the SQL file that serves as a basis for the query inside the controller files.
- routes - The folder contains a file that describes the response of the server for GET/POST request to a specific path in the server.
- views - The folder contains all files to be rendered to the user when requested from the server.

### Note

There are three files that are not part of any folder.
- chicago_bikes.sql - Contains the SQL file for the schema of the dimensional model.
- database.js - Contains which database to connect.
- index.js - Main entry point.

## Getting Started - MySQL

If you wish to run the application via localhost, you need to have the schema stored locally in your computer.

1. Open the MySQL Workbench or any application that can handle MySQL.
2. Import the original schema, chicago_bikes.sql.
3. Head to database.js and remove the comment of the correspond schema you wish to access. Add comment braces to the ClearDB when changing databases.
4. If you have an `ERR_AUTHEN` error when running the web application, follow the steps below.

### Error Fix on ERR_AUTHEN

1. Open your MySQL Workbench or any application that can handle MySQL.
2. Run the queries:
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'p@ssword';
FLUSH privileges;
```
What it will do will refresh the root account with the password, p@ssword and it will restart the whole workbench to activate.

If you have other problems, consult the authors of the web application.

## Getting Started - Web Application

1. Clone the repository either through downloading here in GitHub, or use the command below. Please note that Git must be installed in your system for this to work if you choose the latter option.
```
git clone https://github.com/Gridmerc/STADVDB_S13.5_T120-21_MCO2
```

2. Open Command Prompt or Terminal, depending on which Operating System you are using, and navigate to the project folder where you downloaded.
3. Run the command, `npm install` to initialize and install all dependencies needed.
4. Run the command, `node index.js` to start up the server. Alternatively, since nodemon is installed, you may opt to use `npm run dev` to allow the server to restart on its own if there are changes in the code.
5. When the application is running, you must see the following:
```
APP: Running at Port 5000
MySQL: Connected
```
6. Head to your browser and head to the URL, `http://localhost:5000/`.
7. You will be directed to the home page.
8. If you are in the home page, congratulations! That means the server is up and running. Roam around the web application to view the different OLAP operations.

## More Info

If there are no package.json, run these commands.
1. `npm install --save express mysql ejs express-handlebars hbs` to add the necessary packages.
2. `npm install -g nodemon` to add nodemon.

## Authors

STADVDB S13-5 - Members
1. Chu, Chuan-Chen (chuan-chen_chu@dlsu.edu.ph)
2. Delima Jr., Reynaldo K. (reynaldo_delimajr@dlsu.edu.ph)
3. Jatico II, Nilo Cantil K. (nilo_jaticoii@dlsu.edu.ph)
4. Lin, James Kevin S. (james_lin@dlsu.edu.ph)
5. Sta. Ana, Jose Antonio III T. (jose_antonio_iii_staana@dlsu.edu.ph)

## Heroku
[Heroku Link](www.google.com)
Here is the link of the Heroku deployment. Please note ClearDB has a limitation of 5MB for the database to work, but it will not run 24/7 due to free membership limitations. Please contact the authors if you wish to see the deployed version. If ever the localhost does not work, please contact the authors as we are willing to provide a demo.