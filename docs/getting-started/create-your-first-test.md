---
title: Create your first test
sidebar_label: Create your first test
---

import CrusherFeatures from '@components/page/index';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Create a test - Crusher docs</title>
  <meta name="description" />
</head>

Crusher is e2e testing platform for developers/QA, that allows you to create, manage and run test for your project.

<br/>
<Tabs>
  <TabItem value="developers" label="Developers" attributes={{className: "tab-item"}} default>

<br/>
In git repo, run

<br/> <br/>

```shell
npx crusher.dev
```


This is the recommended way for developers. Make sure you've npx/nodejs installed.

 If not, then install [nodejs](https://nodejs.org/en/download/) first.

  </TabItem>
  <TabItem value="starters" label="Others" attributes={{className: "tab-item"}}>

 <br/> 

| Operation System | Download Link                                                                    |
| ---------------- | -------------------------------------------------------------------------------- |
| MacOS (Dmg)      | [Download](https://github.com/crusherdev/crusher-downloads/releases/tag/v1.0.32) |
| Linux (Deb)      | [Download](https://github.com/crusherdev/crusher-downloads/releases/tag/v1.0.32) |

Download and install native recorder. This is recommeded if you're not a developers or don't have access to the repo.
  </TabItem>
</Tabs>

###  Recording first test
<iframe style={{borderRadius: 10, border: '1px solid grey'}} width="640" height="416" src="https://www.loom.com/embed/4d7671daaea5401c89731d2f7c333388" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Running the test

Once you have created your first test, you can run it with CLI directly.

```shell
npx crusher-cli test:run
```

Or use GUI to run test
