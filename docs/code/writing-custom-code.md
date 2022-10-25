---
title: Code Overview
sidebar_label: Overview
---

1. Click on "Code" from the sidebar
2. Write the code inside the `validate` function
3. Click "Save & Run"

<img src={require('@site/static/img/code/code.png').default} />

##### What is `validate()` function?

All the custom-code and logic would go inside the `validate()` function in the editor.
This function is then executed in a sandbox environment (for security) and we conclude
if the step has passed/failed.

Args passed to this function: 
1. [`crusherSdk`](#crusher-sdk)
2. `ctx`: Context object shared across the test

:::note
The initial code in the modal should not be edited or deleted. Press <b>Enter</b> at the
end of line 6 to start writing the code.
:::

## Crusher SDK ##
Crusher SDK is our wrapper over playwright to simplfiy writing code and provide other important
utilities. This is how it looks:

- `playwright`
  - [`page`](https://playwright.dev/docs/api/class-page) - playwright page object for current page
  - [`mouse`](https://playwright.dev/docs/api/class-mouse) - native mouse control
  - [`keyboard`](https://playwright.dev/docs/api/class-keyboard) - native keyboard control
- `utils`
  - `test` - includes sleep, etc.,
  - `page` - includes verifyLink, etc.,

For more information, you can checkout the [full SDK reference](/sdk/reference)

### Usecases
If you are interested in different use-cases you can use code for, checkout [Code Usecases](/advanced/custom-code-usecases-1)