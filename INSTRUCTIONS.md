# Module 3 Assignment: Create an Express Application

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)
&nbsp;
## Introduction

For this assignment, you will create an application that merges and serves job and city information for users looking to research potential cities they might want to relocate to.

&nbsp;
## Setup

Copy the starter files inside of `unsolved` into the root directory of your GitHub repository.

Ensure you include a `.gitignore` file in your repo that includes at minimum:

```
**/.DS_Store
**/node_modules/
.env
```

Run `npm i` in the root directory of your repository (your `package.json` should be in the root directory).

You'll see that there is a `.env.EXAMPLE` file included in the unsolved folder. You'll need to create a `.env` file with the same contents, but replace the fake API key with your actual API key. You can obtain an API key for the Findwork API from [Findwork API](https://findwork.dev/developers).

**NOTE:** If you do not see the `.env.EXAMPLE` file on your machine, note that files starting with a period (AKA "dotfiles") are hidden by default on some file systems (Macs in particular). Changing your OS settings to "view hidden files and folders" should allow you to see the file. Dotfiles are typically used for configuration and so are usually hidden by default. These files should appear in VS Code by default, however.

&nbsp;
## Instructions

This application relies on the [Teleport City Info API](https://developers.teleport.org/api/getting_started/) as well as the [Findwork API](https://findwork.dev/). However, there are already helper functions inside of `util.js` that call and process information from both of these APIs. While the teleport API is open, the Findwork API is not and you will need to obtain an API key from [Findwork API](https://findwork.dev/developers) after creating an account and signing in.

The application consists of an express server that serves both a static front-end as well as a single GET endpoint for city data.

The front-end code for the application is already completed. Your job is to fill in the express server code to serve the front-end files and create the single data endpoint.

Look inside the `app.js` file for comments explaining what code is missing from the application.

[You can see an example of the completed application here](https://should-you-relocate.herokuapp.com/). You may also view an [example of the api endpoint results here](https://should-you-relocate.herokuapp.com/api/city/chicago).

Your finished application must be deployed to [Heroku](https://www.heroku.com/). For instructions on deploying to Heroku, please see [this document](./Heroku_Deployment.md).

**NOTE:** Don't forget to add your Jobs API key environmental variable to Heroku. If you forget, your deployed site will not return any job data. Sometimes this is normal for smaller cities, so test with big cities like "los angeles" to make sure your app is functioning correctly. 

&nbsp;
## App Behavior

The completed application should behave in the same manner as [this example](https://should-you-relocate.herokuapp.com/).

To run the application locally, run:

```
npm run dev
```

You can then navigate to [http://localhost:3000](http://localhost:3000) to view the application.

&nbsp;
## Testing

Automated tests are included with this assignment. To receive full credit, all automated tests must pass.

To run the tests once, run:

```
npm test
```

To run the tests in watch mode, run:

```
npm run test:watch
```

&nbsp;
## Requirements for full credit

To receive full credit for this assignment, your program MUST:

  * Be implemented according to the above [instructions](#instructions).
  * Be deployed to Heroku.
  * Pass all automated tests.

&nbsp;
## Submission

When submitting this assignment, please include:

  * A link to the assignment's GitHub repository.
  * A link to the deployed application on Heroku.
  * A screenshot of the automated test results.
