# Quickstart: React | Material UI ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg?style=flat-square)

This is a sample project that can be used to quickly bootstrap a [React](https://reactjs.org) application which utilises [Material UI](https://material-ui.com/). A lightweight [Express](https://expressjs.com/) server has also been included to illustrate how to deploy a production build. The code and file-structure used in this project should be used as a guideline only.

_**NOTE:** The client-side application in this project was bootstrapped using [Create React App](https://create-react-app.dev/). Read their documentation to find detailed instructions on using Create React App and many tips._

## Getting Started

In the base directory of the project run the following command to install dependencies:

```sh
 npm install
```

Now that the dependencies have been installed, you are ready to run the application in developer mode:

```sh
npm start
```

Then open http://localhost:3000/ to see your app.

## Deployment

When you’re ready to deploy to production, create a minified bundle with:

```sh
npm run build
```

Now you can serve the built application using the sample Express server. To do this, simply run:

```sh
npm run serve
```

_**NOTE:** The server uses [Winston](https://github.com/winstonjs/winston) for logging and writes a copy of all logs to files within the `/logs` directory._

## Deploy to AWS Fargate via Terraform

-   Navigate to `deploy/personal` for instructions on deploying app onto AWS Fargate on your **personal** AWS account

```sh
.
├── deploy
│   ├── dcloud # instructions on deploying app to Deloitte Cloud
│   └── personal # instructions on deploying app to personal AWS account
```

## Docker

A sample Docker deployment configuration has been included. Run the following command to build and deploy the docker image:

```sh
docker-compose up --build
```

## Testing

An interactive Jest test watcher has been bundled in to the client. To run it in interactive mode, you can use the following command from the base directory of the project:

```sh
npm run test:client
```

By default, tests are run related to files changed since the last commit. [Read more about testing...](https://create-react-app.dev/docs/running-tests/)

## Linting

This project uses [ESLint](https://eslint.org/) for linting and extends the [Airbnb linting configuration](https://github.com/airbnb/javascript). You can modify the linting rules by editing the `.eslintrc.json` file in the base directory of the project.

## Formatting

Some developers like to use code formatters such as [Prettier](https://prettier.io/) to enforce consistent code style across the entire codebase. A sample `.prettierrc` file has been included in the base of the project.

_**NOTE: It is important that the formatting configuration is consistent with your linting configuration to avoid causing linting errors when formatting.**_

## EditorConfig

The [EditorConfig](https://editorconfig.org/) project consists of a file format (`.editorconfig`) for defining coding styles and a collection of [text editor plugins](https://editorconfig.org/#download) that enable editors to read and adhere to defined styles. Using this helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

A sample `.editorconfig` file has been included in the base directory of the project.
