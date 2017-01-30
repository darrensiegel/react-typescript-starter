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

You will need to have `yarn`, `gulp`, and `jest` installed as global
npm packages.

```
$ npm install -g gulp yarn jest
```

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

Then, install the appliction dependencies:

```
$ yarn
```

Next, run the application in development mode to verify everything is working:

```
$ gulp dev
```

A browser window should appear with a simple application with a list of five
items that you can select from.

Finally, go change source code and implement your code.
