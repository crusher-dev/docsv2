---
title: Integration Crusher tests with Vercel
sidebar_label: With Vercel
---

Crusher can integrate seamlessly with preview environments like Vercel.
A new test build is created whenever new build is deployed on Vercel.

This make sure your latest build is fully available without issue and bugs.

This can integrate with almost all major web frameworks.

## Setup

1.) Copy the command token from your crusher setting page.

2.) Go to vercel's project and Settings>General>Build & Development Settings.

3.) Override the default build command. To 
`
your build command  && crusher command
`

4.) Save change and trigger a nerw build.