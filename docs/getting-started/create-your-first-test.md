---
title: Create your first test
sidebar_label: Create your first test
---


import CrusherFeatures from '@components/page/index';


<head>
  <title>Create a test - Crusher docs</title>
  <meta
    name="description"
  />
</head>

Crusher makes creating a test super easy. You can integrate and create your first test within few mins.

<img src="https://i.imgur.com/fK6fwUk.png"/>



## Using CLI

<div style={{fontSize: 12, marginBottom: 24}}>Estimated time: 2 mins | Recommended</div>


Crusher can integrate in your git repo seamlessly. In your git repo, run

```shell
npx crusher-cli test:create
```


This is the recommended way for developers. Make sure you've npx/nodejs installed. If not, then install [nodejs](https://nodejs.org/en/download/) first.


## Or install recorder
<div style={{fontSize: 12, marginBottom: 24}}>Estimated time: 3 mins</div>


| Operation System| Download Link
|--|--|
|  MacOS (Dmg) | [Download](https://github.com/crusherdev/crusher-downloads/releases/tag/v1.0.32)
|  Linux (Deb)| [Download](https://github.com/crusherdev/crusher-downloads/releases/tag/v1.0.32)


Download and install native recorder. This is recommeded if you're not a developers or don't have access to the repo.


## Running the test

Once you have created your first test, you can run it with CLI directly.

```shell
npx crusher-cli test:run
```

Or use GUI to run test