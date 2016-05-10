# javascript-testing
JavaScript Testing

### Install procedure

```shell
npm init
npm install karma --save-dev
npm install -g karma-cli
npm install karma-jasmine karma-chrome-launcher --save-dev
karma init karma.conf.js
```

Answer the prompts as follows:

Which testing framework do you want to use?
Hit return to accept the default value i.e. jasmine.

Do you want to use Require.js ?
Hit return to accept the default value i.e. no.

Do you want to capture any browsers automatically ?
Hit return to accept the default value i.e. Chrome.

What is the location of your source and test files ?
Enter the following value:

tests/*.test.js
Don’t worry if you accidentally skipped this, we can directly edit the config file at a later stage.

Should any of the files included by the previous patterns be excluded ?
Hit return to accept the default value.

Do you want Karma to watch all the files and run the tests on change ?
Hit return to accept the default value. i.e. yes

The config file called karma.conf.js will be created in the root folder.

We can use this file to run the tests from the Terminal/Command Prompt with the command:

karma start karma.conf.js

### Useful Karma commands


```shell
// Run this or npm test which is less verbose
karma start karma.conf.js
npm test
```