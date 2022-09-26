---
title: 🏭 Architecture
sidebar_label: 🏭 Architecture
---

Crusher is open source testing framework, we are creating seamless testing workflow.

Therefore we will try to use other standard open source tools, and change it when needed. We held ourselves responsbile for end user experience.


Here's the high level architecture overview of Crusher
<a href="/img/architecture/high-level-architecture.svg" target="_blank"><img src="/img/architecture/high-level-architecture.svg"/></a>

Crusher replaces many tools with one e2e framework. We're opinionated and building features to make e2e workflow easy.

At crusher, we work across various tech in following manner.

- **Frontend** - React (using Nextjs), Jotai, SWR, Tailwind + emotion.
- **Backend** - Express, typescript, routing controller, typedi, Prisma.
- **Custom SDK powered by playwrigh**t, C++, Nodejs
- **Test runner & Worker**
- **Crusher recorder** - Electron, V8, Blink, C++, react, redux. This is not completely open source.


There are also dependencies like bullmq (for job management), postgres, etc.

We use monorepo architecture + typescript for shared type checking across packages. We strive to use typescript 100% but might often bypass it with any to develop fast. 
