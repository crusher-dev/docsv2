---
title: 🔌 Network configuration for development & environment
sidebar_label: 🔌 Setup network config
---

You will usually run in following problem

1.) **Testing local development after making changes** eg. Running test on localhost:3000

2.) **Setting up configuration for different env**. i.e. You created test on localhost:3000, now want to run it on https://example.com


To resolve these issue, crusher has networking option. While running test

1.) We create tunnel powered by Cloudflare.

2.) Replace baseURL and dependednt services

## Setup config to run test locally


```js

network: {
  frontend: {
   currentURL: "localhost:3000",
   otherURL: [3001], // <-- Aliases for your networj
   prodUrl "https://app.crusher.dev"
  }
}
..
```

While running test locally in cloud mode. 
1.) We will create tunnel for localhost:3000

2.) Replace localhost:30001 & https://app.crusher.dev with URL given by cloudflare.


#### Configuration for backend services

```js

network: {
  backend: {
   currentURL: "localhost:8000",
   otherURL: [3002], // <-- Aliases for your networj
   prodUrl "https://backend.crusher.dev"
  }
}
..
```

We will replace backend at test runtime. If you're using build time configuration, read this doc.

#### Using tunnel configuration at build time

## Running test on production

## References

## Best Practices

## FAQ


