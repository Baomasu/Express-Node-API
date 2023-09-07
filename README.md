## Description
This is the follow up of a video-tutorial for building a REST API with Node.js using Express.js framework. The user will be able to Get, Post, Put, Delete and Get by id two sets of lists, each in their own shown routes.

## Installation
First we need to initialize the proyect by typing in the command line inside the proyect directory and afterward select the setting you like the most  (Note: Node.js with npm should already be installed in your OS):
```
npm init
```
Then the packages that we need to install before runing our server are listed bellow ready to run from the command line:
```
npm i express
```
```
npm i morgan
```
```
npm i ejs
```
```
npm i nodemon -D
```

package.json:
```
"dependencies": {
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
```

## Usage

Once the proyect is initialize we can start our aplication by running the 'index.js' file inside the '/src/index.js' directory route from the command line with the following instruction:
```
node index.js
```

If you prefer to use nodemon simply type in the same directory route the following command:
```
nodemon index.js
```

We also can run the application from the root proyect directory by simply typing the command:
```
npm run dev
```

This is because we have initialize the command in our 'package.json' file. If you created a bran new 'package.json' file you can add the following object in it to work:
```
"scripts": {
    "dev": "nodemon ./src/index.js"
  }
```

If the proyect started succesffuly it should promt a message in console telling the server started on port 5555, now the REST-APi proyect is running in your localHost on port 5555. To open the client application simply acces from your browser with the following url:
```
http://localhost:5555
```

To interact with the "POST-PUT-DELETE" methods installed in the listening routes we need to use a REST-client application such as "Thunder client' or "Postman" to do so. 

## Credits

**Youtube video:**

Tittle: Express Framework de Nodejs, Curso para principiantes (Javascript en el backend).

Author: Fazt.

Url: [https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=10052s](https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=10052s)


