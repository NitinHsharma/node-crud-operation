# Basic CRUD operations

A Sample project for CRUD operation for posts. There are two type of users admin and student. admin is allowed to create, update, delete, view the posts and student is allowed to only view the posts. 
All the users which are present into DBs are admin and all arbitrary username/password pair will be students

---
## Requirements

For development, you will need NPM, Node.js and mongoDB installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v15.14.0

    $ npm --version
    7.7.6

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

### MongoDB
  You can refer offical documentation for installation of [Mongodb](https://docs.mongodb.com/manual/installation/)

## Install

    $ git clone https://github.com/NitinHsharma/node-crud-operation
    $ cd node-crud-operation
    $ npm install

## Configure app

Setup env variables in your system or update default values of settings in `config/index.js` file

- PORT: Available Port number by default 3000;
- MONGODB_URI: Connection string of mongodb by default mongodb://localhost/node-rest-api;
- JWTSECRET: secert key to generate/verify JWT token;
- POST_COUNT: Number of chars allowed to post;


## Configure Admin user

Add user into mongodb for admin access using below query

    $ db.users.insert({
        "username": "nitinsharma",
        "password": "$2a$10$4Zc09QW4lo.D.fHsVZtP.ORVfsBtl8lX/VdQo9PkvJtKJL6lJiDBu" 
        });

For above query password is in hash format actual password is `admin`. You can create hash using [BYCRPTJS](https://npm.runkit.com/bcryptjs) 


## Running the project

    $ npm start

## API documentation
  Once you run the application, please visit [http://localhost:3000/api-doc](http://localhost:3000/api-doc) for API documentation. Make sure to update the port in case of any changes in configuration.
