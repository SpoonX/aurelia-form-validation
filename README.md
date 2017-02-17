# aurelia-form-validation

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=plastic)](https://gitter.im/SpoonX/Dev)

A plugin for [aurelia-form](https://aurelia-form.spoonx.org) that enables form validation.

## Usage
Using this plugin is an automatic process.
All you have to do is install it, and register the plugin in main.js after aurelia-form.

## Configuration
This plugin and aurelia-form use [aurelia-config](https://aurelia-config.spoonx.org/).

The config for this plugin is:

```js
{
  'aurelia-form': {
    validation: {
      controller: validationController,
      trigger: validateTrigger.change
    }
  }
}
```

**Note:** Generally you'll only change the trigger (defaults to change).
Only change the controller if you know what you're doing. 

## Installation

### Aurelia-Cli

Run `npm i aurelia-form-validation--save` from your project root.

Aurelia-form-validationmakes use of `extend`. So, add following to the `build.bundles.dependencies` section of `aurelia-project/aurelia.json`.

```js
{
  "dependencies": [
    // ...
    "extend",
    {
      "name": "aurelia-form-validation",
      "path": "../node_modules/aurelia-form-validation/dist/amd",
      "main": "aurelia-form-validation"
    },
    // ...
  ]
}
```

### Jspm

Run `jspm i aurelia-form-validation` from your project root.

Add following to the desired `includes` section of `build/bundles.js`, eg:

```js
"aurelia": {
  "includes": [
    //...
    "aurelia-form-validation",
    "[aurelia-form-validation/**/*.js]"
    //...
  ]
}
```

If the installation results in having forks, try resolving them by running:

```sh
jspm inspect --forks
jspm resolve --only registry:package-name@version
```

### Webpack

Run `npm i aurelia-form-validation--save` from your project root.

And add `aurelia-form-validation` in the `coreBundles.aurelia` section of your `webpack.config.js`.

### Typescript

Npm-based installations pick up the typings automatically.
For Jspm-based installations, run `typings i github:spoonx/aurelia-form-validation` or add `"aurelia-form-validation": "github:spoonx/aurelia-form-validation",` to your `typings.json` and run `typings i`.
