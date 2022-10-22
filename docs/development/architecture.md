---
title: Architecture
sidebar_label: Architecture
---

## Overview
Crusher replaces many tools with one e2e framework. We're opinionated and building features to make e2e workflow easy.

At crusher, we work across various tech in following manner.

<a href="/img/architecture/high-level-architecture.svg" target="_blank">
  <img src="/img/architecture/high-level-architecture.svg" />
</a>

### Core Components
- **Frontend** - React (using Nextjs), Jotai, SWR, Tailwind + emotion.
- **Backend** - Express, typescript, routing controller, typedi, Prisma.
- **Test runner & Worker**
- **Crusher recorder** - Electron, V8, Blink, C++, react, redux. This is not completely open source.

There are also dependencies like bullmq (for job management), postgres, etc.

### Codebase
We use monorepo architecture + typescript for shared type checking across packages. We strive to use typescript 100% but might often bypass it with any to develop fast.
