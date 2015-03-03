![Alt](/mddir.png "Title")

Mddir generates a markdown file/folder structure for readme files

https://www.npmjs.com/package/mddir

# Usage

node mddir "../relative/path/"

# Example

Open the terminal or command prompt and cd into the mddir/src folder.

Usage instructions:
```sh
$ cd ~/Documents/demo-project
$ pwd
Users/username/Documents/demo-project
$ npm install mddir --save
$ cd node_modules/mddir/src
$ pwd
Users/username/Documents/node_modules/mddir/src
$ ls
mddir.js
$ node mddir "../../../"
// Exports 'directoryList.md' in mddir/src folder
```

If no path is specified mddir will default to three folders above the mddir/src folder (assumes that mddir is installed in project/node_modules/mddir/src).

Currently ignores node_modules, and .git folders.

### Example generated markdown file structure 'directoryList.md'

    |-- .bowerrc
    |-- .jshintrc
    |-- .jshintrc2
    |-- Gruntfile.js
    |-- README.md
    |-- bower.json
    |-- karma.conf.js
    |-- package.json
    |-- app
        |-- app.js
        |-- db.js
        |-- directoryList.md
        |-- index.html
        |-- mddir.js
        |-- routing.js
        |-- server.js
        |-- _api
            |-- api.groups.js
            |-- api.posts.js
            |-- api.users.js
            |-- api.widgets.js
        |-- _components
            |-- directives
                |-- directives.module.js
                |-- vendor
                    |-- directive.draganddrop.js
            |-- helpers
                |-- helpers.module.js
                |-- proprietary
                    |-- factory.actionDispatcher.js
            |-- services
                |-- services.cardTemplates.js
                |-- services.cards.js
                |-- services.groups.js
                |-- services.posts.js
                |-- services.users.js
                |-- services.widgets.js
        |-- _mocks
            |-- mocks.groups.js
            |-- mocks.posts.js
            |-- mocks.users.js
            |-- mocks.widgets.js

Comments: html5css3@outlook.com

### Version
1.0.3


### Todo's

 - Write Tests
 - Add Grunt task/wrapper
 -Readm git ignore for folder ignore list

License
----

MIT


**Free Software, Hell Yeah!**

*john byrne*: http://johnbyrne.info/