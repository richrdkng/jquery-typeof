jQuery-typeof [![Build Status](https://travis-ci.org/richard-kng/jquery-typeof.svg?branch=master)](https://travis-ci.org/richard-kng/jquery-typeof)
=============
__A jQuery plugin to fix typeof inconsistencies in JavaScript. AMD (Require.js) and browser compatible.__

To support this project, you can at [the support page](http://richard-kng.github.io/support/) by supporting the developer.

Getting Started
---------------

__NPM__ ([What is NPM?](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-npm) [What is Grunt?](http://gruntjs.com/))

    npm install jquery-typeof

__Bower__ ([What is Bower?](http://bower.io/))

    bower install jquery-typeof

__Download directly__ __(Do not link this directly on your site, the file is sent with a plain/text header and can cause loading problems)__

- [jquery.typeof.js](https://raw.githubusercontent.com/richard-kng/jquery-typeof/master/lib/jquery.typeof.js)

API & Usage
-----------
The jQuery-typeof plugin provides a fix to overcome JavaScript native __typeof__ behaviour.

| Function | Description | Example |
| -------- | ----------- | ------- |
| $.typeof(value) | Returns the proper type of the passed __value__ as a string. | $.typeof([]) === "array" |

__In Browser (NPM)__
```html
    <!-- important to add jquery before jquery-typeof plugin -->
    <script src="node_modules/jquery-typeof/jquery.typeof.js"></script>
```
__In Browser (Bower)__
```html
    <!-- important to add jquery before jquery-typeof plugin -->
    <script src="bower_components/jquery-typeof/jquery.typeof.js"></script>
```
__In Browser (Require.js)__
```html
    <script>
        require(["jquery", "jquery-typeof"], function($) {
                /* jquery-typeof is usable from now on */
        });
    </script>
```
In case, you have some strange problems using __jQuery with Require.js__, try the following:
 - install __Require.js__ using npm (__npm install requirejs__)
 - install __jQuery__ using npm (__npm install jquery__)
 - install __jquery-typeof__ using npm (__npm install jquery-typeof__)

After these steps, using Require.js __.config(...)__ function, additional setup is needed to use jQuery:
```javascript
require.config({
    baseUrl: "./",
    paths: {
        jquery: "node_modules/jquery/dist/jquery"
    }
});
```
And the final, __usable example__:
```html
    <script>
        require.config({
            baseUrl: "./",
            paths: {
                jquery: "node_modules/jquery/dist/jquery"
            }
        });
        require(["jquery", "node_modules/jquery-typeof/jquery.typeof"], function($) {
                /* jquery-typeof is usable from now on */
        });
    </script>
```
In case you would like to use __paths__ to make the code more clear and readable, __this is recommended__:
```html
    <script>
        require.config({
            baseUrl: "./",
            paths: {
                jquery: "node_modules/jquery/dist/jquery",
                "jquery-typeof": "node_modules/jquery-typeof/jquery.typeof"
            }
        });
        require(["jquery", "jquery-typeof"], function($) {
                /* jquery-typeof is usable from now on */
        });
    </script>
```
__In Browser (Directly downloaded source)__
```html
    <!-- important to add jquery before jquery-typeof plugin -->
    <script src="scripts/jquery.typeof.js"></script>
```
In the code:
------------
```javascript
    /* This list below provides the usability of this plugin */

    $.typeof() === "undefined"
    $.typeof(undefined) === "undefined"
    $.typeof(null) === "null"
    $.typeof(true) === "boolean"
    $.typeof(false) === "boolean"
    $.typeof(-1) === "number"
    $.typeof(0) === "number"
    $.typeof(1) === "number"
    $.typeof(-Infinity) === "number"
    $.typeof(Infinity) === "number"
    $.typeof(NaN) === "number"
    $.typeof("string") === "string"
    $.typeof([]) === "array"
    $.typeof({}) === "object"
    $.typeof(function(){}) === "function"
    $.typeof(new Date()) === "object"
    $.typeof(/s+/g) === "object"
    $.typeof(new Error()) === "object"
```
Internet Explorer 8 and Below
-----------------------------
This plugins is __compatible with IE8__ and was tested with IE8 & __jQuery 1.9.0__.

Suggestions, Ideas & Requests
-----------------------------
Post any occurring suggestions, useful ideas and requests to the project's issue page under the __suggestion/idea/request__ label by clicking [here](https://github.com/richard-kng/jquery-typeof/labels/suggestion/idea/request).

 - Constructive criticism is encouraged and welcomed by contacting the developer or using GitHub.

Issues/Bugs
-----------
In case of any occurring issues and/or bugs, post on the project's [issues](https://github.com/richard-kng/jquery-typeof/issues) page with appropriate label(s).

Support
-------
If you find this tool useful, you can support this project by supporting the developer [here](http://richard-kng.github.io/support/).

Contribution & A Note
---------------------
In the spirit of open source software development, this project is always open to and encourages community code contribution. To get started, just run through the source file, check the comments and general coding style and start to contribute.

- In case you find this tool useful, [support it](http://richard-kng.github.io/support/) by supporting the developer, follow the developer on [social platforms](http://richard-kng.github.io/support/#social) or send an email to the developer.

License
-------
Copyright (c) 2014 "Richard KnG" Richárd Szakács. __Licensed under the MIT license__.

The license mentioned above applies to all parts of this software except as
documented below

All files located in the node_modules and external directories are
externally maintained libraries used by this software which have their
own licenses. We recommend you read them, as their terms may differ from
the terms above.