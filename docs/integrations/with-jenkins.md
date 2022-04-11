---
title: Integrating Crusher tests with Jenkins
sidebar_label: With Jenkins
---
Integration with Jenkins can be done easily with the help of `crusher-cli`.  This guide will cover how you can trigger tests from your Jenkins pipeline

## Example repo

For reference, you can take a look at the [example repo](/integrations/with-jenkins) which uses jenkins to trigger crusher tests.

## JenkinsFile

```dockerfile
pipeline {
    agent {
        docker {
            image 'circleci/node:12.14.0-browsers'
        }
    }
    stages {
        stage('Test') {
            steps {
                // run crusher tests
                sh 'npx crusher-cli test:run --token=adsfsjkdfjksd --project-id=32'
            }
        }
    }
}
```

The above `JenkinsFile` is doing the following things,

1. Using `node:12.14.0` docker image as a base to prepare a basic node environment. (Needed for `crusher-cli`)
1. Triggering tests through `crusher-cli`  [test:run](https://docs.crusher.dev/cli/commands/test:run) command in your project from `—token` and -`-project-id` passed. (Look at how to get the token and project id)

## Getting token and project id

To get your user token and project id,

1. Open Crusher and go to Settings &gt; Integrations
1. Copy the command from the &quot;CI/CD&quot; command box.
1. Replace the command with this.