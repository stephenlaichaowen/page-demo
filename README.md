# Page Demo Sapper App

## How to setup this project

Create a directory, for example `sapper-app`, and open this directory with VSCode

Clone this repo and and place under `sapper-app` directory

Change directory 
```
cd page-demo-sapper-app-master
```

Install all the dependencies
```
npm i
```

Start development
```
npm run dev
```

## Upload your Sapper project to Github

Create a local git repo
```
git init
```

Add all files to local repo
```
git add .
```

Commit your local git repo
```
git commit -m "your-comment"
```

Create a new repo in your Gituhb account (`github.com`)

Click `new`

Enter your Repository name and click `Create repository`

Establish remote connection on the command line
```
git remote add origin https://github.com/[your-name]/[your-repo-name].git
```

Push your local repo to your Github account
```
git push origin master
```

## Deploy Sapper App to Netlify

Login your Netlify account

Go to `app.netlify.com/teams/[your-team]/sites` page

Click `New site from Git`

Select `GitHub`  under `Continuous Deployment`

Type your repo name in `Search repos` input box or simply click the item list

Enter `npm run export` in `Build command` input box

Enter `__sapper__/export` in `Publish directory` input box

Click `Deploy site`










