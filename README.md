Logo: ![Alt](/mddir.png "Title")

Mddir generates a markdown file/folder structure for readme files

https://www.npmjs.com/package/mddir

*Usage*

node mddir

By default this will generate a markdown file structure called directoryList.md pointing one folder up from the node_module folder, e.g.

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

You can edit the search path or folder ignore list manually

Comments: html5css3@outlook.com