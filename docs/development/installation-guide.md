---
title: 🐳 Docker deploy
sidebar_label: 🐳 Docker deploy
---

We've tried to make it super easy to install Crusher locally. It is the best option if you're looking to try Crusher locally.

:::tip
If you want to use Crusher regularly, either deploy crusher on server or use Crusher Cloud. With this your assests and service is always publicly available.
:::


## Requeriement

Make sure you've machine with 3 vCPU and 4GB RAM available (minimum).

Recommened -  4 vCPU and 4GB RAM available (minimum).


## Steps to run locally

Before starting, make sure you have docker cli and docker engine setup.

1.) Curl docker file in folder. If you alread have redis, postgres installed run.


2.) Run ```docker compose-up```

3.) Once done, check the status with ```docker ps```

4.) (Optional) If you're using server, make sure you point dns to ip address and change env variables.

5.) Create test using server.