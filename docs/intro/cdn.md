---
title: Create a test
sidebar_label: Create a test
---

<head>
  <title>Ionic Framework Packages: CDN, Angular, Vue, and React</title>
  <meta
    name="description"
    content="View our different packages that can be used to quickly start using Ionic Framework or Ionicons CDN in a test environment, Angular, Vue, React, or none at all."
  />
</head>

Crusher makes creating a test super easy. You can integrate and create your first test within few mins.

<img src="https://i.imgur.com/fK6fwUk.png"/>



## Using CLI

<div style={{fontSize: 12, marginBottom: 24}}>Estimated time: 2 mins | Recommended</div>


Crusher can integrate in your git repo seamlessly. Just run in your git repo

```shell
$ npx crusher-cli test:create
```


This is the recommended way for developers.


Make sure you've npx/nodejs installed. If not, then install [nodejs](https://nodejs.org/en/download/) first.


## Or install recorder
<div style={{fontSize: 12, marginBottom: 24}}>Estimated time: 3 mins</div>

Download and install native recorder. This is recommeded if you're not a developers or don't have access to the repo.


| Operation System | How to install? | Download Link |
|--|--|--|
|  MacOS (Dmg) | [Guide](/docs/how-to/installing-crusher-recorder#how-to-install-dmg-on-mac-os)  | [Download](https://github.com/crusherdev/crusher-downloads/releases/download/0.99/crusher-recorder.dmg) |
|  Linux (Deb)| [Guide](/docs/how-to/installing-crusher-recorder#how-to-install-deb)  | [Download](https://github.com/crusherdev/crusher-downloads/releases/download/0.99/crusher-recorder.deb) |



## Running the test

Once you have created your first test, you can run it with CLI directly.

```shell
$ npx crusher-cli test:run
```

Or use GUI to run test