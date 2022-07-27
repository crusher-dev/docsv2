---
title: 🔌 Proxy config for local dev & environment
sidebar_label: 🔌 Setup proxy for local dev 
---

Cloud environment often offers faster test execution in isolated environment. To run test, we should expose our local service to crusher test agents for use case such as

1.) **Testing local development** eg. Running test on localhost:3000

2.) **Setting up configuration for different env**. i.e. You created test on localhost:3000, now want to run it on https://example.com

## Setup crusher proxy config to run test locally

In `project_dir/.crusher/config.js` add following code.

Add proxy config key, for eg - here's sample code for localhost:3000

```json
"proxy": [{
    "name": "frontend",
    "url": "http://localhost:3000/",
    "intercept": "localhost:3000"
  }
]
```

Check  [ sample config file](https://github.com/crusherdev/docsv2/blob/ft-new/.crusher/config.json) with proxy. After that restart crusher

**Crusher will do following :-**

1.) Create local tunnel using cloudflare argo. 

2.) Test runner will use that tunnel to run test, and intercept request made to localhost:3001 and replace it with cloudflare tunnel.

## Use your own tunnel
You can also use your own tunneling solution such as ngrok or localtunnel.

Here's following proxy config.

```
"proxy": [{
    "name": "frontend",
    "url": "http://localhost:3000/",
    "intercept": "localhost:3000"
  }
]
```

**Note:-** Internal proxy is much faster/reliable than any localtunnel solution.

## FAQ

** Is using proxy required?**

If you're running test locally, No. If you're running test on cloud, and want to test local env then you need expose it to crusher test agent's.

** I am not able to page after using proxy?**

Wait for few seconds. There might be DNS caching at some levels.

** Is proxy secure?**

Proxy is e2e secured by cloudflare argo. If you have business use case, get in touch to learn more.
