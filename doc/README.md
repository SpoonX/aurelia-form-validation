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
