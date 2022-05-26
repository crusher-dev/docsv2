---
title: 🧱 Developing locally
sidebar_label: 🧱 Developing locally
---

Crusher is integrated system based on javascript environment. We've made it very simple to contribute and fix a bugs

### Prerequisites
Make sure you've node >14 installed. We use monorepo structure using yarn workspace. And use typescript for static typing.

We also use two data services

1.) *Redis. For storing jobs and queuing data. <a href="https://redis.io/docs/getting-started/installation/">How to install</a>

2.) Postgres. For storing data. <a href="https://gist.github.com/15Dkatz/321e83c4bdd7b78c36884ce92db26d38">How to install</a>

Crusher support linux (ubuntu majorly) and MacOS as of now for development

### Setting up local environment

#### 1.) Clone the repo.
```
git@github.com:crusherdev/crusher.git
```

#### 2.) Install packages. This will install node_modules and might take 3-4 mins on first run.
```bash
yarn install
yarn setup:ee
```
There are two ways you can initialize your project, depending on which edition you want to work on:
- `yarn setup:oss` will initialize the project for OSS edition
- `yarn setup:ee` will initialize the project for EE edition

#### 3._ **Configure Environment Variables**
```bash
nano .env
```
We store environment variables in `.env` file. Just configure three values to get started
```
DB_CONNECTION_STRING=postgresql://user:secret@localhost
DISABLE_POSTGRES_SSL=true
REDIS_CONNECTION_STRING=redis://localhost:6379
```
See [Environment Variables](#environment-variables), if you want to know about all the environmental variables available for configuration.

#### 4.) **Run DB migrations**
```bash
yarn db:migration
```

This will bootstrap db from `db/schema.sql` or run any pending migrations.

 #### 5. **Start all the services**
```
pm2 start
```

Go ahead and try to open  [http://localhost:3000](`http://localhost:3000`). If you see the login screen and authentication is working fine, you have successfully set up crusher on your system 🚀

To check the status you can use following commands to see status, see logs and kill all services.

```
pm2 status 
pm2 logs -f service_name
pm2 stop
```

### Supported OS
The source code has been built and tested on **Ubuntu** and **macOS**. We haven't tested the building source code on other systems, so if you encounter any issues setting up for a different OS, feel free to file an issue for it.

:::tip
If you don't want to do all the setup chores, you can click on `Open in Gitpod` inside *README.md* and use gitpod for development.
:::
