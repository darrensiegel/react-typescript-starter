# react-typescript-starter

A project to use to bootstrap a React web application written
in TypeScript.

[![Build Status](https://travis-ci.org/darrensiegel/react-typescript-starter.svg?branch=master)](https://travis-ci.org/darrensiegel/react-typescript-starter)

This includes and sets up:
* React
* TypeScript
* Redux for state management (including logging and thunk middleware)
* Jest for unit testing
* Gulp for build system
* yarn for management of npm modules
* Dockerized development and testing 

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

Also customize the
file `docker-compose.yaml` to specify the exact container_name that you wish
to use.  That setting would typically just match the project name. You may 
also need to specify additional services (such as a back-end REST API provider), 
depending on what your application requires to run.

Next customize the travis build file and the travis build indicator link that 
is embedded in this README. 

Then, run the application in the containerized development mode. This will
build a container, install necessary packages and finally run the application
in development mode inside the container yet accessible to your localhost via
port mapping.

```
$ docker-compose up
```

Then open a browser window and
hit [http://localhost:9000/index.html](http://localhost:9000/index.html).

Finally, go change source code and implement your code.

## Updating dependencies

If you add or change npm dependencies, stop, rebuild and restart the container:

```
$ docker-compose down

$ docker-compose up --build
```

## Running unit tests

With the container running:

```
$ docker exec -it starter jest --watchAll
```

Where `starter` is whatever you left defined in the `container_name` field of the compose file.
