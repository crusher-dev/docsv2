---
title: Project linking
---

<head>
  <title>Basic usage | Maintain a Global Configuration File</title>
  <meta
    name="description"
    content="Set and print configuration values from project config files and the global CLI config file with Ionic CLI. Read to learn more about Capacitor configuration."
  />
</head>

When running crusher-cli for the first time, we need to link your project. You can choose to create a new project, or setup existing project.

Crusher seamlessly integrates with git enabled project.

During setup, we create configuration files at `~/.crusher/config.json` and `[project-dir]/.crusher/app.json`

### Setup new crusher project
```shell
$ npx crusher-cli init
```

It'll create a new project and create config files. We use origin in .git to identify the project. You can use same command to reinit the project.

:::note
 If project is not appearing, select a new project.
:::

<!-- ### Setup for non git porject

If project doesn't have .git folder. We'll ask you to choose a project or create one.


### Already using crusher in project

Run the following command, we'll identify project by git origin.
```shell
$ npx crusher-cli login
$ npx crusher-cli init
```
:::note
 Make sure to have project access. Or it'll create a new project.
:::

The above command we'll link existing project based on .git info. To create a blank project,

[INSERT HERE]
 -->
