---
title: Crusher SDK Reference
sidebar_label: Reference
---
This page contains API reference for the crusher SDK, which can be used while writing custom code.
## Page Actions ##
Accessed through `crusherSdk.page`

1. `.screenshot({timeout?: number; name?: string;})`
2. `.querySelector(elementSelector, { waitUntil: "visible" | "in-dom" | null, timeout?: number })`
3. `.evaluate(([...args]) => any, arguments, {timeout?: number})`
4. `.waitForFunction(js_code, {timeout?: number})` : Waits for the js_code to return true, until timeout
5. `.exposeFunction(func_name, (..args => any))` : Exposes the javascript function code in the webpage’s window. It can be helpful in communication between webpage and test-runner server.
6. `.url()`: Returns current url of the page
7. `.waitForNavigation(url: string, {timeout?: number})`
8. `.navigate(url, {timeout?: number})`
9. `.runTemplate(templateId)` : In-future

## Element Actions ##

Operation over DOM element instances, i.e after `crusherSdk.page.$(selector)`:

1. `.click({ timeout?: number; }): Promise<void>`
2. `.hover({ timeout?: number; }): Promise<void>`
3. `.screenshot({ timeout?: number; name?: string; }): Promise<string>`
4. `.evaluate((element, [...args]) => any, arguments, { timeout?: number; }): Promise<ElementInstance | JsonValue>`
5. `.scrollIntoView()`

## Assertions
- This will follow the jest standard API’s, i.e `expect(var).toContain(””)`
- `expect(var).toBe(value)` - Equal object instance
- `expect(var).not.toBe(value)` - Negative assertion
- `expect(var).toMatchObject()` - For matching object
- `expect(image_screenshot_path).toMatchBaseline({ overrideBaseline?: null | number })` - Custom method for comparing to baseline
- `expect([]).toContain(”item”)` :- Assertion for array to check if it contains an item

## Utilities

1. `.sleep(timeInMs)`: Waits and pauses execution for the specified interval
2. `.fetch(url, options)`: Makes request in the node-process and returns the response. Can be useful to avoid CORS related errors. This is different from running network request in the browser itself. If you are looking for how to run network request in browser itself with cookies, checkout this section
3. `.setCookies(cookies: any)` : Set cookies through custom-code
4. `.mock()`: (In-future) Create a mock/stub API route when running the tests. Every API responses and behaviour can be customised with this.