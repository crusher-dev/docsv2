---
title: 🔌 Proxy config for local dev & environment
sidebar_label: 🔌 Setup proxy for local dev 
---

Often, cloud environment offers faster test execution in an isolated environment. Doing so is easy, you just need to expose your local service to crusher test agents depending on your use-case such as,

1. [**Testing local development**](#testing-local-development): You want to run test against your local service. Super-helpful during development.

2. **Setting up configuration for different env**: You created test for localhost:3000, and now want to run it on https://stage.your-domain.com


## Testing local development

In `<project_dir>/.crusher/config.js` add following code, and restart crusher

```json
"proxy": [{
    "name": "frontend",
    "url": "http://localhost:3000/", // <-- Url of your local service
    "intercept": "localhost:3000" // <-- Url our test-runner should re-route to your local-service
  }]
```


Example: Check  [sample config file](https://github.com/crusherdev/docsv2/blob/ft-new/.crusher/config.json) with proxy. 

:::info &nbsp;&nbsp; How will it work?
1. A local tunnel will be created using cloudflare argo. 
2. Test runner will use that tunnel to run test, and intercept requests made to localhost:3000 and re-route to the tunnel.
:::

## FAQ

** Is using proxy required?**<br/>
If you're running test locally, No. If you're running test on cloud, and want to test local env then you need expose it to crusher test agent's.

** I am not able to page after using proxy?**<br/>
Wait for few seconds. There might be DNS caching at some levels.

** Is proxy secure?**<br/>
Proxy is e2e secured by cloudflare argo. If you have business use case, get in touch to learn more.
