# react-typescript-starter

A project to use to bootstrap a React web application written
in TypeScript.

This includes and sets up:
* React
* TypeScript
* Redux for state management (including logging and thunk middleware)
* Jest for unit testing
* Gulp for build system
* yarn for management of npm modules

## Dependencies

You need to have docker installed.

## How to Use

First, clone this repository:

```
$ git clone https://github.com/darrensiegel/react-typescript-starter
```

Then delete the local git repo.

```
$ rm -rf react-typescript-starter/.git
```

Next, customize the `package.json`, adding your project name and description
and rename the directory to something project specific.

Then, run the application in the containerized development mode. This will
build a container, install necessary packages and finally run the application
in development mode inside the container yet accessible to your localhost
port mapping.

```
$ docker-compose up
```

Then open a browser window and hit [http://localhost:9000/index.html].

Finally, go change source code and implement your code.

If you add or change npm dependencies, stop, rebuild and restart the container:

```
$ docker-compose down

$ docker-compose up --build
```
