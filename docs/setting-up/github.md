---
title: Github Commit/PR check
sidebar_label: Github checks
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


:::note  
This feature is available both in <a href="#in-desktop-app">local app</a> and at app.crusher.dev
:::


### Link your github repo

To enable alerts on slack, 

- Go to project settings -> Integration

- Click connect in github integration

<img src="https://i.imgur.com/MxcfD6R.png"/>
<br/>
- Choose github repo.

### Setup github actions
<Tabs>
  <TabItem value="developers" label="Next.js" attributes={{className: "tab-item"}} default>
  <blockquote style={{padding: "12px 16px", borderRadius: 2, background: "rgba(0, 0, 0, 0.15)"}}>
    <h6>Using vercel deployments?</h6>
    Checkout: <a href="integrations/with-vercel">Integration with Vercel/Netlify</a>
    
  </blockquote>
    <CodeBlock className={"language-yaml"}>{`name: Running tests
on:
  push:
    branches:
      - main
steps:
  - uses: actions/checkout@v3
  - uses: actions/setup-node@v3
    with:
      node-version: 16
      cache: 'npm'
  - name: Install node modules
    run: npm i
 
  - name: Build and start server in background
    run: npm run build && npm run start &
 
  - name: Run tests and exit
    run: npx crusher.dev test:run && kill -9 $!`}
    </CodeBlock>
  </TabItem>
  <TabItem value="starters" label="React" attributes={{className: "tab-item"}}>
    <CodeBlock className={"language-yaml"}>{`name: Running tests
on:
  push:
    branches:
      - main
steps:
  - uses: actions/checkout@v3
  - uses: actions/setup-node@v3
    with:
      node-version: 16
      cache: 'npm'
  - name: Install node modules
    run: npm i
 
  - name: Start server in background
    run: npm run start &
 
  - name: Run tests and exit
    run: npx crusher.dev test:run && kill -9 $!`}
    </CodeBlock>
  </TabItem>
  <TabItem value="netlify" label="Vue.js" attributes={{ className: "tab-item"}}>
  </TabItem>
  <TabItem value="angular" label="Angular" attributes={{ className: "tab-item"}}>
  </TabItem>
</Tabs>


### Checks on commit & PR

You can received update on github message when build is run corresponding to commit.

<img src="https://i.imgur.com/6n75mP1.png" style={{opacity: ".8", borderRadius: 16, marginTop: 20}}/>