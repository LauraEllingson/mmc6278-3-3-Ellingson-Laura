# Heroku Deployment Instructions

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;
## Introduction

[Heroku](https://www.heroku.com/) is a [Salesforce](https://www.salesforce.com/) product that makes deploying full-stack applications relatively painless. Although Heroku offers paid tiers, there is a generous free tier available that will cover our needs for class.

The only downside to the Heroku free tier is that your app will "spin down" after periods of inactivity, and will then have to "spin up" after a new request comes in. This "cold start" means that your user may have to wait a few seconds longer than normal to access your app if they are the first user to have accessed it in some time.

&nbsp;
## Setup

Navigate to the [Heroku](https://www.heroku.com/) homepage and sign up for an account.

Using your student email, sign up for the [GitHub Student Developer Pack](https://education.github.com/pack).

**NOTE:** Heroku **used** to be a "freemium" resource, but have recently eliminated all of their free plans for hosting. You do get free Heroku credits with the GitHub student dev pack however which you can use to complete and deploy your coursework without paying anything out of pocket.

After creating a Heroku account, install the Heroku CLI. In your terminal, run:

```
npm i -g heroku
```

This will install the Heroku CLI globally on your machine using NPM. To verify Heroku works, run:

```
heroku login
```

&nbsp;
## Creating a Heroku App

Although you can create a heroku app from the Heroku CLI, instead create your Heroku apps from the [heroku dashboard](https://dashboard.heroku.com/new-app). This allows you to pick a name for your app upfront instead of letting Heroku generate a random app name and having to change it later. For the rest of this guide, let's assume you create an app named `banana-apple-mango`.

Next, in your terminal, navigate to your assignment's git repository folder. You'll need to add the Heroku remote to git so that you can push to Heroku.

You can either run:

```
heroku git:remote -a banana-apple-mango
```

Or:

```
git remote add heroku https://git.heroku.com/banana-apple-mango.git
```

You can verify that you've added the remote correctly by running:

```
git remote -v
```

You should see remote addresses for both origin (GitHub) and heroku.

&nbsp;
## Deployment

To deploy your app with Heroku, you simply need to make a git commit and push to heroku. Assuming you have a default branch named `master`, you would run the following command:

```
git push heroku master
```

This will push your latest git commit to Heroku for deployment. You can technically push any branch you would like to Heroku, but I recommend sticking to your default branch.

&nbsp;
## Dynos (How to make your free Heroku credits last a long time)

Heroku calls its environments where we deploy our code "dynos". This also is how Heroku denotes the payment model for each project you deploy.

Under the "overview" tab of each project page, there is a section titled "Dyno Formation". You want to set this to an "eco dyno", which is what Heroku is now calling what used to be its free tier of service.

An eco dyno "spins up" when a request comes in after a long period of inactivity, and spins down when requests stop coming in to save resources and the expense of a long initial load time. More importantly, eco dynos share a resource count across your account. This means that you can have as many eco dynos as you want as long as they only consume 1000 hours of runtime a month. This should be plenty of time for all of your projects.

The eco dyno plan only costs $5 per month for unlimited apps/1000 hours of runtime, but deployed apps default to "Basic", which is $7/month per application.

**Be sure to set all of your projects to the "Eco" dyno type so your projects use as few dollars/credits as possible. Otherwise you'll burn through your free Heroku credits quickly.**

&nbsp;
## Handling Environmental Variables (.env)

Starting with module 3's assignment, you'll notice that most assignments contain a `.env` file for environmental variables (values that change for the program depending on where the program is running). This file is used to share sensitive variables with your application **on your machine only**. Any `process.env.VAR_NAME` lines in the server-side JavaScript are converted/attached to `process.env` from the `.env` file by the [dotenv](https://www.npmjs.com/package/dotenv) package.

However, the `.env` must **NOT** be pushed to GitHub or Heroku, and that is why each assignment asks you to ensure `.env` is listed in the `.gitignore` file. Environmental variables are usually sensitive values like API keys, and so we don't want to post those publicly on GitHub.

When deploying to Heroku, because the `.env` is ignored with Git, Heroku won't have access to those values. However, Heroku has a different method for handling environmental variables. **Any `.env` file variables must be added to your Heroku project through the settings tab.** Click the "reveal config vars" option in settings, and you will see a place to add key/value pairs. The key would be the part before the `=` in the env file, and the value the part after.

If you add env vars to Heroku after deploying, you'll need to either re-deploy or click "restart all dynos" in the "more" drop-down in the top right of your project page in the Heroku dashboard. This is because the environmental variables are read into the application on startup in Heroku.

&nbsp;
## Troubleshooting

If you have issues with Heroku deployments, you can follow a few steps:

- Heroku looks for your `package.json` file when deploying. If this file is not in the root directory of your repository, Heroku will not understand how to deploy your application.
- If your app is crashing on Heroku after deployment, you can run `heroku logs --tail` or navigate to your Heroku app's dashboard page and click the "more" button in the top right and "view logs" to view logged output from your app.
