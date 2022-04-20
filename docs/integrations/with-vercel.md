---
title: Integration Crusher tests with Vercel
sidebar_label: With Vercel/Netlify
---


Crusher can integrate seamlessly with preview environments like Vercel. This tutorial is also valid for similar services like Netlify.

A new test build is created whenever new build is deployed on Vercel.

This make sure your latest build is fully available without issue and bugs.

This can integrate with almost all major web frameworks.

## Setup

1. Go to [`Settings > Integration`](https://app.crusher.dev/settings/project/integrations)

2. Copy command in CI/CD section.


3. Go to vercel's project and `Settings > General > Build & Development Settings`

4. Override the default build command. To
`
your build command  && [command-your-copied]
`

5. Save your changes and trigger a new build to verify.

:::info Info
Integrate with Github to see status checks on commits & pull requests.
:::