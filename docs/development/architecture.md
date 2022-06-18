---
title: 🏭 Architecture
sidebar_label: 🏭 Architecture
---

Crusher is open source for small teams. We try to existing tools which are scalable and try to make workflows simple to use.

<a href="/img/architecture/high-level-architecture.svg" target="_blank"><img src="/img/architecture/high-level-architecture.svg"/></a>

Crusher replaces many tools with one e2e framework. We're opinionated and building features to make e2e workflow easy.

At crusher, we work across various tech in following manner.

- **Frontend** - React (using Nextjs), Jotai, SWR, Tailwind + emotion.
- **Backend** - Express, typescript, routing controller, typedi, Prisma.
- **Custom SDK powered by playwrigh**t, C++, Nodejs
- **Test runner & Worker**
- **Crusher recorder** - Electron, V8, Blink, C++, react, redux.


other dependencies like bullmq, postgres, etc.

We use monorepo architecture + typescript for shared type checking across packages. We strive to use typescript 100% but might often bypass it to develop fast. 

You can contribute easily, feel free to ask how to make changes.

