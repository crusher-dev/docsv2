---
title: Integration with Vercel
sidebar_label: With Vercel
---
Integrate with Vercel to see status checks on every deployment.

:::note
   This will only work after linking github repo to your Crusher project.<br/>
   See [How to link your github repo]("/setting-up/github#link-your-github-repo")
:::


1. Go to [`Settings > Integration`](https://app.crusher.dev/settings/project/integrations)
2. Copy command in CI/CD section.
3. Go to vercel's project and `Settings > General > Build & Development Settings`
4. Override the default build command. To
   `your build command && [command-your-copied]`
5. Save your changes and trigger a new build to verify.
